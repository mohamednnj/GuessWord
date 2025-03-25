
function makeBoxes() {
    for (let i = 1; i <= numberOfTry; i++) {

        const inputContainer = document.createElement("div");
        inputContainer.classList.add(`try-${i}`);

        const mySpan = document.createElement("span");
        mySpan.innerText = `try ${i}`;

        for (let j = 1; j <= lengthOfWord; j++) {
            const myInput = document.createElement("input");
            myInput.disabled = true;
            myInput.classList.add(`box-${i}-${j}`);
            myInput.classList.add(`try-input-${i}`);

            myInput.type = "text";
            myInput.setAttribute("maxlength", '1');

            if (j === 1) inputContainer.appendChild(mySpan);
            inputContainer.appendChild(myInput);
        }

        inputContainer.classList.add(`disable`);
        tryContainer.appendChild(inputContainer);
    }
}