// Get destination urls including redirects

function getRedirects(url) {
  var params = {
    'followRedirects': false,
    'muteHttpExceptions': true
  };
  var followedUrls = [url];

  while (true) {
    var res = UrlFetchApp.fetch(url, params);
    if (res.getResponseCode() < 300 || res.getResponseCode() > 399) {
      return followedUrls;
    }
    var url = res.getHeaders()['Location'];
    followedUrls.push(url);
  }
}

function getDestination(url) {
  return getRedirects(url).pop();
}
