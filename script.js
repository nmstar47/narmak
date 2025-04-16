function playSound(soundFile) {
    const audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = soundFile; // فایل صوتی نمونه
    audioPlayer.play();
}