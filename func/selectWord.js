function selectWord() {

    let words = ['for', 'break', 'a', 'z'];
    let des = ['describe for for loop', "using to stop loop", 'first liter in english loop ', 'last liter in english loop'];

    let index = Math.floor(Math.random() * words.length)
    myWord = words[index];
    let myDes = des[index];
    lengthOfWord = myWord.length;
    numberOfTry = (lengthOfWord >= 3) ? lengthOfWord : 3;
    msg.innerHTML = `<p>${myDes}</p>`;
    makeBoxes(numberOfTry, lengthOfWord)
}