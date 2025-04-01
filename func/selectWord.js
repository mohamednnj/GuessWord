let words = JSON.parse(localStorage.getItem('words')) || ["word"];
let des = JSON.parse (localStorage.getItem('des')) || ["default word"];

function selectWord() {

    let index = Math.floor(Math.random() * words.length)
    myWord = words[index];
    let myDes = des[index];
    lengthOfWord = myWord.length;
    numberOfTry = (lengthOfWord >= 3) ? lengthOfWord : 3;
    numberOfTry = (lengthOfWord >5) ? 5 : lengthOfWord;
    msg.innerHTML = `<p>${myDes}</p>`;
    makeBoxes(numberOfTry, lengthOfWord)
}