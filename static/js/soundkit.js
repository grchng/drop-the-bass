"use strict";

window.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.keyCode);

    // --- GET USER INPUT TO PLAY AUDIO ---
    // document.querySelector --> to select only one thing
    // document.querySelectorAll --> to select many
    // ES6 Template String
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); 
    console.log(audio);
    // if there is no audio
    if(!audio) return; // stop the function from running

    audio.currentTime = 0;  // rewind audio to 0s
    // play audio
    // document.querySelector(audio[data-key="#"]).play()
    audio.play(); // if audio is already playing, it will not play again 


    // --- KEY ANIMATION ---
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); 
    console.log(key);
    // add class="playing" to key element
    // jQuery --> key.addClass('playing')
    key.classList.add('playing');
    key.classList.remove('playing');
    key.classList.toggle('playing');

});