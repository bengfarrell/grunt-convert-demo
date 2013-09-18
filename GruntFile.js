module.exports = function(grunt) {

    grunt.initConfig({
        clean: {
            default: ["myfile.mp4", "myfile.mp3"]
        },

        curl: {
            "default": {
                src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
                dest: "myfile.mp4"
            }
        },

        "sa": {
            transcode: {
                infile: "myfile.mp4",
                outfile: "myfile.mp3"
            },
            "metadata-inject": {
                infile: "myfile.mp3",
                outfile: "myfile.mp3",
                title: "Grunt Made This!"
            }
        }
    });

    grunt.loadNpmTasks("grunt-curl");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadTasks('convert');

    grunt.registerTask('default', ["clean", "curl", "sa:transcode", "sa:metadata-inject"]);
};