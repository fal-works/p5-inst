import type { SketchDef, Sketch } from "./sketch";

export type { SketchDef, Sketch };

type Obj = Record<string, unknown>;

/** Creates a function object to be passed to `new p5()`. */
export const createSketch = (def: SketchDef): Sketch => (p) =>
  Object.keys(def).forEach((key) => {
    const func = (def as Obj)[key];
    if (typeof func === "function") (p as Obj)[key] = func.bind(undefined, p);
  });
