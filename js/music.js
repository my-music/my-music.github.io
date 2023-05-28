// ------------------------------------------------- PLAY AND PAUSE------------------------------------------------------------
const audio = document.getElementById("audio");
const cover = document.getElementById("cover");
function playPause() {
    const playButton = document.getElementById("play");
    if (audio.paused) {
        audio.play();
        cover.style.animationPlayState = "running";
        playButton.innerHTML = "<img src='image/icons/pause.png'>";
    } else {
        audio.pause();
        playButton.innerHTML = "<img src='image/icons/play.png'>";
        cover.style.animationPlayState = "paused";
    }
};
// ------------------------------------------------- LOOP------------------------------------------------------------
function toggleLoop() {
    const loopButton = document.getElementById("loop");
    audio.loop = !audio.loop;
    loopButton.innerHTML = audio.loop ? "<img src='image/icons/no-loop.png'>" : "<img src='image/icons/loop.png'>";
};

// ------------------------------------------------- VOLUME------------------------------------------------------------
// Lấy phần tử nút volume và thanh trượt âm lượng
const volumeSlider = document.getElementById("volume");
const volumeBtn = document.querySelector(".volume-btn");
const volumeBar = document.querySelector(".volume-bar");

// Thêm sự kiện click cho nút volume
volumeBtn.addEventListener("click", () => {
  // Kiểm tra xem thanh trượt âm lượng có đang hiển thị hay không
  if (volumeBar.classList.contains("show")) {
    // Nếu đang hiển thị, ẩn thanh trượt âm lượng
    volumeBar.classList.remove("show");
  } else {
    // Nếu không hiển thị, hiển thị thanh trượt âm lượng
    volumeBar.classList.add("show");
  }
});

// Thêm sự kiện change cho thanh trượt âm lượng
volumeSlider.addEventListener('change', changeVolume);

// Hàm thay đổi âm lượng
function changeVolume() {
  audio.volume = volumeSlider.value;
  
  // Kiểm tra giá trị của thanh trượt âm lượng
  if (volumeSlider.value == 0) {
    // Nếu giá trị là 0, đổi tên nút volume thành "Silent"
    volumeBtn.innerHTML = "<img src='image/icons/mute.png' style='width: 35px;'>";
  } else {
    // Nếu giá trị khác 0, đổi tên nút volume thành "Volume"
    volumeBtn.innerHTML = "<img src='image/icons/volume.png' style='width: 35px;'>";
  }
}

// ------------------------------------------------- MY FAVORITE------------------------------------------------------------
// Thêm mảng chứa thông tin về các bài hát trong thư viện
const songs = [
    { title: "Bật Tình Yêu Lên", singer:"Tăng Duy Tân, Hòa Minzy", src: "album/music/bat-tinh-yeu-len.mp3", cover: "album/cover/bat-tinh-yeu-len.jpg" },
    { title: "Cơn Mưa Ngang Qua", singer:"Sơn Tùng M-TP", src: "album/music/con-mua-ngang-qua.mp3", cover: "album/cover/con-mua-ngang-qua.jpg" },
    { title: "Way Back Home", singer:"Huy Vạc, Freak", src: "album/music/way-back-home.mp3", cover: "album/cover/way-back-home.jpg" },
    { title: "Reality", singer:"Lost Frequencies, Janieck Devy", src: "album/music/reality.mp3", cover: "album/cover/reality.jpg" },
    { title: "That Girl", singer:"Olly  Murs", src: "album/music/that-girl.mp3", cover: "album/cover/that-girl.jpg" },
    { title: "On My Way", singer:"Alan Walker, Sabrina Carpenter, Farruko", src: "album/music/on-my-way.mp3", cover: "album/cover/on-my-way.jpg" },
    { title: "Run Free", singer:"Deep Chills, IVIE", src: "album/music/run-free.mp3", cover: "album/cover/run-free.jpg" },
    { title: "The River", singer:"Axel Johansson", src: "album/music/the-river.mp3", cover: "album/cover/the-river.jpg" },
    { title: "Alone", singer:"Alan Walker & Ava Max", src: "album/music/alone.mp3", cover: "album/cover/alone.jpg" },
    { title: "LiLy", singer:"Alan Walker, K-391, Emelie Hollow", src: "album/music/lily.mp3", cover: "album/cover/lily.jpg" },
    { title: "Lost Control", singer:"Alan Walker, Sorana", src: "album/music/lost-control.mp3", cover: "album/cover/lost-control.jfif" },
    { title: "Holly Dolly", singer:"Dolly", src: "album/music/holly-dolly.mp3", cover: "album/cover/holly-dolly.jfif" },
];
const playButton = document.getElementById("play");
// Thêm các bài hát vào danh sách trong thư viện
const songList = document.querySelector(".song-list");

let currentSongIndex = -1;

songs.forEach((song, index) => {
    const songElement = document.createElement("div");
    songElement.classList.add("song");
    songElement.innerHTML = song.title + " - " + song.singer + "<div class='now-playing'></div>";
    songElement.addEventListener("click", () => playSong(index));
    songList.appendChild(songElement);
});

function playSong(index) {
    audio.src = songs[index].src;
    document.getElementById("cover").src = songs[index].cover;
    const titleElement = document.getElementById("title");
    titleElement.innerText = "Chill out - " + songs[index].title;
    const titlemusicElement = document.getElementById("title-music");
    titlemusicElement.innerText = songs[index].title;
    const singerElement = document.getElementById("singer");
    singerElement.innerText = songs[index].singer;
    audio.play();
    playButton.innerHTML = "<img src='image/icons/pause.png'>";
    cover.style.animationPlayState = "running";
    currentSongIndex = index;
};

// ------------------------------------------------- PROGRESS-PERCENT AND TIME-UPDATE ------------------------------------------------------------
const seekBar = document.querySelector(".seek-bar");
const time = document.querySelector(".time");

audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    seekBar.value = progressPercent;

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

    time.textContent = `${currentMinutes}:${currentSeconds} / ${durationMinutes}:${durationSeconds}`;
});

// Thêm sự kiện để điều chỉnh bài hát phát ở đoạn nào
seekBar.addEventListener("input", () => {
    const seekTime = (audio.duration / 100) * seekBar.value;
    audio.currentTime = seekTime;
});

// ------------------------------------------------- PREV và NEXT SONG ------------------------------------------------------------ 

function nextSong() {
    currentSongIndex++;
    if (currentSongIndex >= songs.length) {
      currentSongIndex = 0;
    }
    const nextSong = songs[currentSongIndex];
    const audio = document.querySelector('#audio');
    audio.src = nextSong.src;
    const coverImg = document.querySelector('#cover');
    coverImg.src = nextSong.cover;
    const title = document.querySelector('#title');
    title.textContent = "Chill out - " + nextSong.title;
    const titlemusic = document.querySelector('#title-music');
    titlemusic.textContent = nextSong.title;
    const singer = document.getElementById("singer");
    singer.textContent = nextSong.singer;
    audio.play();
    playButton.innerHTML = "<img src='image/icons/pause.png'>";
    cover.style.animationPlayState = "running";
  }
  
  function prevSong() {
    currentSongIndex--;
    if (currentSongIndex < 0) {
      currentSongIndex = songs.length - 1;
    }
    const prevSong = songs[currentSongIndex];
    const audio = document.querySelector('#audio');
    audio.src = prevSong.src;
    const coverImg = document.querySelector('#cover');
    coverImg.src = prevSong.cover;
    const title = document.querySelector('#title');
    title.textContent = "Chill out - " + prevSong.title;
    const titlemusic = document.querySelector('#title-music');
    titlemusic.textContent = prevSong.title;
    const singer = document.getElementById("singer");
    singer.textContent = prevSong.singer;
    audio.play();
    playButton.innerHTML = "<img src='image/icons/pause.png'>";
    cover.style.animationPlayState = "running";
  }

    const nextBtn = document.querySelector('#next');
    nextBtn.addEventListener('click', function() {
    nextSong();
});

    const prevBtn = document.querySelector('#prev');
    prevBtn.addEventListener('click', function() {
    prevSong();
    });

// // ------------------------------------------------- AUTO-PLAY ------------------------------------------------------------ 
// let isAutoPlay = true;

// // Xử lý sự kiện click nút Autoplay
// const autoplayBtn = document.querySelector('#autoplay');
// autoplayBtn.addEventListener('click', function() {
//   isAutoPlay = !isAutoPlay;
//   if (isAutoPlay) {
//     autoplayBtn.textContent = 'Autoplay: On';
//   } else {
//     autoplayBtn.textContent = 'Autoplay: Off';
//   }
// });

// Bắt đầu chuyển bài khi hết bài
audio.addEventListener('ended', function() {
  nextSong();
});

// // Tắt chức năng autoplay mặc định là Off
// isAutoPlay = false;
// autoplayBtn.textContent = 'Autoplay: Off';

// ----------------------------------------------- SEARRCH -------------------------------------------------------------