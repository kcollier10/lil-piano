const keys = document.querySelectorAll(".key");

function play (key) {
    const sound = document.getElementById(key.dataset.note)
    sound.currentTime = 0;
    sound.play();
    key.classList.add('active');
    // need to remove the color after
}

keys.forEach(key => {
    key.addEventListener('click', () => play(key))
})
