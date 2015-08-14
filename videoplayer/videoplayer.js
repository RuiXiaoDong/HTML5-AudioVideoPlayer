// $container {object} jQuery object for a <div> that will hold the video element.
// videosrc {string} A URL to the video file. Only supports video formats and containers supported by HTML5.
var VideoPlayer = function ($container, videosrc, segment) {
    // Create elements.
    // Only load the metadata; otherwise, browsers will start preloading the
    // data. We don't want that to save bandwidth.
    var $videoElement = $('<video preload="metadata" class="video" src="' + videosrc + '"></video>');
    this.$videoElement = $videoElement;

    // Add them to the container to build a play/pause video button.
    // We hide controls and the progress bar for now.
    $container.append($videoElement);

    // Play/pause.
    $container.on('click', function () {
        if ($videoElement[0].paused) {
            if ($videoElement[0].currentTime < segment.start ||
                $videoElement[0].currentTime >= segment.end) {
                // Finished playing segment or something went wrong. Reset
                // the currentTime.
                $videoElement[0].currentTime = segment.start;
            }
            $videoElement[0].play();
        } else {
            $videoElement[0].pause();
        }
    });

    // Listen for timeupdate event from the video element, and stop the playback
    // once we've played everything in the segment.
    $videoElement.on('timeupdate', function() {
        // Turn this on for debugging.
        //console.log($videoElement[0].currentTime);
        if ($videoElement[0].currentTime >= segment.end) {
            // Finished playing the segment.
            $videoElement[0].pause();
        }
    });
};
