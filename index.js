module.exports = function queryString(search) {
  var queryString = typeof search === 'string' ? search : typeof location !== 'undefined' ? location.search : null;
  if (!queryString) throw new TypeError('search argument missing');

  queryString = queryString.trim().replace(/^(\?)/, '');
  queryString = queryString.split('&');

  var query = {};
  queryString.forEach(function(q) {
    var segment = q.split('=');
    if (segment[0]) query[segment[0]] = segment.length > 1 ? segment[1] : true;
  });

  return query;
};