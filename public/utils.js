/**
 * Created by Nektarios on 10/1/2017.
 */
/**
 *
 * @param method
 * @param url
 * @param data
 * @param setupXhrCB
 * @param onSuccessCB
 */
function doXhr(method, url, data, setupXhrCB, onSuccessCB, onErrorCB) {
  var xhr = createCORSRequest(method, url);
  if(setupXhrCB) {
    setupXhrCB(xhr);
  }

  if(onErrorCB) {
    errorHandler = onErrorCB;
  } else {
    errorHandler = function(e) {
      var msg = "Error: request failed.";
      console.log(msg);
      alert(msg);
      xhr = null;
      data = null;
    }.bind(xhr);
  }

  xhr.onload = function() {
    data = null; //remove reference
    if(xhr.status >= 200 && xhr.status < 300) {
      // OK
      if(onSuccessCB) {
        onSuccessCB(xhr);
      }
    }
    else {
      errorHandler(xhr);
    }
  };

  xhr.onerror = errorHandler;
  xhr.ontimeout = errorHandler;
  xhr.onabort = errorHandler;

  xhr.send(data);
  return xhr;
}

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();

  if("withCredentials" in xhr) {
    // Check if the XMLHttpRequest object has a "withCredentials" property.
    // "withCredentials" only exists on XMLHTTPRequest2 objects.
    xhr.open(method, url, true);
  }

  else if(typeof XDomainRequest != "undefined") {
    // Otherwise, check if XDomainRequest.
    // XDomainRequest only exists in IE, and is IE's way of making CORS requests.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  }

  else {
    // Otherwise, CORS is not supported by the browser.
    var msg = "CORS is not supported by the browser.";
    console.log(msg);
    xhr = null;
  }
  return xhr;
}

function def(value) {
  return !undef(value);
}

function undef(value) {
  var b = false;
  if(typeof value == "string")
    b = value === "";
  b = b || value == null || value == undefined;
  return b;
}

function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for(var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if(decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log('Query variable %s not found', variable);
}

function getStateVariable(variable, state) {
  var vars = state.split(';');
  for(var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if(decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log('State variable %s not found', variable);
}

function getLocaleDateAsISO(date) {
  if(undef(date)) date = new Date();
  var year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    time = date.toTimeString().split(" GMT")[0] + "." + date.getMilliseconds();

  month = month < 10 ? "0" + month : month + "";
  day = day < 10 ? "0" + day : day + "";


  return year + "-" + month + "-" + day + "T" + time + "Z";
}

function logYellow(s) {
  console.log.call(console, "%c" + s, "background: yellow;");
}
function logGreen(s) {
  console.log.call(console, "%c" + s, "background: lightgreen;");
}
function logRed(s) {
  console.log.call(console, "%c" + s, "background: rgb(255, 210, 210);");
}
