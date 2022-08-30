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
  _screenWidth;

  play() {
    this._screenWidth = document.documentElement.clientWidth;
    this._videoEl = document.getElementById(this.videoPlayerId);

    // Watch screen on resize
    this._showViewport();
    this._onResize();

    this._videoEl.src = this._src;
    this._videoEl.play();

    this._styleVideo(); // Styles the Video
    this._delectIfPaused();
  }

  _styleVideo() {
    const style = this._videoEl.style;

    style.width = "100%";
    style.objectFit = "cover";
    style.objectPosition = "top";
  }

  _delectIfPaused() {
    if (this._videoEl.paused && this._screenWidth <= 980) {
      // console.log(this._videoEl.paused);
      this._img = document.createElement("img");
      this._img.className = "autoplay-bg-video";
      this._img.src = this.srcImg;

      this._videoEl.parentNode.replaceChild(this._img, this._videoEl);
    }
  }

  _onResize() {
    window.addEventListener("resize", () => {
      this._screenWidth = document.documentElement.clientWidth;

      this._showViewport();
    });
  }

  _showViewport() {
    // Assign value to screen width
    if (this._screenWidth >= 980) {
      this._src = this.srcDesktopMp4;
    } else {
      this._src = this.srcMobileMp4;
    }

    // Assign sign
    this._videoEl.src = this._src;
  }
}
