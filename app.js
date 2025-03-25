let tryContainer = document.getElementById('trys');
console.log(tryContainer);
// Game sitting
const numberOfTry = 5;
const lengthOfWord = 5;
const gameName = "Guess Word";
let myWord = "Guess"
let indexOfCurrentTry = 1;
document.title = gameName;
document.querySelector("#play-name").innerHTML = gameName;

makeBoxes();
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
    if (indexOfCurrentTry  === numberOfTry) {

        document.querySelector(`.try-${indexOfCurrentTry}`).style.opacity = '.8';
    }
})

