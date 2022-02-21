// Get http server response status code
function getStatusCode(url){
  var options = {
     'muteHttpExceptions': true,
     'followRedirects': false
   };
  var statusCode ;
  try {
  statusCode = UrlFetchApp .fetch(url) .getResponseCode() .toString() ;
  }
  
  catch( error ) {
  statusCode = error .toString() .match( / returned code (\d\d\d)\./ )[1] ;
  }

  finally {
  return statusCode ;
  }
}

// Exceed importxml limit
function importRegex(url, regexInput) { 
  var output = ''; 
  var fetchedUrl = UrlFetchApp.fetch(url, {muteHttpExceptions: true}); 
  if (fetchedUrl) { 
    var html = fetchedUrl.getContentText(); 
    if (html.length && regexInput.length) { 
      output = html.match(new RegExp(regexInput, 'i'))[1]; 
    } 
  } 
  Utilities.sleep(1000); 
  return unescapeHTML(output); 
} 
