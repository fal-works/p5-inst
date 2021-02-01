const setup = (p) => {
  p.createCanvas(400, 400);
  p.noFill();
  p.stroke(32);
  p.strokeWeight(8);
};

const draw = (p) => {
  p.background(240);
  p.circle(200, 200, 240 + 80 * Math.sin(0.1 * p.frameCount));
};

const sketch = p5i.createSketch({
  setup,
  draw,
});
new p5(sketch);
