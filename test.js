var assert = require('assert');

var query = require('./index'), param;

function equals(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;

  return Object.keys(a).every(function(key) {
    return a[key] === b[key];
  });
}

assert(equals(query('?a=b'), {a:'b'}));
assert(equals(query('?suuper=star&caret=rocks'), {caret:'rocks', suuper:'star'}));

