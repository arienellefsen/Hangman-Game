//Creating my game object
var game = {
    score: "",
    words: ["Blue", "arienellefsen", "Red", "Orange", "Pink"],
    isPlaying: true,
    isNewGame: true,

    startGame: function() {
        console.log("Start Game");
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        if (userInput != "Null" || userInput != "undefined") {
            console.log(userInput);
            game.generateWords(userInput);
        };
    },

    // create methods
    init: function() {
        // listen to keyup
        document.onkeyup = function(event) {
            game.startGame();

        };
    },


    generateWords: function(userInput) {

        console.log("generate Words HangMan");
        var i = 2;
        var obj = game.words[i].length;
        //get the numberof charater for each value inside array
        console.log("Words: " + game.words[i] + " - Number of characters:" + obj);

        console.log("Word to be guessed:" + game.words[i]);

        var userLetter = '';

        userLetter += userInput;

        document.getElementById("user-words").innerHTML += userInput;

        console.log("User Input: " + userLetter);

        var guessWord = game.words[i];


        for (i = 0; i < guessWord.length; i++) {


            // generate underline string based on the number of characters in the array

            var wordList = ' __ '.repeat(obj);

            document.getElementById("guess-words").innerHTML = wordList;

            //Need to work on validation

            if (userLetter[i] == guessWord[i]) {
                console.log("Found: " + guessWord[i]);
                document.getElementById("guess-words").innerHTML = guessWord[i];
                //If found show the character in the DOM
            } else {
                console.log("Not Found");
            }

            //console.log("Guess this letters:" + guessWord[i]);
            // guess word has all the character of the word
            //Compare guessWord with user input


        }




    }
}


console.log(game.init());