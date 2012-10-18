document.onkeydown = function keydown(evt) {
	if (evt.ctrlKey && evt.keyCode == 77) {
		chrome.extension.sendMessage({command: "show-search"});
	}
}