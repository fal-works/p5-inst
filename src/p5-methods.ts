/** Function that may be called on any keyboard event. */
type KeyboardEventCallback = (event?: KeyboardEvent) => void | boolean;

/** Function that may be called on any mouse event. */
type MouseEventCallback = (event?: MouseEvent) => void | boolean;

/** Function that may be called on any touch event. */
type TouchEventCallback = (event?: TouchEvent) => void | boolean;

/**
 * Methods of `p5` that may be overwritten in `new p5()`.
 */
export type P5WritableMethods = {
  preload: () => void;
  setup: () => void;
  draw: () => void;

  windowResized: (event?: Event) => void;

  keyPressed: KeyboardEventCallback;
  keyReleased: KeyboardEventCallback;
  keyTyped: KeyboardEventCallback;

  mouseMoved: MouseEventCallback;
  mouseDragged: MouseEventCallback;
  mousePressed: MouseEventCallback;
  mouseReleased: MouseEventCallback;
  mouseClicked: MouseEventCallback;
  doubleClicked: MouseEventCallback;
  mouseWheel: MouseEventCallback;

  touchStarted: TouchEventCallback;
  touchMoved: TouchEventCallback;
  touchEnded: TouchEventCallback;

  deviceMoved: () => void;
  deviceTurned: () => void;
  deviceShaken: () => void;
};

/** Names of `p5` methods that may be overwritten in `new p5()`. */
export const p5WritableMethodNames: (keyof P5WritableMethods)[] = [
  "preload",
  "setup",
  "draw",

  "windowResized",

  "keyPressed",
  "keyReleased",
  "keyTyped",

  "mouseMoved",
  "mouseDragged",
  "mousePressed",
  "mouseReleased",
  "mouseClicked",
  "doubleClicked",
  "mouseWheel",

  "touchStarted",
  "touchMoved",
  "touchEnded",

  "deviceMoved",
  "deviceTurned",
  "deviceShaken",
];
