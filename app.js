let tryContainer = document.getElementById('trys');
console.log(tryContainer);
// Game sitting
let numberOfTry;
let lengthOfWord;
const gameName = "Guess Word";
let myWord = "Guess"
let indexOfCurrentTry = 1;
let numHints = 2;
document.title = gameName;
document.querySelector("#play-name").innerHTML = gameName;
let msg = document.querySelector("#msg");
let hints = document.querySelector("#hints");
let numHintSpan = document.querySelector("#hints-number");
numHintSpan.textContent = `${numHints}`;
selectWord();
let currentWork = nextTry(indexOfCurrentTry);
nextInput(currentWork);
arrowFunc(indexOfCurrentTry);

function cheek() {
    indexOfCurrentTry++;
    if (indexOfCurrentTry <= numberOfTry) {
        currentWork = nextTry(indexOfCurrentTry);
        arrowFunc(indexOfCurrentTry);
        nextInput(currentWork);
    } else {
        currentWork.forEach(el => {
            el.disabled = true;
        })
    }
}

let myBtn = document.getElementById("cheek-word");
myBtn.addEventListener("click", () => {
    guess(currentWork, myWord);
    cheek();
    if (indexOfCurrentTry === numberOfTry) {

        document.querySelector(`.try-${indexOfCurrentTry}`).style.opacity = '.8';
    }
})

