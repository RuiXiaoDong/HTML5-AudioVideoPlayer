# Brief

This is a simple demo of HTML5 audio element. There is nothing magical about it.

**Please make sure that you read the source code and change paths
appropriately.** This demo was written on a specific setup. But I didn't
hardcode anything specific to my machine other than paths.

Every audio clip is rendered as a box that acts as a play/pause button. The clip
is assumed to have one segment. A segment is defined as `{ start: <time in
seconds>, end: <time in seconds> }` to specify what portion of an audio clip
should be played when a user clicks on the play button.  `audioplayer.js`
implements a simple `AudioPlayer` object for convenience. It renders the audio
clip button and handles events.

`timeupdate` is a HTML5 media event. It is well documented
http://www.w3.org/TR/html5/embedded-content-0.html#htmlmediaelement
