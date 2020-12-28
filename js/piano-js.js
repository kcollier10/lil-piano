(function () {

    const whiteKeys = ['z', 'x', 'c', 'v', 'b', 'n', 'm', ','];
    const blackKeys = ['s', 'd', 'g', 'h', 'j'];

    const keys = document.querySelectorAll(".key");
    const whiteKeysSelector = document.querySelectorAll('.key.white');
    const blackKeysSelector = document.querySelectorAll('.key.black');
    const drums = document.querySelectorAll(".drums");
    const drumsCymbals = document.querySelectorAll(".drums.cymbal");
    const drumsDrum = document.querySelectorAll(".drums.drum");

    // piano notes
    // data note and id must be matching for this to work
    function play(key) {
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

    // drum notes
    // data note and id must be matching for this to work
    function playDrums(key) {
        const sound = document.getElementById(key.dataset.sound)
        sound.currentTime = 0;
        sound.play();
        key.classList.add('active');
        sound.addEventListener('ended', () => {
            key.classList.remove('active');
        })
    }

    drums.forEach(key => {
        key.addEventListener('click', () => playDrums(key))
    })

    // keypress events
    document.addEventListener('keydown', e => {
        if (e.repeat) {
            return;
        }
        const key = e.key;
        const whiteKeyArr = whiteKeys.indexOf(key);
        const blackKeyArr = blackKeys.indexOf(key);

        if (whiteKeyArr > -1) {
            play(whiteKeysSelector[whiteKeyArr]);
        }
        // get all of our white keys and get it for the index of that white key arr
        // finding index of key we pressed and then matching to index of array
        if (blackKeyArr > -1) {
            play(blackKeysSelector[blackKeyArr]);
        }
    })

    $(".tabs-list .tab-links").click(function() {
        let tabChoice = $(this).find("a").attr("href");
        $(".tabs-list .tab-links, .tabs div.tab-content").removeClass("active");

        $(".tab-content").hide();
        $(tabChoice).show();
        $(this).addClass("active");

    });




    //to-do:

    // timing on the color indicator
    // refactor to dynamic JS to practice

})();