"use strict";
// 1 --- GET USER INPUT TO PLAY AUDIO ---
window.addEventListener('click', playSound);
window.addEventListener('dbleclick', stopSound);
function playSound(e) {
    console.log(e); // 
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
    console.log("audio",audio);
    if (!audio) return;
    audio.currentTime = 0; // set current time to 0sec
    audio.volume= 0.3; // volume level
    audio.loop = false;
    audio.play(); 

    // 2 --- KEY ANIMATION  ---
    const key = document.querySelector(`.key[data-key="${e.target.id}"]`); 
    console.log(key);
    // add class="playing" to key element
    key.classList.add('playing');
}

const stopSound = function(e) {
    const audio = document.querySelector(`audio[data-key="${e.target.id}"]`);
    console.log("audio",audio);
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    console.log("audio pause");
}

//     // 4
//     // FUNCTION that will remove transitionend listener
//     function removeTransition(e) {
//         console.log(e);
//         if(e.propertyName !== 'transform') return; // skip it if its not transform
//         console.log("e.propertyName: ", e.propertyName);
//         // to understand what 'this' is
//         console.log("this: ",this);
//         // remove className 'playing' to fade key out
//         this.classList.remove('playing');
//     }

//     // 3 -- Transition event -- border colors/box shadow/transform
//     // pic transform property name that is the longest.
//     const keys = document.querySelectorAll('.key'); // returns Node List
//     //event listeners can only have one element, must loop thru all items in node list first before you can addEventListener.
//     // listener --> transitionend, when that ends run function removeTransition
//     keys.forEach(key => key.addEventListener('transitionend', removeTransition));


