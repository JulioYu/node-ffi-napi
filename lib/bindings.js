'use strict';
const path = require('path');
const ref = require('ref-napi');
const assert = require('assert');

assert(ref.instance);

const isDevMode = process.env.NODE_ENV === 'development';
const exeFolderPath = path.resolve(process.execPath, '..');
let prebuildPath = '';

if (isDevMode) {
    prebuildPath = path.join(__dirname, '..');
} else {
    prebuildPath = path.join(exeFolderPath, 'node_modules', 'ffi-napi');
}

const bindings = require('node-gyp-build')(prebuildPath);

module.exports = bindings.initializeBindings(ref.instance);
