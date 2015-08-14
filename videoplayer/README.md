# Brief

This is a simple demo of HTML5 video element. There is nothing magical about it.

**Please make sure that you read the source code and change paths
appropriately.** This demo was written on a specific setup. But I didn't
hardcode anything specific to my machine other than paths.

Every video clip acts as a play/pause button. Every clip is assumed to have one
segment. A segment is defined as `{ start: <time in seconds>, end: <time in
seconds> }` to specify what portion of an video clip should be played when a
user clicks on the play button.  `videoplayer.js` implements a simple
`VideoPlayer` object for convenience.

`timeupdate` is a HTML5 media event. It is well documented
http://www.w3.org/TR/html5/embedded-content-0.html#htmlmediaelement
