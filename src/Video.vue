<template>
  <div class="video-wrapper" :style="{'width': width, 'height': height}">
    <video
      ref="video"
      :src="src"
      :autoplay="autoplay"
      :loop="loop"
      :preload="preload"
      @ended="resetVideo"
      @click="touch"
      @loadedmetadata.once="preparePlay"
      @error="errorHandler"
      @timeupdate="progressHandler"
    >
      <source v-for="(item, index) in sources" :key="index" :src="item">
    </video>

    <div
      class="poster"
      :class="{'loading': isLoading}"
      v-if="!start && !autoplay"
      :style="{background: 'url(' + poster + ')'}"
    ></div>

    <div class="topbar">
      <div>
        <img
          v-if="hasWatermark"
          :src="watermark"
          :style="{'width': watermarkWidth, 'min-width': '80px', 'max-width': '180px'}"
          alt="watermark"
          class="watermark"
        >
      </div>

      <span class="title" v-show="isControl">{{title}}</span>

      <!-- <p class="title" v-show="isControl" :style="{'width': titleWidth}">{{title}}</p> -->
    </div>

    <div class="error" v-if="isError">{{errMsg}}</div>

    <div class="control" v-show="isControl">
      <img
        v-show="isPause && !isLoading"
        @click="play"
        :src="playIcon"
        :style="{'width': iconWidth, 'min-width': '40px'}"
        alt="play button"
        class="play-icon"
      >
      <img
        v-show="!isPause"
        @click="pause"
        :src="pauseIcon"
        :style="{'width': iconWidth, 'min-width': '40px'}"
        alt="pause button"
        class="pause-icon"
      >
      <div class="progress" v-show="showControlBar && !isLoading">
        <div class="icon">
          <button class="play-icon" v-show="isPause" @click="play"></button>
          <button class="pause-icon" v-show="!isPause" @click="pause"></button>
        </div>
        <div
          class="progress-bar"
          @touchstart="moveStart"
          @touchmove="moveVideo"
          @touchend="moveEnd"
          @mousedown="moveStart"
          @mousemove="moveVideo"
          @mouseup="moveEnd"
        >
          <div class="has-play" ref="hasPlay"></div>
        </div>

        <div class="time">{{current}} / {{duration}}</div>

        <div class="screen-btn" @click="fullScreen">
          <button class="full-screen"></button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "h5-video",
  props: {
    src: String,
    poster: String,
    watermark: String,
    title: {
      type: String,
      default: () => {
        return "";
      }
    },
    titleWidth: {
      type: String,
      default: () => {
        return "calc(100% - 105px)";
      }
    },
    showControlBar: {
      type: Boolean,
      default: () => {
        return true;
      }
    },
    sources: {
      type: Array,
      default: () => {
        return [];
      }
    },
    autoplay: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    loop: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
    preload: {
      type: String,
      default: () => {
        return "auto";
      },
      validator: function(val) {
        return val === "auto" || val === "mete" || val === "none";
      }
    },
    initWidth: {
      type: String,
      default: () => {
        return "100%";
      }
    },

    initHeight: {
      type: String,
      default: () => {
        return "auto";
      }
    },

    iconWidth: {
      type: String,
      default: () => {
        return "4%";
      }
    },

    watermarkWidth: {
      type: String,
      default: () => {
        return "60px";
      }
    },

    hasWatermark: {
      type: Boolean,
      default: () => {
        return false;
      }
    },

    playIcon: {
      type: String,
      default: () => {
        return require("./img/play.png");
      }
    },

    pauseIcon: {
      type: String,
      default: () => {
        return require("./img/pause.png");
      }
    },
    errMsg: {
      type: String,
      default: () => {
        return "加载失败，请检查网络！";
      }
    }
  },
  data() {
    return {
      isPause: true,
      isTouch: false,
      isControl: false,
      start: false,
      video: null,
      hasPlay: null,
      timer: null,
      isLoading: true,
      isError: false,
      moveStarted: true,
      duration: "00:00:00",
      current: "00:00:00"
    };
  },
  computed: {
    height: function() {
      return this.initHeight;
    },
    width: function() {
      return this.initWidth;
    }
  },
  mounted() {
    this.$nextTick(function() {
      this.video = this.$refs.video;
      this.hasPlay = this.$refs.hasPlay;
      if (this.autoplay) {
        this.play();
      }
    });
  },
  methods: {
    resetVideo() {
      this.isControl = true;
      this.isPause = true;
      this.start = false;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.$emit("ended");
    },
    touch() {
      if (!this.isControl) {
        this.isControl = true;
        if (!this.isPause) {
          this.timer = setTimeout(() => {
            this.isControl = false;
          }, 3000);
        }
      }
    },
    play() {
      if (this.isPause) {
        (this.start = true), this.video.play();
        this.isPause = false;
        this.isControl = false;
        let realVideo = this.video;
        realVideo.parentNode.style.height =
          (realVideo.videoHeight * realVideo.parentNode.clientWidth) /
            realVideo.videoWidth +
          "px";
        this.$emit("play");
      }
    },
    pause() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.isPause) {
        this.video.pause();
        this.isPause = true;
        this.isControl = true;
        this.$emit("pause");
      }
    },
    progressHandler() {
      this.current = this.timeFormatter(this.video.currentTime);
      this.hasPlay.style.width =
        (100 * this.video.currentTime) / this.video.duration + "%";
      this.$emit("timeupdate");
    },
    preparePlay() {
      this.duration = this.timeFormatter(this.video.duration);
      setTimeout(() => {
        this.isLoading = false;
      }, 400);
      if (!this.autoplay) {
        this.isControl = true;
      }
      this.$emit("canplay", this.video);
    },
    timeFormatter(input) {
      let time = Math.floor(input),
        h = parseInt(time / 3600),
        m = parseInt((time % 3600) / 60),
        s = parseInt(time % 60);
      h = h < 10 ? "0" + h : h;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      return h + ":" + m + ":" + s;
    },
    fullScreen() {
      this.video.webkitRequestFullScreen();
    },
    moveVideo(e) {
      if (this.moveStarted) {
        return;
      }
      let w = e.currentTarget.offsetWidth,
        cur =
          (e.clientX || e.targetTouches[0].clientX) -
          e.currentTarget.offsetLeft;
      this.video.currentTime = (this.video.duration * cur) / w;
      this.$forceUpdate();
    },
    moveStart() {
      this.moveStarted = false;
      if (this.timer) {
        clearTimeout(this.timer);
      }
    },
    moveEnd() {
      this.moveStarted = true;
      this.timer = setTimeout(() => {
        this.isControl = false;
      }, 3000);
    },
    errorHandler() {
      setTimeout(() => {
        this.$emit("error");
        this.isLoading = false;
        this.isError = true;
      }, 400);
    }
  }
};
</script>
<style scoped src="./css/index.css"></style>
