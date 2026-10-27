let soundtrack: HTMLAudioElement | null = null;
let enabled = false;

function getSoundtrack(): HTMLAudioElement | null {
  if (typeof window === 'undefined') return null;
  if (!soundtrack) {
    soundtrack = new Audio('/audio/background-music.mp3');
    soundtrack.loop = true;
    soundtrack.preload = 'auto';
    soundtrack.volume = 0.42;
    soundtrack.addEventListener('play', () => {
      enabled = true;
      window.dispatchEvent(new Event('cinematicmusicchange'));
    });
    soundtrack.addEventListener('pause', () => {
      enabled = false;
      window.dispatchEvent(new Event('cinematicmusicchange'));
    });
    soundtrack.addEventListener('ended', () => {
      if (soundtrack) soundtrack.currentTime = 0;
    });
  }
  return soundtrack;
}

export function isCinematicMusicOn() {
  return enabled && !!soundtrack && !soundtrack.paused;
}

export function toggleCinematicMusic() {
  if (isCinematicMusicOn()) {
    stopCinematicMusic();
    return false;
  }
  startCinematicMusic();
  return true;
}

/** Start the user's supplied soundtrack. Call from a click/tap to satisfy browser autoplay rules. */
export function startCinematicMusic() {
  const audio = getSoundtrack();
  if (!audio) return;
  audio.volume = 0.42;
  void audio.play().then(() => {
    enabled = true;
    window.dispatchEvent(new Event('cinematicmusicchange'));
  }).catch(() => {
    enabled = false;
    window.dispatchEvent(new Event('cinematicmusicchange'));
  });
}

export function stopCinematicMusic() {
  const audio = getSoundtrack();
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
  enabled = false;
  if (typeof window !== 'undefined') window.dispatchEvent(new Event('cinematicmusicchange'));
}
