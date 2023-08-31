<template>
  <div id="large-header" class="large-header">
    <canvas id="demo-canvas"> </canvas>
    <img
      src="/src/assets/img/portrait.png"
      alt="Portrait Image"
      class="portrait-image"
    />
    <div class="title-wrapper">
      <div class="main-title">
        <h1 class="title">Yarden <span class="thin">Yosef.</span></h1>
      </div>
      <div class="description-container">
        <div class="description-content">
          <div class="static-text">I Am</div>
          <div class="description-title">
            <span class="typed-text"></span>
          </div>
        </div>

        <socialLinks />

        <button class="contact-button">Hire Me</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from "vue";
import socialLinks from "@/components/SocialLinks.vue";
import gsap from "gsap";
import { useHead } from "@vueuse/head";

useHead({
  meta: [
    {
      name: "description",
      content: "Yarden's Portfolio - A portfolio website built with Vue 3",
    },

    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
  ],
});

onMounted(() => {
  const descriptions = [
    "Full Stack Developer.",
    "Passionate about coding.",
    "Creating amazing web experiences.",
  ];

  const typedText = document.querySelector(".typed-text");

  let currentIndex = 0;

  (function () {
    var width,
      height,
      largeHeader,
      canvas,
      ctx,
      points,
      target,
      animateHeader = true;

    initHeader();
    initAnimation();
    addListeners();

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      largeHeader = document.getElementById("large-header");
      largeHeader.style.height = height + "px";

      canvas = document.getElementById("demo-canvas");
      canvas.width = width;
      canvas.height = height;
      ctx = canvas.getContext("2d");

      points = [];
      for (var x = 0; x < width; x = x + width / 20) {
        for (var y = 0; y < height; y = y + height / 20) {
          var px = x + (Math.random() * width) / 20;
          var py = y + (Math.random() * height) / 20;
          var p = { x: px, originX: px, y: py, originY: py };
          points.push(p);
        }
      }

      for (var i = 0; i < points.length; i++) {
        var closest = [];
        var p1 = points[i];
        for (var j = 0; j < points.length; j++) {
          var p2 = points[j];
          if (!(p1 == p2)) {
            var placed = false;
            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (closest[k] == undefined) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }

            for (var k = 0; k < 5; k++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                  closest[k] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        p1.closest = closest;
      }

      for (var i in points) {
        var c = new Circle(
          points[i],
          2 + Math.random() * 2,
          "rgba(255,255,255,0.3)"
        );
        points[i].circle = c;
      }
    }

    function addListeners() {
      if (!("ontouchstart" in window)) {
        window.addEventListener("mousemove", mouseMove);
      }
      window.addEventListener("scroll", scrollCheck);
      window.addEventListener("resize", resize);
    }

    function mouseMove(e) {
      var posx = 0;
      var posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx =
          e.clientX +
          document.body.scrollLeft +
          document.documentElement.scrollLeft;
        posy =
          e.clientY +
          document.body.scrollTop +
          document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      largeHeader.style.height = height + "px";
      canvas.width = width;
      canvas.height = height;
    }

    function initAnimation() {
      animate();
      for (var i in points) {
        shiftPoint(points[i]);
      }
    }

    function animate() {
      if (animateHeader) {
        ctx.clearRect(0, 0, width, height);
        for (var i in points) {
          if (Math.abs(getDistance(target, points[i])) < 4000) {
            points[i].active = 0.3;
            points[i].circle.active = 0.6;
          } else if (Math.abs(getDistance(target, points[i])) < 20000) {
            points[i].active = 0.1;
            points[i].circle.active = 0.3;
          } else if (Math.abs(getDistance(target, points[i])) < 40000) {
            points[i].active = 0.02;
            points[i].circle.active = 0.1;
          } else {
            points[i].active = 0;
            points[i].circle.active = 0;
          }

          drawLines(points[i]);
          points[i].circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(p) {
      gsap.to(p, {
        duration: 1 + Math.random(),
        x: p.originX - 50 + Math.random() * 100,
        y: p.originY - 50 + Math.random() * 100,
        ease: "circ.inOut",
        onComplete: () => {
          shiftPoint(p);
        },
      });
    }

    function drawLines(p) {
      if (!p.active) return;
      for (var i in p.closest) {
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.closest[i].x, p.closest[i].y);
        ctx.strokeStyle = "rgba(156,217,249," + p.active + ")";
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      var _this = this;

      (function () {
        _this.pos = pos || null;
        _this.radius = rad || null;
        _this.color = color || null;
      })();

      this.draw = function () {
        if (!_this.active) return;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = "rgba(156,217,249," + _this.active + ")";
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
  })();

  function animateDescription() {
    const currentDescription = descriptions[currentIndex];
    typedText.textContent = "";

    typeText(currentDescription, () => {
      setTimeout(() => {
        eraseText(() => {
          currentIndex = (currentIndex + 1) % descriptions.length;
          animateDescription();
        });
      }, 1000);
    });
  }

  function typeText(text, callback) {
    let index = 0;
    const typingSpeed = 50;

    function type() {
      if (index < text.length) {
        typedText.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingSpeed);
      } else {
        callback();
      }
    }

    type();
  }

  function eraseText(callback) {
    let text = typedText.textContent;
    let index = text.length;
    const erasingSpeed = 30;

    function erase() {
      if (index > 0) {
        typedText.textContent = text.substring(0, index - 1);
        index--;
        setTimeout(erase, erasingSpeed);
      } else {
        callback();
      }
    }

    erase();
  }

  animateDescription();
});
</script>
<style scoped lang="scss">
.large-header {
  position: relative;
  width: 100%;
  background: $main-background;
  overflow: hidden;
  z-index: 1;
}

.portrait-image {
  position: absolute;
  bottom: 0;
  left: 10%;
  height: 100%;
  opacity: 0.4;
  filter: brightness(0.5);
}

.title-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .main-title {
    position: relative;
    padding: 0 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: $white;
    text-align: center;
    z-index: 100;
    .thin {
      font-weight: 200;
    }
  }

  .description-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
    color: $white;

    .description-content {
      display: flex;
      align-items: center;
    }

    .static-text {
      margin-right: 0.5rem;
    }

    .description-title {
      display: inline-block;
      position: relative;

      .typed-text {
        color: $primary;
        font-weight: 500;
      }

      .typed-text::after {
        content: "|";
        display: inline-block;
        animation: blinkCursor 0.7s infinite alternate;
        color: $white;
        margin-left: 5px;
      }
    }

    .contact-button {
      margin: 2rem 1rem;
      padding: 12px 32px;
      border: 1px solid $white;
      border-radius: 30px;
      color: $white;
      opacity: 0.7;
      font-size: 1.2rem;
      font-weight: 500;
      cursor: pointer;
      background-color: transparent;

      &:hover {
        background-color: $white;
        color: $primary;
        opacity: 1 !important;
      }
    }
  }

  @keyframes blinkCursor {
    to {
      opacity: 0;
    }
  }
}

@media screen and (max-width: $desktop-width) {
  .portrait-image {
    margin: 0 auto;
    left: 0;
    width: 100%;
    height: auto;
    max-width: 400px;
  }

  .title-wrapper {
    width: 100%;
    padding: 0 1rem;

    .main-title {
      font-size: 1.5rem;
    }
  }
}

@media screen and (max-width: $tablet-width) {
  .title-wrapper {
    .main-title {
      font-size: 1.2rem;
    }

    .description-container {
      display: flex;
      flex-direction: column;
      font-size: 1.2rem;
    }
  }
}

@media screen and (max-width: $mobile-width) {
  #demo-canvas {
    opacity: 0.1;
  }

  .social-link {
    font-size: 1rem !important;
    width: 2rem !important;
    height: 2rem !important;
    line-height: 2rem !important;
  }

  .contact-button {
    font-size: 1rem !important;
    padding: 0.5rem 0.5rem !important;
  }

  .description-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .static-text {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
}
</style>
