import V from './modules/vectors';

function determineDistance(a, b) {
  const d = { dis: null, dir: null };
  const dir = a.center.minus(b.center);
  d.dir = dir.norm();
  d.dis = dir.length();
  return d;
}

const renderOrbitzInElement = (parentContainerId) => {
  const parentContainer = document.getElementById(parentContainerId);
  const H = 512;
  const W = 700;
  const canvas = document.createElement('canvas');
  canvas.style = 'background: grey; border: 1px solid black;';

  parentContainer.append(canvas);

  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  // turn it into a cartesian coordinate grid
  ctx.translate(0, H);
  ctx.scale(1, -1);

  const circum = 2 * Math.PI;

  let objects = [];

  class Sphere {
    constructor(x, y, mass, v) {
      this.center = new V(x, y);
      this.r = 10 + Math.min(25, mass / 400);
      this.mass = mass;
      this.color = `rgb(${
        Math.min(255, (Math.floor((255 * this.mass) / 1000)))
      },0,0)`;
      this.v = v;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.center.x, this.center.y, this.r, 0, circum);
      ctx.fillStyle = this.color;
      ctx.fill();
    }

    update(o) {
      const self = this;
      self.center = self.center.plus(self.v);
      let totalG = new V(0, 0);
      o.forEach((e) => {
        const d = determineDistance(self, e);
        if (d.dis > 0) {
          const g = d.dir.times((0.01 * e.mass) / d.dis ** 2);
          totalG = totalG.plus(g);
        }
      });
      this.v = this.v.minus(totalG);
      objects.push(this);
    }
  }

  let rafId = null;

  function tick() {
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
    const oldObjects = objects;
    objects = [];
    oldObjects.forEach((e) => {
      e.draw();
      e.update(oldObjects);
    });
    rafId = window.requestAnimationFrame(tick);
  }

  const sun = new Sphere(W / 2, H / 2, 40000, new V(0, 0));
  const planet1 = new Sphere(W / 2 - 200, H / 2 - 200, 400, new V(-0.7, 0.7));
  const planet2 = new Sphere(W / 2 + 100, H / 2 + 100, 400, new V(-1, 1));

  objects.push(sun);
  objects.push(planet1);
  objects.push(planet2);

  rafId = window.requestAnimationFrame(tick);

  // Stops the animation and takes the demo off the page. Call it when the
  // page showing the demo closes; otherwise the loop keeps running forever.
  return function stop() {
    window.cancelAnimationFrame(rafId);
    canvas.remove();
  };
};

export default renderOrbitzInElement;
