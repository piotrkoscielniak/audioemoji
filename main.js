const playButton = document.getElementById('play-button');
const audioEmoji = document.getElementById('audio-emoji');

playButton.addEventListener('click', () => {
    audioEmoji.play();
});