import packageinfo from "./package-info.js";

const prepare = async () => {
  const pkg = await packageinfo;

  const banner = `/**
  * p5-inst -- Thin wrapper around p5.js instance mode.
  * @version ${pkg.version}
  * @license ${pkg.license}
  */`;

  const iifeName = "p5i";

  const files = {
    srcEntry: "src/index.ts",
    dist: {
      iife: pkg.main,
      esm: pkg.module,
    },
  };

  return { banner, iifeName, files };
};

export default prepare();
