function arrowFunc(i) {
    let inputs = [...document.getElementsByClassName(`try-input-${i}`)];

    for (let i = 0; i < inputs.length; i++) {
        let input = inputs[i];
        input.addEventListener("keydown", function (event) {
            const currentIndex = Array.from(inputs).indexOf(event.target);
            if (event.key === "ArrowRight") {
                const nextInput = currentIndex + 1;
                if (nextInput < inputs.length) inputs[nextInput].focus();
            }
            if (event.key === "ArrowLeft") {
                const prevInput = currentIndex - 1;
                if (prevInput >= 0) inputs[prevInput].focus();
            }
            if (event.key === "Backspace") {
                const prevInput = currentIndex;
                if (prevInput > 0) {
                    event.preventDefault();
                    inputs[prevInput].value = "";
                    inputs[prevInput - 1].focus();
                } else {
                    inputs[0].value = "";
                    inputs[0].focus();
                }
            }
            if (event.key === "Enter") {
                guess(currentWork, myWord);
                cheek();
                if (indexOfCurrentTry === numberOfTry) {

                    document.querySelector(`.try-${indexOfCurrentTry}`).style.opacity = '.8';
                }
            }
        });
    }
}

