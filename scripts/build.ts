import * as fs from "fs";
import esbuild from "esbuild";
import prettier from "prettier";
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
      minifyWhitespace: true,
      write: false,
    });
    const esmCode = esm.outputFiles[0];
    if (!esmCode) throw new Error("Failed to build esm.");

    const formatted = prettier.format(esmCode.text, {
      filepath: files.dist.esm,
    });

    return fs.promises.writeFile(files.dist.esm, formatted);
  })();

  // all
  await Promise.all([iife, esm]);
};

export default run();
