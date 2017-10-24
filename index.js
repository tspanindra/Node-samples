//console.log(module);

require.resolve('find-me');
require("find-here");
require("./lib/find-lib");
const addon = require('addon');

console.log(addon.hello());

