// Hero Section Multi-Video Background Crossfade Controller
// Seamlessly cycles through Clip Video First -> Fifth in an infinite loop

document.addEventListener('DOMContentLoaded', () => {
  const video1 = document.getElementById('hero-bg-video-1');
  const video2 = document.getElementById('hero-bg-video-2');

  if (!video1 || !video2) return;

  const playlist = [
    'video/Clip%20Video%20First.mp4',
    'video/Clip%20Video%20Second.mp4',
    'video/Clip%20Video%20Third.mp4',
    'video/Clip%20Video%20Fourth.mp4',
    'video/Clip%20Video%20Fifth.mp4'
  ];

  let currentIndex = 0;
  let activeVideo = video1;
  let nextVideo = video2;
  let isTransitioning = false;
  const CROSSFADE_SEC = 1.2;

  // Initialize videos with safe web attributes
  [video1, video2].forEach(v => {
    v.muted = true;
    v.playsInline = true;
    v.setAttribute('muted', '');
    v.setAttribute('playsinline', '');
  });

  // Set initial sources
  video1.src = playlist[0];
  video1.classList.add('active');
  video2.classList.remove('active');

  const playPromise = video1.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // If browser blocks immediate autoplay, retry on user interaction
      const resumeOnInteraction = () => {
        video1.play();
        document.removeEventListener('click', resumeOnInteraction);
        document.removeEventListener('touchstart', resumeOnInteraction);
      };
      document.addEventListener('click', resumeOnInteraction, { once: true });
      document.addEventListener('touchstart', resumeOnInteraction, { once: true });
    });
  }

  // Preload second clip into nextVideo
  const preloadIndex = (currentIndex + 1) % playlist.length;
  nextVideo.src = playlist[preloadIndex];
  nextVideo.load();

  function transitionToNext() {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = (currentIndex + 1) % playlist.length;
    const upcomingVideo = nextVideo;
    const outgoingVideo = activeVideo;

    // Start playing the incoming video
    const startPlay = upcomingVideo.play();
    if (startPlay !== undefined) {
      startPlay.catch(err => {
        console.warn('Hero video play warning:', err);
      });
    }

    // Crossfade classes
    upcomingVideo.classList.add('active');
    outgoingVideo.classList.remove('active');

    // Swap references
    activeVideo = upcomingVideo;
    nextVideo = outgoingVideo;

    // After crossfade finishes, queue up the next clip in the background
    setTimeout(() => {
      outgoingVideo.pause();
      outgoingVideo.currentTime = 0;
      const nextPreloadIdx = (currentIndex + 1) % playlist.length;
      outgoingVideo.src = playlist[nextPreloadIdx];
      outgoingVideo.load();
      isTransitioning = false;
    }, CROSSFADE_SEC * 1000 + 100);
  }

  function handleTimeUpdate(e) {
    const v = e.target;
    if (v !== activeVideo || isTransitioning) return;

    if (v.duration && v.duration - v.currentTime <= CROSSFADE_SEC) {
      transitionToNext();
    }
  }

  function handleEnded(e) {
    const v = e.target;
    if (v === activeVideo) {
      transitionToNext();
    }
  }

  function handleError(e) {
    console.warn('Hero video load warning on clip, skipping to next clip:', e);
    setTimeout(transitionToNext, 1000);
  }

  // Attach event listeners to both video slots
  [video1, video2].forEach(v => {
    v.addEventListener('timeupdate', handleTimeUpdate);
    v.addEventListener('ended', handleEnded);
    v.addEventListener('error', handleError);
  });
});
