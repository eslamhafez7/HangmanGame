// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = Array.from(letters);

let lettersContainer = document.querySelector(".letters");

lettersArray.forEach(letter => {
    let span = document.createElement("span");
    span.classList.add("letter-box")
    let mainLetter = document.createTextNode(letter);
    span.appendChild(mainLetter);
    lettersContainer.appendChild(span);
});

//Words
const words = {
    programming: ["javascript", "python", "java", "csharp", "html", "css", "ruby", "php", "swift", "typescript"],
    movies: ["avatar", "titanic", "inception", "jaws", "starwars", "thegodfather", "jurassicpark", "avengers", "frozen", "harrypotter", "interstellar"],
    people: ["eslam hafez", "picasso", "shakespeare", "mariecurie", "nelsonmandela", "mozart", "cleopatra", "albert einstein", "leonardodavinci", "napoleon", "beethoven"],
    countries: ["egypt", "palestine", "qatar", "australia", "canada", "germany", "japan", "brazil", "france", "india", "mexico", "russia", "sweden"],
    animals: ["elephant", "tiger", "giraffe", "dolphin", "penguin", "koala", "lion", "zebra", "kangaroo", "panda"],
    fruits: ["apple", "banana", "orange", "strawberry", "grape", "watermelon", "mango", "pineapple", "kiwi", "peach"],
    colors: ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"],
    cars: ["toyota", "honda", "ford", "audi", "bmw", "mercedes", "nissan", "chevrolet", "volkswagen", "hyundai", "borchy"],
    superheroes: ["spiderman", "superman", "batman", "wonderwoman", "ironman", "thor", "captainamerica", "blackpanther", "hulk", "flash"],
};
const allKeys = Object.keys(words);

// Random Key Number of Object Keys
const randomKeyNumber = Math.floor(Math.random() * allKeys.length);
// Random Property Name of Object Keys
const randomPropertyName = allKeys[randomKeyNumber];
// Random Value(name) Of Object Values [array]
const randomPropertyValue = words[randomPropertyName];
// Random Value(number) Of Object Values [array] 
const randomValueNumber = Math.floor(Math.random() * randomPropertyValue.length);
// Random Value Of the Object Values [name of the value => string]
const randomValueValue = randomPropertyValue[randomValueNumber];
document.querySelector(".category span").innerHTML = randomPropertyName;


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
let correctAttempts = 0;
let hangmanDraw = document.querySelector(".hangman-draw");

// Wrong Box 
let wrongBox = document.querySelector(".wrong-box");
let correctBox = document.querySelector(".correct-box");

// Add a gameStatus variable to track if the game is ongoing
let gameStatus = true;

function checkIfWordGuessed() {
    const guessedWord = Array.from(allGuessSpans).map(span => span.innerHTML.toLowerCase()).join('');
    const originalWord = randomValueValue.toLowerCase().replace(/\s/g, '');
    return guessedWord === originalWord;
}


// Handle Letters Clicking
function handleClick(e) {
    if(!gameStatus) return;
    let theStatus = false;
    if(e.target.className === "letter-box") {
        e.target.classList.add("clicked-letter")
        let clickedLetter = e.target.innerHTML.toLowerCase();
        let chosenWord = Array.from(randomValueValue.toLowerCase());
    
        chosenWord.forEach((wordLetter, wordIndex) => {
            if(clickedLetter == wordLetter) {
                theStatus = true;
                allGuessSpans.forEach((span, spanIndex) => {
                    if(wordIndex == spanIndex) {
                        span.innerHTML = clickedLetter;
                    }
                })
            }
        });
        console.log(chosenWord);
        // Out Of Loop
        if(theStatus !== true) {
            wrongAttemps++;
            wrongBox.innerHTML = wrongAttemps;
            wrongBox.style.backgroundColor = "#ff0000bd";
            hangmanDraw.classList.add(`wrong-${wrongAttemps}`);
            document.getElementById("fail").play();
                
            if(wrongAttemps === 8) {
                lettersContainer.classList.add("finished");
                endGame();
            }
        }else {
            correctAttempts++;
            correctBox.innerHTML = correctAttempts;
            correctBox.style.backgroundColor = "#7cd1ae";
            window.localStorage.setItem("correctValue", correctAttempts);
            document.getElementById("success").play();
            if(checkIfWordGuessed()) {
                winGame();
                gameStatus = false;
            }
        }
    }
}
document.addEventListener("click", handleClick);

// On The Game End (Win | Lose)

function endGame() {
    clearInterval(timerInterval);
    endAnimation();
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
            window.location.reload();
        }
    });  
    document.getElementById("over").play(); 
};

function winGame() {
    document.getElementById("win").play();
    // window.localStorage.getItem("correctValue", correctBox.innerHTML);
    Swal.fire({
        icon: 'success',
        title: 'Congratulations!',
        text: 'You guessed the correct word!',
        confirmButtonText: 'New Game',
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.reload();
        }
    });
};

// Timer
let timeLimit = 100;
let timerInterval;

let timerDiv = document.querySelector("#timer p");

function startTimer() {
    timerInterval = setInterval(() => {
        timeLimit--;
        timerDiv.innerHTML = timeLimit;
        if(timeLimit === 20) {
            timerDiv.style.backgroundColor = "rgba(255, 0, 0, 0.74)";
            startAnimation();
        }
        if (timeLimit <= 0) {
            clearInterval(timerInterval);
            endGame();
        }
    }, 1000);
}
window.onload = function () {
    startTimer();
}
function startAnimation() {
    timerDiv.style.animationPlayState = "running";
}
function endAnimation() {
    timerDiv.style.animationPlayState = "paused";
}
document.querySelector(".restart i").addEventListener("click", () => {
    window.location.reload();
});
document.querySelector(".help").addEventListener("click", (e) => {
    e.preventDefault();
});
const currentYear = new Date().getFullYear();
document.querySelector(".copyright span").textContent = currentYear;