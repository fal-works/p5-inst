import esbuild from "esbuild";
import config from "./bundle-config.js";

const run = async () => {
  const { banner, iifeName, files } = await config;

  const baseOptions: esbuild.BuildOptions = {
    entryPoints: [files.srcEntry],
    bundle: true,
    minify: true,
    platform: "browser",
    sourcemap: true,
    banner,
  };

  // iife
  void esbuild.build({
    ...baseOptions,
    outfile: files.dist.iife,
    format: "iife",
    target: "es6",
    globalName: iifeName,
  });

  // esm
  void esbuild.build({
    ...baseOptions,
    outfile: files.dist.esm,
    format: "esm",
  });
};

export default run();
