import * as fs from "fs";

const dirs = ["lib/", "types/"];

const remove = (path: string) =>
  fs.promises.rm(path, { recursive: true, force: true });

export default Promise.all(dirs.map(remove));
