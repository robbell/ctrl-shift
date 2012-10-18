chrome.extension.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log("Command received from content script: " + request.command);
});