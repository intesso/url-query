var assert = require('assert');

var query = require('./index'), param;

var equals = require('object-equal');

assert(equals(query('?a=b'), {a:'b'}));
assert(equals(query('?suuper=star&caret=rocks'), {caret:'rocks', suuper:'star'}));

