var load_more = document.getElementById("load");

load_more.onclick = function(element) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {command: "load_more"}, function(response) {
            // console.log(response.result);
        });
    });
};