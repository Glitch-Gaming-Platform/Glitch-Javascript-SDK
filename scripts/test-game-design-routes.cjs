const fs = require('fs');
const assert = require('assert');

const routes = fs.readFileSync('src/routes/GameDesignRoute.ts', 'utf8');
const api = fs.readFileSync('src/api/GameDesign.ts', 'utf8');
const index = fs.readFileSync('src/index.ts', 'utf8');

assert(routes.includes('/tools/game-design/blueprint'), 'Missing game design blueprint route');
assert(routes.includes('HTTP_METHODS.POST'), 'Game design blueprint route must use POST');
assert(api.includes('static generateBlueprint<T = GameDesignBlueprint>'), 'Missing typed generateBlueprint method');
assert(api.includes('GameDesignBlueprintInput'), 'Missing blueprint input type');
assert(api.includes('GameDesignBlueprint'), 'Missing blueprint response type');
assert(api.includes('genres?: string[]'), 'Game design input must support multiple API genre names');
assert(index.includes('GameDesign: GameDesign'), 'GameDesign API is not registered on Glitch.api');

console.log('Game design SDK route tests passed.');
