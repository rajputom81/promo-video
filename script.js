const videos = [
  "source/video/v1.mp4",
  "source/video/v2.mp4",
  "source/video/v3.mp4",
];

let index = 0;
const videoPlayer = document.getElementById("videoPlayer");

function playNextVideo() {
  videoPlayer.src = videos[index];
  videoPlayer.play();
}

videoPlayer.addEventListener("ended", () => {
  index = (index + 1) % videos.length; // loop playlist
  playNextVideo();
});

// start first video
playNextVideo();
