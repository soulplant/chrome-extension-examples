chrome.experimental.app.onLaunched.addListener(function() {
  chrome.app.window.create('main.html', {
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight: 600,
    left: 100,
    top: 100,
    type: 'shell'
  });
});
