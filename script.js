/* =============================================
   script.js — সব পেজে ব্যবহার হওয়া JavaScript
   ✨ YouTube music, stars, hearts, page transition
   ============================================= */

/* ---- তারার background ---- */
function createStars(count = 60) {
  const container = document.querySelector('.stars-bg');
  if (!container) return;
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 2.5 + 0.5;
    star.style.cssText = `width:${size}px;height:${size}px;top:${Math.random()*100}%;left:${Math.random()*100}%;--dur:${Math.random()*3+2}s;--max-op:${Math.random()*0.5+0.1};animation-delay:${Math.random()*4}s;`;
    container.appendChild(star);
  }
}

/* ---- ভাসমান হার্ট ---- */
function createHearts(count = 8) {
  const emojis = ['♡', '✿', '·', '˚'];
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const h = document.createElement('div');
      h.classList.add('heart-particle');
      h.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      h.style.cssText = `left:${Math.random()*100}%;font-size:${Math.random()*0.6+0.7}rem;color:rgba(244,167,185,${Math.random()*0.4+0.1});animation-duration:${Math.random()*12+10}s;animation-delay:${Math.random()*5}s;`;
      document.body.appendChild(h);
    }, i * 600);
  }
}

/* ---- Fade-in on scroll ---- */
function initFadeIn() {
  const els = document.querySelectorAll('.fade-in');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 180);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

/* ================================================
   YouTube Music Player
   প্রতিটা পেজ থেকে initYouTubePlayer('VIDEO_ID') call করো
   ================================================ */
function initYouTubePlayer(videoId) {
  if (!videoId) return;

  const playBtn = document.getElementById('playBtn');
  const label   = document.getElementById('musicLabel');
  if (!playBtn || !label) return;

  let player    = null;
  let isPlaying = false;
  let apiReady  = false;

  window.onYouTubeIframeAPIReady = function () {
    apiReady = true;
    const div = document.createElement('div');
    div.id = 'yt-bg-player';
    div.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0.01;pointer-events:none;';
    document.body.appendChild(div);

    player = new YT.Player('yt-bg-player', {
      videoId,
      playerVars: {
        autoplay: 0,
        loop: 1,
        playlist: videoId,
        controls: 0,
        rel: 0,
        iv_load_policy: 3,
        modestbranding: 1,
      },
      events: {
        onReady: function () {},
        onError: function () { label.textContent = 'গান লোড হয়নি'; },
      }
    });
  };

  if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
    const tag = document.createElement('script');
    tag.src   = 'https://www.youtube.com/iframe_api';
    tag.onerror = () => { label.textContent = 'ইন্টারনেট নেই'; };
    document.head.appendChild(tag);
  }

  playBtn.addEventListener('click', () => {
    if (!apiReady || !player || typeof player.playVideo !== 'function') {
      label.textContent = 'একটু অপেক্ষা করো...';
      return;
    }
    if (isPlaying) {
      player.pauseVideo();
      playBtn.textContent = '▶';
      label.textContent   = 'সুর চালাও';
      isPlaying = false;
    } else {
      player.playVideo();
      playBtn.textContent = '⏸';
      label.textContent   = 'বাজছে ♪';
      isPlaying = true;
    }
  });
}

/* ---- Page transition ---- */
function goToPage(href) {
  document.body.style.transition = 'opacity 0.5s ease';
  document.body.style.opacity    = '0';
  setTimeout(() => { window.location.href = href; }, 450);
}

/* ---- DOMContentLoaded ---- */
document.addEventListener('DOMContentLoaded', () => {
  createStars(55);
  initFadeIn();
  requestAnimationFrame(() => {
    document.body.style.transition = 'opacity 0.7s ease';
    document.body.style.opacity    = '1';
  });
});
