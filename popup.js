chrome.runtime.onMessage.addListener(function(request, sender) {
  if (request.action == "consoleLog") {
    console.log("consoleLog", request.source)
  }
  if (request.action == "getSource") {
    // message.innerText = request.source;
    console.log("getSource", request.source)
  }
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
    // console.log(tab.title, document);

    chrome.tabs.executeScript(null, {
      file: "getPagesSource.js"
    }, function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (chrome.runtime.lastError) {
        // message.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
        console.log('There was an error injecting script : \n' + chrome.runtime.lastError.message)
      }
    });
  }
})