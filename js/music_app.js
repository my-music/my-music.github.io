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
const html =$("html")

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
      name: "Có Đâu Ai Ngờ",
      singer: "Thu Cầm",
      path: "album/music/co-dau-ai-ngo.mp3",
      image: "album/cover/co-dau-ai-ngo.jfif"
    },
    {
      name: "Là Anh",
      singer: "Phạm Lịch, BMZ",
      path: "album/music/la-anh.mp3",
      image: "https://i.scdn.co/image/ab67616d0000b273b3acabff70027bdaaceb84ad"
    },
    {
      name: "Anh Kết Em Rồi",
      singer: "DJ Mie, Hồng Thanh",
      path: "album/music/anh-ket-em-roi.mp3",
      image: "album/cover/anh-ket-em-roi.jpg"
    },
    {
      name: "Cô gái M52",
      singer: "Huy, Tùng Viu",
      path: "album/music/co-gai-m52.mp3",
      image: "album/cover/co-gai-m52.jpg"
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
      path: "album/music/cung-anh.mp3",
      image: "https://avatar-ex-swe.nixcdn.com/song/2017/12/21/d/c/5/f/1513874388548.jpg"
    },
    {
      name: "Đám Cưới Nha?",
      singer: "DJ Mie, Hồng Thanh",
      path: "album/music/dam-cuoi-nha.mp3",
      image: "album/cover/dam-cuoi-nha.jfif"
    },
    {
      name: "Gió",
      singer: "Jank",
      path: "album/music/gio.mp3",
      image: "album/cover/gio.jpg"
    },
    {
      name: "Cô Gái Này Là Của Ai?",
      singer: "Krix, Rush (Đoàn Quốc Vinh), Nhi Nhi",
      path: "album/music/co-gai-nay-la-cua-ai.mp3",
      image: "https://i.scdn.co/image/ab67616d0000b2735d1e7fcc36547700dcc6c16a"
    },
    {
      name: "Anh Muốn Đưa Em Về Không",
      singer: "Ngô Lan Hương",
      path: "album/music/anh-muon-dua-em-ve-khong.mp3",
      image: "https://i1.sndcdn.com/artworks-hdyIXFUGpQFLOydG-wOVjoQ-t500x500.jpg"
    },
    {
      name: "Khi Mà",
      singer: "Ronboogz",
      path: "album/music/khi-ma.mp3",
      image: "album/cover/khi-ma.jpg"
    },
    {
      name: "Đâu Ai Dám Hứa",
      singer: "Czee",
      path: "album/music/dau-ai-dam-hua.mp3",
      image: "https://i1.sndcdn.com/artworks-BVko6ON4vMXI7qRN-q5Jw4Q-t500x500.jpg"
    },
    {
      name: "Nắm Bàn Tay Say Cả Đời",
      singer: "Đạt Trần, Nâu",
      path: "album/music/nam-ban-tay-say-ca-doi.mp3",
      image: "album/cover/nam-ban-tay-say-ca-doi.jfif"
    },
    {
      name: "Chuyện Tình Tôi",
      singer: "KHOA, KASS",
      path: "album/music/chuyen-tinh-toi.mp3",
      image: "album/cover/chuyen-tinh-toi.jpg"
    },
    {
      name: "Lửng Lơ",
      singer: "Masew, B Ray, Red T, Ý Tiên",
      path: "album/music/lung-lo.mp3",
      image: "album/cover/lung-lo.jpg"
    },
    {
      name: "Chạy Về Khóc Với Anh",
      singer: "ERIK",
      path: "album/music/yeu-duong-kho-qua-thi-chay-ve-khoc-voi-anh.mp3",
      image: "album/cover/yeu-duong-kho-qua-thi-chay-ve-khoc-voi-anh.jpg"
    },
    {
      name: "Nhất Trên Đời",
      singer: "VAnh, BMZ",
      path: "album/music/nhat-tren-doi.mp3",
      image: "album/cover/nhat-tren-doi.jpg"
    },
    {
      name: "Những Điều Nhỏ Nhoi",
      singer: "Vy Oanh",
      path: "album/music/nhung-dieu-nho-nhoi.mp3",
      image: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2019/08/13/7/d/5/0/1565690655124_600.jpg"
    },
    {
      name: "Yêu Đời",
      singer: "MTV",
      path: "album/music/yeu-doi.mp3",
      image: "https://avatar-ex-swe.nixcdn.com/song/2022/09/17/2/7/7/e/1663379560958.jpg"
    },
    {
      name: "Bài Ca Tuổi Trẻ",
      singer: "JGKiD, KraziNoyze, Emcee L, Da LAB, Vũ Bùi Thu Thủy, Linh Cáo, Mel G",
      path: "album/music/bai-ca-tuoi-tre.mp3",
      image: "https://avatar-ex-swe.nixcdn.com/song/2018/07/09/d/c/c/0/1531124811438.jpg"
    },
    {
      name: "Sắc Môi Em Hồng",
      singer: "Minh Hằng",
      path: "album/music/sac-moi-em-hong.mp3",
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
      name: "Believer",
      singer: "Imagine Dragons",
      path: "album/music/believer.mp3",
      image: "album/cover/believer.jfif"
    },
    {
      name: "The Nights",
      singer: "Avicii",
      path: "album/music/the-nights.mp3",
      image: "album/cover/the-nights.jpg"
    },
    {
      name: "That Girl",
      singer: "Olly  Murs",
      path: "album/music/that-girl.mp3",
      image: "album/cover/that-girl.jpg"
    },
    {
      name: "Waiting For Love",
      singer: "Avicii",
      path: "album/music/waiting-for-love.mp3",
      image: "album/cover/waiting-for-love.jpg"
    },
    {
      name: "Drive My Car",
      singer: "Deamn",
      path: "album/music/drive-my-car.mp3",
      image: "album/cover/drive-my-car.jpg"
    },
    {
      name: "Fly Away",
      singer: "TheFatRat",
      path: "album/music/flyaway.mp3",
      image: "album/cover/flyaway.jpg"
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
      name: "Natural",
      singer: "Imagine Dragons",
      path: "album/music/natural.mp3",
      image: "album/cover/natural.jfif"
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
      path: "album/music/runaway.mp3",
      image: "album/cover/runaway.jfif"
    },
    {
      name: "Demons",
      singer: "Imagine Dragons",
      path: "album/music/demons.mp3",
      image: "album/cover/demons.jfif"
    },
    {
      name: "Time Lapse",
      singer: "TheFatRat",
      path: "album/music/time-lapse.mp3",
      image: "album/cover/time-lapse.jpg"
    },
    {
      name: "Oblivion",
      singer: "TheFatRat, Lola Blanc",
      path: "album/music/oblivion.mp3",
      image: "album/cover/oblivion.jpg"
    },
    {
      name: "Close To The Sun",
      singer: "TheFatRat, Anjulie",
      path: "album/music/close-to-the-sun.mp3",
      image: "album/cover/close-to-the-sun.jpg"
    },
    {
      name: "Jackpot",
      singer: "TheFatRat",
      path: "album/music/jackpot.mp3",
      image: "album/cover/jackpot.jpg"
    },
    {
      name: "Rise Up",
      singer: "TheFatRat",
      path: "album/music/rise-up.mp3",
      image: "album/cover/rise-up.jpg"
    },
    {
      name: "Monody",
      singer: "TheFatRat, Laura Brehm",
      path: "album/music/monody.mp3",
      image: "album/cover/monody.jfif"
    },
    {
      name: "Unity",
      singer: "TheFatRat",
      path: "album/music/unity.mp3",
      image: "album/cover/unity.jfif"
    },
    {
      name: "Never Be Alone",
      singer: "TheFatRat",
      path: "album/music/never-be-alone.mp3",
      image: "album/cover/never-be-alone.jpg"
    },
    {
      name: "Origin",
      singer: "TheFatRat",
      path: "album/music/origin.mp3",
      image: "album/cover/origin.jpg"
    },
    {
      name: "Solitude",
      singer: "TheFatRat, Slaydit",
      path: "album/music/solitude.mp3",
      image: "album/cover/solitude.jpg"
    },
    {
      name: "WindFall",
      singer: "TheFatRat",
      path: "album/music/windfall.mp3",
      image: "album/cover/windfall.jpg"
    }
    // {
    //   name: "Holly Dolly",
    //   singer: "Dolly",
    //   path: "album/music/holly-dolly.mp3",
    //   image: "album/cover/holly-dolly.jfif"
    // }
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
      html.classList.toggle("hide", _this.isShow);
      listBtn.classList.toggle("active", _this.isShow);
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

    // Khi song được played thì ngăn chặn việc reload
    // When the song is played, it prevents reloading
    window.addEventListener('beforeunload', function(event) {
      if ( _this.isPlaying) {
          event.preventDefault();
          // Google Chrome requires returnValue to be set.
          event.returnValue = '';
      }
    });

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
    
    // Hiển thị thời gian
    // Show the time
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
    title.textContent = "For You - " + this.currentSong.name;
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
