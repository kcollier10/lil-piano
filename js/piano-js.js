const keys = document.querySelectorAll(".key");

function play (key) {
    const sound = document.getElementById(key.dataset.note)
    sound.play();
}

keys.forEach(key => {
    key.addEventListener('click', () => play(key))
})