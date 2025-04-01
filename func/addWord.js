let addWord = document.getElementsByClassName('add-word');
let boxWord = document.getElementsByClassName('box-word')[0];
let state = 0;
boxWord.style.display = 'none';
addWord[0].addEventListener('click', () => {
    // let boxWord = document.querySelector(".box-word");
    if (state === 0) {
        state = 1;
        boxWord.style.display = 'flex';
    }
    document.getElementsByClassName('add-word')[1].addEventListener('click', () => {
        state = 0;
        boxWord.style.display = 'none';
    })
})
function addToLocal(){
    let wordIn = document.getElementById('word-in');
    let desIn = document.getElementById('des-in');
    words = [wordIn.value,...words];
    des = [desIn.value,...des];
    localStorage.setItem('words', JSON.stringify(words));
    localStorage.setItem('des', JSON.stringify(des));
}