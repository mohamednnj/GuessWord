hints.addEventListener("click", function () {
    let randomIndex = 0;
    let numOfTryForRanHint = lengthOfWord;
    while (numOfTryForRanHint-- && numHints > 0) {
        randomIndex = Math.floor(Math.random() * lengthOfWord);
        if (currentWork[randomIndex].value === "") {
            currentWork[randomIndex].value = myWord[randomIndex];
            numHints--;
            numHintSpan.textContent = `${numHints}`;
            break;
        }
    }
})