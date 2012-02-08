// Sit around and wait for people to press F5, so we can tell the background script.

console.log('Staring and Slurping: Launcher loading');

var last_played_track;

var F5 = 116;
$("body").bind("keydown",function(event){
    if ( event.keyCode === F5) {
		console.log('F5 pressed');
		chrome.extension.sendRequest({'action':'playtoggle'}, function(response) {
			console.log('Background script has responded.');
		});
	}	
})
