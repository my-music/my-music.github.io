// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const title = $("title");
const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const listBtn = $(".btn-list");
const progress = $("#progress");
const time = $("#time");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");
const dashboard =$(".dashboard")

const app = {
  currentIndex: 0,
  isPlaying: false,
  isShow: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "Nhất Trên Đời",
      singer: "VAnh, BMZ",
      path: "https://vnno-pt-3-tf-mp3-s1-zmp3.zmdcdn.me/db7199e7d7a73ef967b6/6386880963820898839?authen=exp=1685726016~acl=/db7199e7d7a73ef967b6/*~hmac=e88e9a49164327af6b6635978910d1aa&fs=MTY4NTU1MzIxNjE3NXx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "album/cover/nhat-tren-doi.jpg"
    },
    {
      name: "Bật Tình Yêu Lên",
      singer: "Tăng Duy Tân, Hòa Minzy",
      path: "album/music/bat-tinh-yeu-len.mp3",
      image: "album/cover/bat-tinh-yeu-len.jpg"
    },
    {
      name: "Cùng Anh",
      singer: "Ngọc Dolil, Hagi, STee",
      path: "https://mp3-s1-zmp3.zmdcdn.me/03738e675a23b37dea32/2313787426765899173?authen=exp=1685726815~acl=/03738e675a23b37dea32/*~hmac=1baaca5077b56eb0015d4b8c9b17b1b9&fs=MTY4NTU1NDAxNTM1NXx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "https://avatar-ex-swe.nixcdn.com/song/2017/12/21/d/c/5/f/1513874388548.jpg"
    },
    {
      name: "Những Điều Nhỏ Nhoi",
      singer: "Vy Oanh",
      path: "https://mp3-s1-zmp3.zmdcdn.me/cb1357b65ef2b7aceee3/3928769953435167598?authen=exp=1685727190~acl=/cb1357b65ef2b7aceee3/*~hmac=98be227bf515519bb454777d5551e4e6&fs=MTY4NTU1NDM5MDmUsIC3Mnx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/08/13/7/d/5/0/1565690655124_600.jpg"
    },
    {
      name: "Yêu Đời",
      singer: "MTV",
      path: "https://mp3-s1-zmp3.zmdcdn.me/e5daa1883bccd2928bdd/9035392683350050825?authen=exp=1685727305~acl=/e5daa1883bccd2928bdd/*~hmac=d73d4cc195ecedcbad7f86b70c20c5c7&fs=MTY4NTU1NDUwNTQ1Mnx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "https://avatar-ex-swe.nixcdn.com/song/2022/09/17/2/7/7/e/1663379560958.jpg"
    },
    {
      name: "Bài Ca Tuổi Trẻ",
      singer: "JGKiD, KraziNoyze, Emcee L, Da LAB, Vũ Bùi Thu Thủy, Linh Cáo, Mel G",
      path: "https://vnno-vn-5-tf-mp3-s1-zmp3.zmdcdn.me/5208b7cb2d8fc4d19d9e/8605293512770827667?authen=exp=1685727360~acl=/5208b7cb2d8fc4d19d9e/*~hmac=b1e986485e26d5651b8adbc1e5959523&fs=MTY4NTU1NDU2MDE3MHx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "https://avatar-ex-swe.nixcdn.com/song/2018/07/09/d/c/c/0/1531124811438.jpg"
    },
    {
      name: "Sắc Môi Em Hồng",
      singer: "Minh Hằng",
      path: "https://mp3-s1-zmp3.zmdcdn.me/a0c32e142750ce0e9741/7590254962398805053?authen=exp=1685727665~acl=/a0c32e142750ce0e9741/*~hmac=b044801804fcd770110872574f88e2e5&fs=MTY4NTU1NDg2NTMxMnx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/02/08/2/6/c/4/1644289829520_600.jpg"
    },
    {
      name: "Cơn Mưa Ngang Qua",
      singer: "Sơn Tùng M-TP",
      path: "album/music/con-mua-ngang-qua.mp3",
      image: "album/cover/con-mua-ngang-qua.jpg"
    },
    {
      name: "Way Back Home",
      singer: "Huy Vạc, Freak",
      path: "album/music/way-back-home.mp3",
      image: "album/cover/way-back-home.jpg"
    },
    {
      name: "2002",
      singer: "Anne Marie",
      path: "album/music/2002.mp3",
      image: "album/cover/2002.jpg"
    },
    {
      name: "Reality",
      singer: "Lost Frequencies, Janieck Devy",
      path: "album/music/reality.mp3",
      image: "album/cover/reality.jpg"
    },
    {
      name: "That Girl",
      singer: "Olly  Murs",
      path: "album/music/that-girl.mp3",
      image: "album/cover/that-girl.jpg"
    },
    {
      name: "Drive My Car",
      singer: "Deamn",
      path: "album/music/drive-my-car.mp3",
      image: "album/cover/drive-my-car.jpg"
    },
    {
      name: "On My Way",
      singer: "Alan Walker, Sabrina Carpenter, Farruko",
      path: "album/music/on-my-way.mp3",
      image: "album/cover/on-my-way.jpg"
    },
    {
      name: "Run Free",
      singer: "Deep Chills, IVIE",
      path: "album/music/run-free.mp3",
      image: "album/cover/run-free.jpg"
    },
    {
      name: "The River",
      singer: "Axel Johansson",
      path: "album/music/the-river.mp3",
      image: "album/cover/the-river.jpg"
    },
    {
      name: "Alone",
      singer: "Alan Walker & Ava Max",
      path: "album/music/alone.mp3",
      image: "album/cover/alone.jpg"
    },
    {
      name: "Lily",
      singer: "Alan Walker, K-391, Emelie Hollow",
      path: "album/music/lily.mp3",
      image: "album/cover/lily.jpg"
    },
    {
      name: "Lost Control",
      singer: "Alan Walker, Sorana",
      path: "album/music/lost-control.mp3",
      image: "album/cover/lost-control.jfif"
    },
    {
      name: "Runaway",
      singer: "AURORA",
      path: "https://mp3-s1-zmp3.zmdcdn.me/3541340fbe4f57110e5e/298690735493900403?authen=exp=1685727714~acl=/3541340fbe4f57110e5e/*~hmac=89742c47eb792c99f7f8c09bdb884fb2&fs=MTY4NTU1NDkxNDE2OXx3ZWJWNnwwfDExNS43Ni41NS4y",
      image: "data:image/jpeg;base64,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"
    },
    {
      name: "Holly Dolly",
      singer: "Dolly",
      path: "album/music/holly-dolly.mp3",
      image: "album/cover/holly-dolly.jfif"
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                              <span class="bar"></span>
                              <span class="bar"></span>
                              <span class="bar"></span>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };
    
    //Xử lý khi click btn-list
    // Handle when click btn-list
    listBtn.onclick = function () {
     _this.isShow = !_this.isShow;
      _this.setConfig("isShow", _this.isShow);
      playlist.classList.toggle("show", _this.isShow);
      dashboard.classList.toggle("hide", _this.isShow);
    };
    
    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };
    
    audio.addEventListener("timeupdate", () => {
      const currentMinutes = Math.floor(audio.currentTime / 60);
      let currentSeconds = Math.floor(audio.currentTime % 60);
      if (currentSeconds < 10) {
          currentSeconds = `0${currentSeconds}`;
      }
  
      const durationMinutes = Math.floor(audio.duration / 60);
      let durationSeconds = Math.floor(audio.duration % 60);
      if (durationSeconds < 10) {
          durationSeconds = `0${durationSeconds}`;
      }
      if (isNaN(durationMinutes) || isNaN(durationSeconds)) {
        time.textContent = `${currentMinutes}:${currentSeconds} / 0:00`;
      }else{
      time.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
      }
    });
    
    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    title.textContent = "Music App - " + this.currentSong.name;
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();
  }
};

app.start();
