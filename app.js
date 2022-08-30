(window.onload = () => {
  // Instantiate AutoplayVideo class
  const autoplay = new AutoplayVideo();

  autoplay.videoPlayerId = "autoplay-bg-video";
  autoplay.srcImg = "./assets/mov_bbb.gif";
  autoplay.srcMobileMp4 = "https://www.w3schools.com/html/mov_bbb.mp4"; // Just in case you have mobile version, if not, simply re-add desktop version
  autoplay.srcDesktopMp4 = "https://www.w3schools.com/html/mov_bbb.mp4";
  autoplay.play();

  // Debug
  // console.log(autoplay);
})();
