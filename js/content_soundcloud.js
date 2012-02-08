// Get start/stop requests from the background script and play the song

console.log('Staring and Slurping: player loading');

chrome.extension.onRequest.addListener(function(request){
	$current_playbutton = $('a.play.playing');
		
	if ( $current_playbutton.length ) { 
		// Chrome extensions can't access page JS. Except they can, via the location.
		console.log('Playing/stopping currently playing track');
		location = "javascript:$('a.play.playing').click()"	
		last_played_track = $current_playbutton.parents().attr('data-sc-track');
		console.log(last_played_track);
	} else {
		var $last_playbutton = $("div.player[data-sc-track="+last_played_track+"]").find('a.play')
		if ( $last_playbutton.length) {
			console.log('Playing most recently playing track: '+last_played_track);
			location = "javascript:$('div.player[data-sc-track="+last_played_track+"]').find('a.play').click()"	
		} else {
			console.log('Playing first track on page')
			location = "javascript:$('a.play').first().click()"
		}			
	}		
	
})
