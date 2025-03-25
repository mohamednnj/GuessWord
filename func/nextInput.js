function nextInput(currentWork){
    currentWork.forEach((el)=>{
        el.addEventListener("keydown", (event)=>{
            const currentIndex = Array.from(currentWork).indexOf(event.target);
            if(currentWork[currentIndex].value.length === 1 && event.key !== "Backspace" && currentIndex +1< lengthOfWord){
                currentWork[currentIndex+1].focus();
            }
        })
    })
}