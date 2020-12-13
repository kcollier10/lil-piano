const keys = document.querySelectorAll(".key");

// data note and id must be matching for this to work
// check your typos before going down a rabbit hole *upside-down face*
function play (key) {
    const sound = document.getElementById(key.dataset.note)
    sound.currentTime = 0;
    sound.play();
    key.classList.add('active');
    sound.addEventListener('ended', () => {
        key.classList.remove('active');
        })
}

keys.forEach(key => {
    key.addEventListener('click', () => play(key))
})
