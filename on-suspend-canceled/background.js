chrome.runtime.onSuspend.addListener(function() {
  console.log("I'm going to get suspended.");
});

if (chrome.runtime.onSuspendCanceled) {
  console.log("Adding onSuspendCanceled event listener.");
  chrome.runtime.onSuspendCanceled.addListener(function() {
    console.log("Wait, no I'm not.");
  });
}

chrome.webNavigation.onCommitted.addListener(function(e) {
  console.log("Got an EVENT for " + e.url);
}, {url: [{hostSuffix: 'google.com'},
          {hostSuffix: 'google.com.au'}]});
