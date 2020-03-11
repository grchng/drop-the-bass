"use strict";
// Play Audio
"use strict";
// Play Audio
window.addEventListener('click', clickSound);
window.addEventListener('keydown', tapSound);

const playSound = function (audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.volume = 0.4;
    audio.play();
}

const addLightEffects = function (key) {
    key.classList.add('playing'); // add class="playing" to key element
    // audio.classList.add('playing');
    console.log("addlighteffects", key);
}

function tapSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    playSound(audio);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    addLightEffects(key);
}

function clickSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
    playSound(audio);
    const key = document.querySelector(`.key[data-key="${e.target.id}"]`);
    addLightEffects(key);
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    console.log(e);
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



