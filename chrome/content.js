chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.text === 'send_dom') {
        sendResponse(document.all[0].outerHTML)
    }
})