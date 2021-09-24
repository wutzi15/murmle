function doStuffWithDom(domContent) {
  let data = { body: domContent }
  // console.log(`I received the follwing DOM content:\n ${JSON.stringify(data)}`)
      fetch("http://localhost:47111", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
          body: JSON.stringify(data)
      }).then(res => {
          console.log("Request complete! response: ", res);
      })
}

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {
      // console.log(`Reload ${JSON.stringify(tab)}`)
      chrome.tabs.sendMessage(tab.id, {text: 'send_dom'},doStuffWithDom)

  }
})