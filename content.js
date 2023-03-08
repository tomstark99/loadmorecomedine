chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === "load_more") {
        document.getElementsByTagName("button")[3].click();
	    window.scrollTo(0, document.body.scrollHeight);
        sendResponse({result: "success"});
    }
});