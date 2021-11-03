

chrome.runtime.onConnect.addListener(function (port) {
    const extensionListener = function (message, sender, sendResponse) {
        // The original connection event doesn't include the tab ID of the
        // DevTools page, so we need to send it explicitly.

        if(message.type=="execute"){
            chrome.tabs.getSelected(null, function(tab){
                console.log(tab);
                console.log(message.data);
                chrome.tabs.update(tab.id, {
                    'url': message.data,
                    'highlighted': true
                });
            });
        }
        // other message handling
    }
    // Listen to messages sent from the DevTools page
    port.onMessage.addListener(extensionListener);
    port.onDisconnect.addListener(function(port) {
        port.onMessage.removeListener(extensionListener);
    });
});

