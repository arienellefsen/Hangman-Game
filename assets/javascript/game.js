//Creating my game object
var game = {
    score: "",
    words: {
        w1: ["Blue"],
        w2: ["Orange"],
        w3: ["Black"],
    },
    isPlaying: true,
    // create methods
    startGame: function() {
        // listen to on keyup
        document.onkeyup = function(event) {
            var userInput = String.fromCharCode(event.keyCode).toLowerCase();
            if (userInput != "Null" || userInput != "undefined") {
                console.log(userInput);
            };
        };
    },
    generateWords: function() {
        console.log("generateWords HangMan");
        var countWords = 'only words!!';
        console.log("Words:" + countWords);
    }
}

console.log(game.startGame());
console.log(game.generateWords());