const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const calls = [];
const cache = new Map();
const axios = (config) => { calls.push(config); return Promise.resolve({ data: { data: {} } }); };
function load(file) {
    const absolute = path.resolve(file);
    if (cache.has(absolute)) return cache.get(absolute).exports;
    const module = { exports: {} };
    cache.set(absolute, module);
    const source = ts.transpileModule(fs.readFileSync(absolute, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
    const localRequire = (name) => name === 'axios' ? axios : name.startsWith('.') ? load(path.resolve(path.dirname(absolute), `${name}.ts`)) : require(name);
    vm.runInNewContext(`(function(require,module,exports){${source}\n})`, { FormData, Blob, URL, console })(localRequire, module, module.exports);
    return module.exports;
}
const Api = load('src/api/FestivalNetworking.ts').default;
const Requests = load('src/util/Requests.ts').default;
Requests.setBaseUrl('https://api.example.test/api');
Requests.setAuthToken('test-token');
const base = 'https://api.example.test/api/gameshows/festival/networking/';
const controller = new AbortController();
const options = { signal: controller.signal, timeout: 5000 };
const data = { title: 'Opportunity', content: '<h2>Rich description</h2><p><strong>Bold</strong></p>' };
const cases = [
    ['settings', ['festival', options], 'GET', 'settings'],
    ['updateSettings', ['festival', { jobs_enabled: true }], 'PUT', 'settings'],
    ['listPosts', ['festival', { kind: 'job', page: 2 }, options], 'GET', 'posts?kind=job&page=2'],
    ['createPost', ['festival', data], 'POST', 'posts'],
    ['getPost', ['festival', 'post', options], 'GET', 'posts/post'],
    ['updatePost', ['festival', 'post', data], 'PUT', 'posts/post'],
    ['listComments', ['festival', 'post', { page: 2 }, options], 'GET', 'posts/post/comments?page=2'],
    ['createComment', ['festival', 'post', { content: '<p>Reply</p>' }], 'POST', 'posts/post/comments'],
    ['setInteraction', ['festival', 'post', { action: 'vote', value: 0 }], 'PUT', 'posts/post/interaction'],
    ['apply', ['festival', 'post', { message: '<p>Hello</p>' }], 'POST', 'posts/post/apply'],
    ['matches', ['festival', 'post', { page: 1 }, options], 'GET', 'posts/post/matches?page=1'],
    ['report', ['festival', 'post', { reason: 'spam' }], 'POST', 'posts/post/report'],
    ['applications', ['festival', { page: 2 }, options], 'GET', 'applications?page=2'],
    ['updateApplication', ['festival', 'application', { status: 'withdrawn' }], 'PUT', 'applications/application'],
    ['conversation', ['festival', 'application'], 'POST', 'applications/application/conversation'],
    ['moderation', ['festival', { page: 2 }, options], 'GET', 'moderation?page=2'],
    ['moderatePost', ['festival', 'post', { remove_media: true }], 'PUT', 'moderation/posts/post'],
    ['resolveReport', ['festival', 'report', { status: 'resolved' }], 'PUT', 'moderation/report'],
    ['restrictMember', ['festival', 'user', { banned: true }], 'PUT', 'members/user'],
    ['preferences', ['festival', options], 'GET', 'preferences'],
    ['updatePreferences', ['festival', { notifications: false }], 'PUT', 'preferences'],
    ['media', ['festival', { page: 1 }, options], 'GET', 'media?page=1'],
    ['organizations', ['festival', options], 'GET', 'organizations'],
    ['analytics', ['festival', options], 'GET', 'analytics'],
];
async function main() {
    for (const [name, args, method, route] of cases) {
        await Api[name](...args);
        const call = calls.pop();
        assert.equal(call.method, method, name);
        assert.equal(call.url, base + route, name);
        assert.equal(call.headers.Authorization, 'Bearer test-token', name);
        if (args.includes(options)) { assert.equal(call.signal, controller.signal); assert.equal(call.timeout, 5000); }
        if (name === 'createPost' || name === 'updatePost') assert.equal(call.data.content, data.content);
    }
    const progress = () => {};
    await Api.uploadMedia('festival', new Blob(['image bytes'], { type: 'image/png' }), { kind: 'job' }, progress, options);
    const upload = calls.pop();
    assert.equal(upload.url, base + 'media');
    assert.equal(upload.method, 'POST');
    assert.equal(upload.data.get('kind'), 'job');
    assert.equal(upload.data.get('media').type, 'image/png');
    assert.equal(upload.signal, controller.signal);
    assert.equal(upload.onUploadProgress, progress);
    assert.equal(upload.headers['Content-Type'], undefined, 'Browser sets multipart boundary');
    await Api.getPost('festival', 'post/another?x=1');
    assert.equal(calls.pop().url, base + 'posts/post%2Fanother%3Fx%3D1');
    assert.match(fs.readFileSync('src/index.ts', 'utf8'), /FestivalNetworking: FestivalNetworking/);
    console.log('Festival networking: 25 SDK endpoints, private conversations, ownership uploads, rich text, auth, parameters and cancellation passed.');
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
