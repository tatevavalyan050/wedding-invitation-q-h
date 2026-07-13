/**
 * Background music — start as early as possible (while link-click activation may still apply).
 */
(function () {
  const music = document.getElementById("background-music");
  if (!music) return;

  music.volume = 0.35;
  let unlockListenersActive = false;
  let started = false;

  function removeUnlockListeners() {
    if (!unlockListenersActive) return;
    document.removeEventListener("pointerdown", unlockHandler, true);
    document.removeEventListener("touchstart", unlockHandler, true);
    document.removeEventListener("keydown", unlockHandler, true);
    unlockListenersActive = false;
  }

  function addUnlockListeners() {
    if (unlockListenersActive || started) return;
    document.addEventListener("pointerdown", unlockHandler, true);
    document.addEventListener("touchstart", unlockHandler, { capture: true, passive: true });
    document.addEventListener("keydown", unlockHandler, true);
    unlockListenersActive = true;
  }

  async function playMusic() {
    if (started && !music.paused) return true;

    try {
      await music.play();
      started = true;
      removeUnlockListeners();
      return true;
    } catch (err) {
      if (err && err.name === "NotAllowedError") {
        addUnlockListeners();
      }
      return false;
    }
  }

  function unlockHandler() {
    playMusic();
  }

  function tryPlayWhenReady() {
    if (music.readyState >= 2) {
      playMusic();
    }
  }

  music.addEventListener("loadeddata", tryPlayWhenReady);
  music.addEventListener("canplay", tryPlayWhenReady);
  music.addEventListener("canplaythrough", tryPlayWhenReady);
  music.addEventListener("error", () => {
    console.warn("Background music failed to load:", music.currentSrc || music.src);
  });

  window.addEventListener("pageshow", () => playMusic());

  tryPlayWhenReady();
  playMusic();
})();
