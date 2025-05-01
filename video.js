function playLecture(videoSrc, videoTitle) {
  const videoPlayer = document.getElementById('lecture-video');
  const videoTitleElement = document.getElementById('video-title');

  videoPlayer.src = videoSrc;
  videoPlayer.play();

  videoTitleElement.textContent = `Now Playing: ${videoTitle}`;
}