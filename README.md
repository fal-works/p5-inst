# p5-inst

Tiny utility for [instance mode](https://github.com/processing/p5.js/wiki/Global-and-instance-mode) of [p5.js](https://p5js.org/).

ES6/[TypeScript](https://www.typescriptlang.org/) friendly.


## How to load

### With \<script\> tag

Something like this in the `<head>` tag:

```html
<script src="https://cdn.jsdelivr.net/npm/p5@1.2.0/lib/p5.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@fal-works/p5-inst@0.1.0/lib/p5-inst.js"></script>

<script src="path/to/your/sketch.js"></script>
```

Now in your source code you can use a global variable `p5i`, which is defined by `p5-inst.js`.

```js
const { createSketch } = p5i;
```

### As ES Module

```text
npm install -D @fal-works/p5-inst
```

```js
import { createSketch } from "@fal-works/p5-inst";
```

## How to use

1. Import the `createSketch()` function (see above).

2. Prepare any `p5` related functions such as `setup()` and `draw()`.  
Unlike the usual use of p5.js, each function should accept a `p5` instance as the first argument.

3. Call `createSketch()`, passing the functions you prepared.  
This returns a `Sketch` object.

4. Call `new p5()`, passing the `Sketch` object you created above.

```js
// Import createSketch() in some way

const setup = (p) => {
  p.createCanvas(400, 400);
  // prepare something
};

const draw = (p) => {
  p.background(240);
  // draw something
};

const sketch = createSketch({
  setup,
  draw,
  // you may include other methods as well, e.g. mousePressed()
});

new p5(sketch);
```

[View sample code on p5.js Web Editor](https://editor.p5js.org/FAL/sketches/qvGI5yvxZ)
