const drumSounds = {
    A: "https://devtlv.github.io/drumset/sounds/boom.wav",
    S: "https://devtlv.github.io/drumset/sounds/clap.wav",
    D: "https://devtlv.github.io/drumset/sounds/hihat.wav",
    F: "https://devtlv.github.io/drumset/sounds/kick.wav",
    G: "https://devtlv.github.io/drumset/sounds/openhat.wav",
    H: "https://devtlv.github.io/drumset/sounds/ride.wav",
    J: "https://devtlv.github.io/drumset/sounds/snare.wav",
    K: "https://devtlv.github.io/drumset/sounds/tink.wav",
    L: "https://devtlv.github.io/drumset/sounds/tom.wav"
};

function playSound(key) {
    key = key.toUpperCase();
    if (drumSounds[key]) {
        const audio = new Audio(drumSounds[key]);
        audio.currentTime = 0;
        audio.play();
        const btn = document.querySelector(`.drum[data-key="${key}"]`);
        if (btn) {
            btn.classList.add('active');
            setTimeout(() => btn.classList.remove('active'), 100);
        }
    }
}

document.querySelectorAll('.drum').forEach(btn => {
    btn.addEventListener('click', function() {
        playSound(btn.getAttribute('data-key'));
    });
});

document.addEventListener('keydown', function(e) {
    playSound(e.key);
});
