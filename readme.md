# url-query

parses and returns a `window.location.search` like string as object.
this is a tiny and simple function without fancy stuff like nested objects.


## install

```js
npm install url-query
```

## usage
```js
var query = require('url-query');

query() // -> parses the `window.location.search` string if present
query('?a=b') // -> {a:'b'}
query('?suuper=star&caret=rocks') // -> {caret:'rocks', suuper:'star'}
```


## test

```js
npm test
```

## license

MIT

assert(equals(query('?a=b'), {a:'b'}));
assert(equals(query('?suuper=star&caret=rocks'), {caret:'rocks', suuper:'star'}));