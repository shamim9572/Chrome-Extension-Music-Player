var buttonPlay = document.querySelector('button#play');


buttonPlay.addEventListener('click', function(){

    var selectedTrack = document.querySelector('select').value; //calm
    chrome.runtime.sendMessage({name: "playTrack", track: selectedTrack});

});

var buttonPause = document.querySelector('button#pause');

buttonPause.addEventListener('click', function(){
    chrome.runtime.sendMessage({name: "pauseTrack"});
});