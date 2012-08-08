chrome.runtime.onSuspend.addListener(function() {
  console.log("I'm going to get suspended.");
});

if (chrome.runtime.onSuspendCanceled) {
  console.log("Adding onSuspendCanceled event listener.");
  chrome.runtime.onSuspendCanceled.addListener(function() {
    console.log("Wait, no I'm not.");
  });
}

chrome.browserAction.onClicked.addListener(function(e) {
    console.log("Got an EVENT: the browser action was clicked!")
});

chrome.extension.onMessage.addListener(
    function(request, sender, sendResponse) {
  console.log(sender.tab ?
              "from a content script:" + sender.tab.url :
              "from the extension");
  if (request.greeting == "hello")
    sendResponse({farewell: "goodbye"});
});

chrome.webNavigation.onCommitted.addListener(function(e) {
  console.log("BACKGROUND: Got an EVENT for " + e.url);
}, {url: [{hostSuffix: 'google.com'},
          {hostSuffix: 'google.com.au'}]});

chrome.storage.local.get('x', function(e) {
    console.log("Read x, it's: " + e.x);
    if (!e.x) {
      console.log("There's no x, so I'm not adding a listener.");
      return;
    }
    if (e.x == 1) {
      console.log("BACKGROUND is listening to storage events");
      chrome.storage.onChanged.addListener(
          function(changes, namespace) {
        console.log("BACKGROUND got a change");
      });
    } else {
      console.log("x = " + e.x + ", so I'm not adding a listener.");
    }
});
