//Creating my game object
// * 1 - Create a game object to hold variables:
// - word equal array
// - score to keep users score
// * 2 - Create methods
// - startGame: get user's input to initialize game
// - generateSecretWord:  generate __ based on number of character inside of array
// - CheckWords: Search for userInput character inside of guessword variable which contains the secret word
// - RemainChances: Give a chance of times that user can play the game 
//   Everytime the game is initalized the variable is poplutated based on the length of secret word plus 3
//   When we check using the method CheckWords we need to get the variable from RemainChances and subract one game is over until life variable is 0;

var countTime = 0;

var game = {
    score: "",
    words: ["blue", "arienellefsen", "red", "orange", "pink"],
    isPlaying: true,
    isNewGame: true,

    startGame: function() {
        console.log("Start Game");
        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        if (userInput != "Null" || userInput != "undefined") {
            console.log("User Input1: " + userInput);
            game.generateSecretWord(userInput);
        };
    },

    // create method init to listen to key i key is pressed call 
    init: function() {
        // listen to keyup and star game
        // start game will call generateSecretWord method and passed userInput as a parameter
        document.onkeyup = function(event) {
            game.startGame();
        };
    },

    // Create a generateSecretWord Object based on array value
    generateSecretWord: function(userInput, obj) {

        console.log("---Generate Secret string for HangMan---");
        var arr = 0; // Hard coding the array for now
        var obj = game.words[arr].length; // obj get the value of array 
        //get the number of charater for each value inside array

        var guessWord = game.words[arr];
        var wordList = ' __ '.repeat(obj);

        document.getElementById("guess-words").innerHTML = wordList;
        console.log("Words: " + game.words[arr] + " - Number of characters:" + obj);
        game.CheckWords(userInput, guessWord, obj);
    },

    // Create CheckWords method to check if the userInput is equal to word generated by generateSecretWord method

    CheckWords: function(userInput, guessWord, obj) {

        var userLetter = '';
        userLetter += userInput;
        document.getElementById("user-words").innerHTML += userInput;
        var foundWords = document.getElementById("found-words");
        var foundLetterArray = [];

        //Need to find user input inside of the array

        var str = guessWord;
        var n = str.includes(userLetter);

        //get the position of the letter
        var positionGuessWord = guessWord.indexOf(userInput);

        console.log("Position index:" + positionGuessWord);

        debugger;

        if (n === true) {
            console.log("Found a letter: " + userLetter);
            foundLetterArray.push(userLetter);

            var initialArr = [];

            initialArr.splice(positionGuessWord, 0, userLetter);
            console.log("New Array " + initialArr)

            if (initialArr === userLetter) {

                cosnole.log("Already exist")
            }


            foundWords.innerHTML += initialArr;
            console.log("Array letter" + foundLetterArray.length);

        } else {
            console.log("Not Found letters: " + userLetter);
        }
        console.log("User's letter:" + userLetter);
        //Validate end of the game
    },
}

console.log(game.init());