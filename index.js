var fs = require('fs');
var adjectives = fs.readFileSync(__dirname + '/lib/adjectives.txt', 'utf8').split(' ');
var nouns = fs.readFileSync(__dirname + '/lib/nouns.txt', 'utf8').split(" ");
var adjLen = adjectives.length -1;
var nounLen = nouns.length -1;

module.exports = function() {
  return adjectives[randomInt(adjLen)] + "-" + nouns[randomInt(nounLen)];
};

function randomInt (max) {
  return Math.floor(Math.random() * max);
};