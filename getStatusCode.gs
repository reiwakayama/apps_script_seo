// Get https server response status code

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
