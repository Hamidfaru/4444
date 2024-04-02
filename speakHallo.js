(function(window) {
    var helloSpeaker = {}; // STEP 3

    var speakWord = "Hello"; // DO NOT attach the speakWord variable to the 'helloSpeaker' object.

    helloSpeaker.speak = function(name) { // STEP 4
        console.log(speakWord + " " + name);
    };

    window.helloSpeaker = helloSpeaker; // STEP 5

})(window);
