import * as fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const prepareLib = () => {
  const source = fs
    .readFileSync(`${dirname}/../package.json`)
    .toString('utf-8');
  const sourceObj = JSON.parse(source);
  sourceObj.scripts = {};
  sourceObj.devDependencies = {};
  sourceObj.dependencies = {};

  fs.writeFileSync(
    `${dirname}/package.json`,
    Buffer.from(JSON.stringify(sourceObj, null, 2), 'utf-8')
  );
  fs.copyFileSync(`${dirname}/../.npmignore`, `${dirname}/.npmignore`);
  fs.copyFileSync(`${dirname}/../README.md`, `${dirname}/README.md`);
};

prepareLib();
