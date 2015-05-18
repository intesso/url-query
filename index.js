module.exports = function queryString(search) {
  var queryString = search || typeof location !== 'undefined' && location.search;
  if (!queryString) throw new TypeError('search argument missing');

  queryString = queryString.trim().replace(/^(\?)/, '');
  queryString = queryString.split('&');

  var param = {};
  var query = queryString.forEach(function(query) {
    var segment = query.split('=');
    param[segment[0]] = segment.length > 1 ? segment[1] : true;
  });

  return param;
};
