function playAudio(audioFile){
    const audio = new Audio(audioFile);
    audio.play();
}

function pauseAudio(audioFile){
    const audio = new Audio(audioFile);
    audio.pause();
}

export  {playAudio, pauseAudio};    
export default playAudio