import type { SketchDef, Sketch } from "./sketch";

export type { SketchDef, Sketch };

type Obj = Record<string, unknown>;

/** Creates a function object to be passed to `new p5()`. */
export const createSketch = (definition: SketchDef): Sketch => (p) => {
  Object.keys(definition).forEach((methodName) => {
    const method = (definition as Obj)[methodName];
    if (typeof method === "function")
      (p as Obj)[methodName] = method.bind(undefined, p);
  });
};
