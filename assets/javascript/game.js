//Creating my game object
var game = {
    score: "",
    words: ["Blue", "arienellefsen", "Red", "Orange", "Pink"],
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
        console.log("generate Words HangMan");
        var i = 2;
        var obj = game.words[i].length;
        //get the numberof charater for each value inside array
        console.log("Words: " + game.words[i] + " - Number of characters:" + obj);

    }
}


console.log(game.startGame());
console.log(game.generateWords());