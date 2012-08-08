document.getElementById('b1').addEventListener('click', function(e) {
  // var port = chrome.extension.sendMessage("hi");
  console.log("MAKE CHANGE 1");
  chrome.storage.local.set({'x': 1});
});

document.getElementById('b2').addEventListener('click', function(e) {
  console.log("MAKE CHANGE 2");
  chrome.storage.local.set({'x': 2});
});
document.getElementById('b3').addEventListener('click', function(e) {
  console.log("MAKE CHANGE 3");
  chrome.storage.local.set({'x': 3});
});

chrome.webNavigation.onCommitted.addListener(function(e) {
  console.log("POPUP: Got an EVENT for " + e.url);
}, {url: [{hostSuffix: 'google.com'},
          {hostSuffix: 'google.com.au'}]});

console.log("POPUP is listening to storage events");
chrome.storage.onChanged.addListener(
    function(changes, namespace) {
  console.log("POPUP got a change");
});
