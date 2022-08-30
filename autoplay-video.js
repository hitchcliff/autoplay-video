class AutoplayVideo {
  // public properties
  srcImg;
  srcMobileMp4;
  srcDesktopMp4;
  videoPlayerId;

  // private properties
  _src;
  _videoEl;
  _imgEl;

  play() {
    // Watch screen on resize
    this._onResize();

    this._videoEl = document.getElementById(this.videoPlayerId);
    this._videoEl.src = this._src;

    this._delectIfPaused(); // Detects the video if paused
    this._styleVideo(); // Styles the Video
  }

  _styleVideo() {
    const style = this._videoEl.style;

    style.height = "100vh";
    style.width = "100%";
    style.objectFit = "cover";
    style.objectPosition = "top";
  }

  _delectIfPaused() {
    // this._videoEl.pause();
    if (this._videoEl.played && window.innerWidth >= 768) return;

    this._img = document.createElement("img");
    this._img.className = "autoplay-bg-video";
    this._img.src = this.srcImg;

    this._videoEl.parentNode.replaceChild(this._img, this._videoEl);
  }

  _onResize() {
    if (window.innerWidth >= 768) {
      this._src = this.srcDesktopMp4;
    } else {
      this._src = this.srcMobileMp4;
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) {
        this._src = this.srcDesktopMp4;
      } else {
        this._src = this.srcMobileMp4;
      }

      // Sets the src on resize
      this._videoEl.src = this._src;
    });
  }
}
