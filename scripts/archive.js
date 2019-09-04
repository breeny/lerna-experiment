#!/usr/bin/env node
const rimraf = require('rimraf');
const path = require('path');
const Zip = require('adm-zip');

const packagePath = path.join(__dirname, '../lambdas', process.env.LERNA_PACKAGE_NAME);

rimraf.sync(`${packagePath}/dist`);

const zip = new Zip();
zip.addLocalFolder(packagePath);
zip.writeZip(`${packagePath}/dist/archive.zip`);
