grunt-convert-demo
==================

a Grunt task demo that converts a video

On my Ubuntu machine, I’ve installed LAME via the “libavcodec” plugin and FFMPEG by using

sudo apt-get install ffmpeg libavcodec-extra-53

There should be similar methods on OSX (brew) and probably an installer on Windows.

Once you've cloned the repository, cd into the folder and run NPM install to grab the dependencies

Then, just run grunt to run the task and download the video, convert it to MP3 and inject a message as it's title
