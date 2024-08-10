const video = document.getElementById("myVideo");
const playButton = document.getElementById("playBtn");

function playVideo() {
    video.play();
    video.controls = false;
    playButton.style.display = 'none';
    video.controls = true;
}

playButton.addEventListener('click', playVideo);

function videoPlay() {
    document.querySelector(".playBtn_2").style.display = "none";
    document.querySelector(".overlayImage").style.display = "none";
    document.querySelector(".videoIframe").src += "&autoplay=1";
}

document.querySelector(".playBtn_2").addEventListener("click", videoPlay);
