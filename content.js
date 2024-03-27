chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.command === "load_more") {
        document.querySelector("button.all4-secondary-button.all4-typography-body.all4-episode-list__button").click();
	    window.scrollTo(0, document.body.scrollHeight);
        sendResponse({result: "success"});
    }
});