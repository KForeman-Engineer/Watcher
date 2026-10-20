(function () {
  var canvas = document.getElementById('stars');
  var ctx = canvas.getContext('2d');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var stars = [];
  var width = 0;
  var height = 0;
  var dpr = Math.min(window.devicePixelRatio || 1, 2);

  // Tweak these to taste
  var DENSITY = 1 / 6500;   // stars per pixel of screen area
  var DRIFT_SPEED = 6;      // pixels per second for the nearest layer
  var TWINKLE_SPEED = 1.2;  // higher = faster twinkle

  function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    var count = Math.floor(width * height * DENSITY);
    stars = [];
    for (var i = 0; i < count; i++) {
      var depth = Math.random();            // 0 = far, 1 = near
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.4 + depth * 1.3,
        depth: depth,
        base: 0.35 + Math.random() * 0.65,
        phase: Math.random() * Math.PI * 2,
        rate: 0.5 + Math.random() * 1.5
      });
    }
    draw(0);
  }

  function draw(t) {
    ctx.clearRect(0, 0, width, height);
    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      var twinkle = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(t * TWINKLE_SPEED * s.rate + s.phase);
      ctx.globalAlpha = s.base * twinkle;
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  var last = 0;
  function frame(now) {
    var t = now / 1000;
    var dt = last ? t - last : 0;
    last = t;

    for (var i = 0; i < stars.length; i++) {
      var s = stars[i];
      s.y += DRIFT_SPEED * (0.2 + s.depth) * dt;   // slow downward drift, nearer stars move faster
      if (s.y - s.r > height) {
        s.y = -s.r;
        s.x = Math.random() * width;
      }
    }

    draw(t);
    requestAnimationFrame(frame);
  }

  window.addEventListener('resize', resize);
  resize();
  if (!reduceMotion) requestAnimationFrame(frame);
})();
