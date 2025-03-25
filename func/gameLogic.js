function guess(currentWork, word) {
    let WordArray = word.split("");
    let state = Boolean(true);
    for (let i = 0; i < lengthOfWord; i++) {

        let indexOfChar = WordArray.indexOf(currentWork[i].value);

        if (currentWork[i].value === WordArray[i]) {
            currentWork[i].classList.add("circle-InPlaceCorrect", "cheeked");

        } else if (indexOfChar !== -1 && currentWork[i].value !== "") {
            currentWork[i].classList.add("circle-notInPlaceNotCorrect", "cheeked");
            state = false;
        } else if (currentWork[i].value !== "") {
            currentWork[i].classList.add("circle-notCorrect", "cheeked");
            state = false;
        }
    }
    if(state) {
        console.log("user is wins");
        indexOfCurrentTry = numberOfTry+1;
    }
}