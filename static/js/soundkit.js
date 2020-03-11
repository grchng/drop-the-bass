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
    audio.classList.add('playing');
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
        // var x = document.getElementById("myAudio").ended; -- audio object
        // if x = true 
        // then go to that div and remove the playing class
        // if (e.srcElement.paused == "true") {
        // this.classList.remove('playing');
    console.log('event', e);
    console.log('this:', this);
}


// Ydocument.getElementById("myAudio").onended = function() {myFunction()};
// 3 -- Transition listener -- border colors/box shadow/transform
// const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('ended',removeTransition));

// code for muting audio
// const rees = document.getElementById('audio-col0').querySelectorAll(".col0");
// rees.forEach(ree => ree.muted="true");
// console.log(rees);





