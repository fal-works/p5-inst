import * as fs from "fs";

type Package = {
  license: string;
  version: string;
  main: string;
  module: string;
};
const pkgFields: (keyof Package)[] = ["license", "version", "main", "module"];

const get = async () => {
  const pkgBuffer = await fs.promises.readFile("package.json");

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const pkg: Package = JSON.parse(pkgBuffer.toString());

  for (const field of pkgFields) if (!pkg[field]) throw `Missing: ${field}`;

  return pkg;
};

export default get();
