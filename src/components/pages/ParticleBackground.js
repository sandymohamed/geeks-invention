import React, { useEffect } from 'react';

const colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];

const ParticleBackground = () => {
  const canvasRef = React.useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let ww = window.innerWidth;
    let wh = window.innerHeight;

    function Particle(x, y) {
      this.x = Math.random() * ww;
      this.y = Math.random() * wh;
      this.dest = {
        x: x,
        y: y
      };
      this.r = Math.random() * 5 + 2;
      this.vx = (Math.random() - 0.5) * 20;
      this.vy = (Math.random() - 0.5) * 20;
      this.accX = 0;
      this.accY = 0;
      this.friction = Math.random() * 0.05 + 0.94;

      this.color = colors[Math.floor(Math.random() * 6)];
    }

    Particle.prototype.render = function () {
      this.accX = (this.dest.x - this.x) / 1000;
      this.accY = (this.dest.y - this.y) / 1000;
      this.vx += this.accX;
      this.vy += this.accY;
      this.vx *= this.friction;
      this.vy *= this.friction;

      this.x += this.vx;
      this.y += this.vy;

      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
      ctx.fill();

      var a = this.x - ww / 2;
      var b = this.y - wh / 2;

      var distance = Math.sqrt(a * a + b * b);
      if (distance < 35) {
        this.accX = (this.x - ww / 2) / 100;
        this.accY = (this.y - wh / 2) / 100;
        this.vx += this.accX;
        this.vy += this.accY;
      }
    };

    function initScene() {
      ww = canvas.width = window.innerWidth;
      wh = canvas.height = window.innerHeight;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = "bold " + (ww / 10) + "px sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("G", ww / 2, wh / 2);

      var data = ctx.getImageData(0, 0, ww, wh).data;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "screen";

      const particles = [];
      for (var i = 0; i < ww; i += Math.round(ww / 150)) {
        for (var j = 0; j < wh; j += Math.round(ww / 150)) {
          if (data[((i + j * ww) * 4) + 3] > 150) {
            particles.push(new Particle(i, j));
          }
        }
      }
      
      particles.forEach(particle => particle.render());
    }

    window.addEventListener("resize", initScene);
    initScene();

    return () => {
      window.removeEventListener("resize", initScene);
    };
  }, []);

  return (
    <div>
      <canvas id="scene" ref={canvasRef}></canvas>
      <p>Mouse over the canvas to interact with the letter "G"</p>
    </div>
  );
};

export default ParticleBackground;
