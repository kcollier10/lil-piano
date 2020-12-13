const keys = document.querySelectorAll(".key");
const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ','];
const blackKeys = ['s', 'd', 'g', 'h', 'j'];

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


// keypress events
const whiteKeysSelector = document.querySelectorAll('.key.white');
const blackKeysSelector = document.querySelectorAll('.key.black');



document.addEventListener('keydown', e => {
    const key = e.key;
    const whiteKeyArr = whiteKeys.indexOf(key);
    const blackKeyArr = blackKeys.indexOf(key);

    if (whiteKeyArr > -1) play(whiteKeysSelector[whiteKeyArr]);
    // get all of our white keys and get it for the index of that white key arr
    // finding index of key we pressed and then corresponding to index of array
    if (blackKeyArr > -1) play(blackKeysSelector[blackKeyArr]);
})
