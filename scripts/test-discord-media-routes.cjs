const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/SchedulerRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/Scheduler.ts', 'utf8');

assert(routes.includes("'/schedulers/{scheduler_id}/discord/media'"), 'Missing Discord media search route');
assert(routes.includes("'/schedulers/{scheduler_id}/discord/media/import'"), 'Missing Discord media import route');
assert(routes.includes("'/schedulers/{scheduler_id}/discord/user-command'"), 'Missing Discord user command status route');
assert(routes.includes("'/schedulers/{scheduler_id}/discord/captures'"), 'Missing Discord capture list route');
assert(routes.includes("'/schedulers/{scheduler_id}/discord/captures/import'"), 'Missing Discord capture import route');
assert(api.includes('static searchDiscordMedia<T'), 'Missing Discord media search method');
assert(api.includes('static importDiscordMedia<T'), 'Missing Discord media import method');
assert(api.includes('static getDiscordUserCommandStatus<T'), 'Missing Discord user command status method');
assert(api.includes('static listDiscordMediaCaptures<T'), 'Missing Discord capture list method');
assert(api.includes('static importDiscordMediaCapture<T'), 'Missing Discord capture import method');
assert(api.includes('static dismissDiscordMediaCapture<T'), 'Missing Discord capture dismiss method');
assert(api.includes('DiscordMediaImportRequest'), 'Missing Discord import request type');
assert(api.includes('DiscordMediaSearchResponse'), 'Missing Discord search response type');

const importMethod = api.slice(api.indexOf('static importDiscordMedia<T'), api.indexOf('static importDiscordMedia<T') + 700);
assert(importMethod.includes('SchedulerRoute.routes.importDiscordMedia'), 'Discord import method uses the wrong route');
assert(!importMethod.includes('scheduleUpdate'), 'Discord import must never call the scheduling route');

const captureImportMethod = api.slice(api.indexOf('static importDiscordMediaCapture<T'), api.indexOf('static importDiscordMediaCapture<T') + 800);
assert(captureImportMethod.includes('SchedulerRoute.routes.importDiscordMediaCapture'), 'Discord capture import method uses the wrong route');
assert(!captureImportMethod.includes('scheduleUpdate'), 'Discord capture import must never call the scheduling route');

console.log('Discord media SDK route tests passed.');
