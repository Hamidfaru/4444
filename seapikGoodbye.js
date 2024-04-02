(function(window) {
    var byeSpeaker = {}; // STEP 7

    var speakWord = "Good Bye"; // DO NOT attach the speakWord variable to the 'byeSpeaker' object.

    byeSpeaker.speak = function(name) { // STEP 8
        console.log(speakWord + " " + name);
    };

    window.byeSpeaker = byeSpeaker; // STEP 9

})(window);
