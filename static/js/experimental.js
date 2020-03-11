

function removeTransition(e) {
        // var x = document.getElementById("myAudio").ended; -- audio object
        // if x = true 
        // then go to that div and remove the playing class
        // if (e.srcElement.paused == "true") {
    
    if(e.propertyName !== 'transform') return;

}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));



// code for muting audio
// const rees = document.getElementById('audio-col0').querySelectorAll(".col0");
// rees.forEach(ree => ree.muted="true");
// console.log(rees);

const muteAudio = function (col) {
    console.log(col);
    const rees = document.getElementById(`audio-${col}`).querySelectorAll(`.${col}`);
}
// muteAudio("col0");