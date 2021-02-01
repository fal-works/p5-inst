import * as fs from "fs";
import esbuild from "esbuild";
import * as terser from "terser";
import config from "./bundle-config.js";

const run = async () => {
  const { banner, iifeName, files } = await config;

  const baseOptions: esbuild.BuildOptions = {
    entryPoints: [files.srcEntry],
    bundle: true,
    platform: "browser",
    banner,
  };

  // iife
  const iife = esbuild.build({
    ...baseOptions,
    outfile: files.dist.iife,
    format: "iife",
    minify: true,
    target: "es6",
    globalName: iifeName,
    sourcemap: true,
  });

  // esm
  const esm = (async () => {
    const esm = await esbuild.build({
      ...baseOptions,
      format: "esm",
      write: false,
    });
    const esmCode = esm.outputFiles[0];
    if (!esmCode) throw new Error("Failed to build esm.");
    const esmMin = await terser.minify(esmCode.text, { ecma: 2015 });
    const esmCodeMin = esmMin.code;
    if (!esmCodeMin) throw new Error("Failed to minify esm.");
    return fs.promises.writeFile(files.dist.esm, esmCodeMin);
  })();

  // all
  await Promise.all([iife, esm]);
  console.log("completed.");
};

export default run();
