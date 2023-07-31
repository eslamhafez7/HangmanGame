// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    span.classList.add("letter-box")
    let mainLetter = document.createTextNode(letter);
    span.appendChild(mainLetter);
    lettersContainer.appendChild(span);
});

//Words
let data;
fetch("data.json")
  .then((response) => response.json())
  .then((jsonData) => {
    data = jsonData;
    const allKeys = Object.keys(data);
    const randomKeyNumber = Math.floor(Math.random() * allKeys.length);
    const randomPropertyName = allKeys[randomKeyNumber];
    const randomPropertyValue = data[randomPropertyName];
    const randomValueNumber = Math.floor(Math.random() * randomPropertyValue.length);
    const randomValueValue = randomPropertyValue[randomValueNumber];
    
    document.querySelector(".category span").innerHTML = randomPropertyName;
    document.querySelector(".randomValue span").innerHTML = randomValueValue;
  })
  .catch((error) => {
    console.error("Error fetching JSON data:", error);
  });


let lettersGuessContainer = document.querySelector(".letters-guess");

let lettersandSpace = Array.from(randomValueValue);
lettersandSpace.forEach(letter => {
    let emptySpan = document.createElement("span");
    if(letter == ' ') {
        emptySpan.className = "has-space";
    }
    lettersGuessContainer.appendChild(emptySpan);
});

// All Guess Spans 
let allGuessSpans = document.querySelectorAll(".letters-guess span");

// Set Wrong Attempts
let wrongAttemps = 0;
// select the draw
let hangmanDraw = document.querySelector(".hangman-draw");

// Wrong Box 
let wrongBox = document.querySelector(".wrong-box");

function checkIfWordGuessed() {
    const guessedWord = [...allGuessSpans].map(span => span.innerHTML.toLowerCase()).join('');
    const originalWord = randomValueValue.toLowerCase().replace(/\s/g, '');
    return guessedWord === originalWord;
}

// Add a gameStatus variable to track if the game is ongoing
let gameStatus = true;

function checkIfWordGuessed() {
    const guessedWord = Array.from(allGuessSpans).map(span => span.innerHTML.toLowerCase()).join('');
    const originalWord = randomValueValue.toLowerCase().replace(/\s/g, '');
    return guessedWord === originalWord;
}

function handleClick(e) {
    if (!gameStatus) return; // If the game is finished, ignore clicks

    let theStatus = false;
    if (e.target.className === "letter-box") {
        e.target.classList.add("clicked-letter");
        let clickedLetter = e.target.innerHTML.toLowerCase();
        let chosenWord = Array.from(randomValueValue.toLowerCase());

        chosenWord.forEach((wordLetter, wordIndex) => {
            if (clickedLetter == wordLetter) {
                theStatus = true;
                allGuessSpans.forEach((span, spanIndex) => {
                    if (wordIndex == spanIndex) {
                        span.innerHTML = clickedLetter;
                    }
                });
            }
        });
        console.log(chosenWord);
        // Out Of Loop
        if (theStatus !== true) {
            wrongAttemps++;
            wrongBox.innerHTML = wrongAttemps;
            wrongBox.style.backgroundColor = "#ff0000bd";
            hangmanDraw.classList.add(`wrong-${wrongAttemps}`);
            document.getElementById("fail").play();
            if (wrongAttemps === 8) {
                lettersContainer.classList.add("finished");
                endGame();
                gameStatus = false; // Mark the game as finished
            }
        } else {
            document.getElementById("success").play();
            if (checkIfWordGuessed()) {
                winGame();
                gameStatus = false; // Mark the game as finished
            }
        }
    }
}

document.addEventListener("click", handleClick);

// Handle Letters Clicking
function endGame() {
    Swal.fire({
        icon: 'error',
        title: 'Oops..Game Over',
        html: `The Word Is <span class="correct-value"> ${randomValueValue}</span>`,
        showCancelButton: true,
        confirmButtonText: '<i class="fas fa-redo"></i> New Game',
        cancelButtonText: '<i class="fas fa-times"></i> Exit',
        showCloseButton: false,
        showLoaderOnConfirm: true,
        allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            window.history.back();
        }
    });  
    document.getElementById("over").play(); 
};

function winGame() {
    Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'You guessed the correct word!',
        confirmButtonText: 'Keep Going',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
    });
}
