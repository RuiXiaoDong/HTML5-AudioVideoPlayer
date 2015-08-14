// $container {object} jQuery object for a <div> that will hold <audio> and act as a button.
// audiosrc {string} A URL to the audio file.
var AudioPlayer = function ($container, audiosrc, segment) {
    // Create elements.
    var $playButton = $('<i class="fa fa-play-circle fa-lg" style="color: red;"></i>'); 
    var $pauseButton = $('<i class="fa fa-pause fa-lg" style="color: red;"></i>');
    // Only load the metadata; otherwise, browsers will start preloading the data. We don't want that to save bandwidth.
    var $audioElement = $('<audio preload="metadata" src="' + audiosrc + '"></audio>');

    this.$playButton = $playButton;
    this.$pauseButton = $pauseButton;
    this.$audioElement = $audioElement;
    // Add them to the container to build a play/pause audio button. We hide controls and the progress bar for now.
    $container.append($playButton);
    $container.append($pauseButton);
    $container.append($audioElement);

    // Make sure that the play button is visible.
    $playButton.show();
    $pauseButton.hide();

    // Play/pause.
    $container.on('click', function () {
        if ($audioElement[0].paused) {
            if ($audioElement[0].currentTime < segment.start ||
                $audioElement[0].currentTime >= segment.end) {
                // Finished playing segment or something went wrong. Reset the currentTime.
                $audioElement[0].currentTime = segment.start;
            }
            $audioElement[0].play();
            $playButton.hide();
            $pauseButton.show();
        } else {
            $audioElement[0].pause();
            $playButton.show();
            $pauseButton.hide();
        }
    });
	
    //Set the ending time to be the length of the audio file
	$audioElement.on('canplaythrough', function (e) {
	    var seconds = e.currentTarget.duration;
        //console.log(seconds);
        if(segment.end == -1)
        	segment.end = seconds;
    });
	
	$audioElement.on('timeupdate', function () {
        // Turn this on for debugging.
        //console.log($audioElement[0].currentTime);
        if ($audioElement[0].currentTime >= segment.end) {
            // Finished playing the segment.
            $audioElement[0].pause();
            $playButton.show();
            $pauseButton.hide();
        }
    });
};
