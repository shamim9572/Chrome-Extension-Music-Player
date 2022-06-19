

chrome.runtime.onMessage.addListener((msg, sender, response) =>{

    if(msg.name == 'playTrack'){
        var trackname = msg.track;
        var audioElement = document.querySelector('.audio-element');
        audioElement.src = `${trackname}.mp3`;
        audioElement.play();
    }
    if(msg.name == 'pauseTrack'){
        var audioElement = document.querySelector('.audio-element');
        audioElement.pause();
    }

});

