var test = require('tape');
var query = require('./index'), param;

test('should parse single query', t => {
  t.deepEqual(query('?a=b'), { a: 'b' });
  t.deepEqual(query('?suuper=star&caret=rocks'), { caret: 'rocks', suuper: 'star' });
  t.end();
});

test('should parse no query and return empty object', t => {
  t.deepEqual(query(" "), {});
  t.end();
});
