// Video Code Starts here

// Array of objects for the playlist
let playlist = [
    {
      title: "Favour",
      artist: "Godswill Oyor",
      src: "media/Favour.mp4",
      thumbnail: "img/favourThumbnail.jpeg"
    },
    {
      title: "Mey W'aye",
      artist: "Luigi Maclean",
      src: "media/Mey W'aye.mp4",
      thumbnail: "img/Luigi.jpeg"
    },
    {
      title: "Be lifted",
      artist: "MOGmusic",
      src: "media/Be Lifted.mp4",
      thumbnail: "img/MOGmusic.webp"
    },
    {
      title: "Songs of Revelation",
      artist: "Kofi Peprah",
      src: "media/songs of Revelation.mp4",
      thumbnail: "img/KofiPeprah.jpeg"
    },
    {
      title: "Tare",
      artist: "Kaestrings",
      src: "media/Tare.mp4",
      thumbnail: "img/tare.jpeg"
    }
  ];


  let currentIndex = 0;

  const video = document.querySelector('video');
  const playBtn = document.querySelector('#playBtn');
  const pauseBtn = document.querySelector('#pauseBtn');
  const stopBtn = document.querySelector('#stopBtn');
  const prevBtn = document.querySelector('#prevBtn');
  const nextBtn = document.querySelector('#nextBtn');

  const titleofSong = document.querySelector('#title');
  const artistName = document.querySelector('#artist');
  const thumbnail = document.querySelector('#thumbnail');
  const now_Playing = document.querySelector('#now_Playing');
  let playlistContainer = document.querySelector('#playlist');


  function loadVideo(index) {
    const track = playlist[index];
    video.src = track.src;
    title.textContent = track.title;
    artist.textContent = track.artist;
    thumbnail.src = track.thumbnail;
    video.load();
    now_Playing.style.display = 'block';
    currentIndex = index;
  }


  function updateButtons(isPlaying) {
    if(isPlaying) {
        playBtn.style.display = 'none';
        pauseBtn.style.display = 'inline-block';
    } else {
        playBtn.style.display = 'inline-block';
        pauseBtn.style.display = 'none';
    }
  }


  function renderPlaylist() {
    for (let i = 0; i < playlist.length; i++) {
        (function(index) {
            let item = document.createElement('div');
            item.className = 'playlist-item';
            item.textContent = playlist[index].title + ' - ' + playlist[index].artist;
            item.addEventListener('click', function() {
                loadVideo(index);
                video.play();
                updateButtons(true)
            });
            playlistContainer.appendChild(item);
        })(i);
    }
  }


  function playBtnVid() {
    video.play();
    updateButtons(true);
    now_Playing.style.display = 'block';
  }
  playBtn.addEventListener('click', playBtnVid);


  function pauseBtnVid() {
    video.pause();
    updateButtons(false);
    now_Playing.style.display = 'block';
  }
  pauseBtn.addEventListener('click', pauseBtnVid);


  function stopBtnVid() {
    video.pause();
    video.currentTime = 0;
    updateButtons(false);
  }
  stopBtn.addEventListener('click', stopBtnVid);


  function prevBtnVid() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadVideo(currentIndex);
    video.play();
    updateButtons(true);
  }
  prevBtn.addEventListener('click', prevBtnVid);


  function nextBtnVid() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadVideo(currentIndex);
    video.play();
    updateButtons(true);
  }
  nextBtn.addEventListener('click', nextBtnVid);

  function videoEnd(){
    updateButtons(false);
  }
  video.addEventListener('ended', videoEnd);

  renderPlaylist();
  loadVideo(currentIndex);
