function nextTry(i){
    let current1 = [...document.getElementsByClassName(`try-input-${i}`)];
    document.querySelector(`.try-${i}`).style.opacity = '1';

    if (i  > 1) {
        document.querySelector(`.try-${i - 1}`).style.opacity = '1';
        let current2 = [...document.getElementsByClassName(`try-input-${i - 1}`)];

        current2.forEach((el) => {
            el.disabled = true;
        })
    }

    current1.forEach((el) => {
        el.disabled = false;
    })
    document.querySelector(`.box-${i}-1`).focus();
    return current1;
}