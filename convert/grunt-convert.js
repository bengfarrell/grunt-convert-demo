module.exports = function(grunt) {
    var ffmpeg = require('ffmpeg-node');
    grunt.registerMultiTask('sa', 'Convert video and inject metadata', function() {
        var done = this.async();

        switch (this.target) {
            case "transcode":
                grunt.log.write("SA - Transcode Task");
                ffmpeg.exec(["-i", this.data.infile, this.data.outfile], function() {
                    done.apply();
                });
                break;

            case "metadata-inject":
                ffmpeg.exec(["-i", this.data.infile, "-y", "-metadata", "title=" + this.data.title, this.data.outfile],
                    function() {
                        done.apply();
                    });
                break;
        }
    });
}