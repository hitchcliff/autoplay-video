(window.onload = () => {
  const autoplay = new AutoplayVideo();

  autoplay.videoPlayerId = "autoplay-bg-video";
  autoplay.srcImg = "./assets/videos/bg.mobile.gif";
  autoplay.srcMobileMp4 = "./assets/videos/bg.mobile.mp4";
  autoplay.srcDesktopMp4 = "./assets/videos/bg.desktop.mp4";
  autoplay.play();

  console.log(autoplay);
})();
