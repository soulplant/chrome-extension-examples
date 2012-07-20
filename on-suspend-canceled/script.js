var port = chrome.extension.connect();
port.postMessage({message: "hi there!"});
