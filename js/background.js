// Get F5 presses from other tabs, send them to soundcloud tab

console.log('Staring and Slurping: Background app running');

chrome.extension.onRequest.addListener(
	function(request, sender, sendResponse) {
		console.log('Recieved play/pause request');
		// Find Soundcloud
		chrome.tabs.query({'url':'http://soundcloud.com/*'}, function(tabs) {
			if ( tabs.length) {
				console.log('soundcloud is running');
				chrome.tabs.sendRequest(tabs[0].id, 'yo fuckin start the song')
			} else {
				// TODO: Fucking start it
				console.log('No soundcloud tabs are running')
			}
			console.dir(tabs)
		})
	
	} 
);
