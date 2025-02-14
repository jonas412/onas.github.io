const yesbtn = document.getElementById('yesbtn');
const nobtn = document.getElementById('nobtn');
const message = document.getElementById('message');
const heartscontainer = document.getElementById('hearts');
const song = document.getElementById('song');

yesbtn.addEventListener('click', () => {
    message.innerHTML = "I love you more than I have ever found a way to say to you. - Ben Folds";
    song.style.display = 'none';
    song.play();
    startHeartRain();
})

nobtn.addEventListener('click', () => {
    if (message.innerHTML = "first, please reconsider...") {
        message.innerHTML = "Sakit Idol...";
        BrokenHeart();
    } else {
        message.innerHTML = "First, please reconsider..."
    }
});

function startHeartRain(){
    for (let i = 0; i < 50; i++){
        createHeart();
    }
}

function createHeart(){
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️'
    heart.style.left = Math.random () * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heartscontainer.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);

}

function BrokenHeart() {
    const BrokenHeart = document.createElement('div');
    BrokenHeart.classList.add('broken-heart');
    BrokenHeart.innerHTML = '💔';
    message.appendChild(BrokenHeart);
}