import packageinfo from "./package-info.js";

const prepare = async () => {
  const pkg = await packageinfo;

  const banner = `/**
 * p5-inst -- Tiny utility for p5.js instance mode.
 * @version ${pkg.version}
 * @license ${pkg.license}
 */`;

  const iifeName = "p5i";

  const files = {
    srcEntry: "src/index.ts",
    dist: {
      iife: "lib/p5-inst.js",
      esm: pkg.module,
    },
  };

  return { banner, iifeName, files };
};

export default prepare();
