"use strict";

window.addEventListener('click', playSound);

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
    if (!audio) return;
    audio.currentTime = 0; // set current time to 0sec
    audio.volume= 0.1; // volume level
    // audio.loop = false;
    audio.play(); 
    
    const key = document.querySelector(`.key[data-key="${e.target.id}"]`);
    key.classList.add('playing'); // add class="playing" to key element
    audio.classList.add('playing');
}
    // 4
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


const rees = document.getElementById('audio-col0').querySelectorAll(".col0");
rees.forEach(ree => ree.muted="true");
console.log(rees);





