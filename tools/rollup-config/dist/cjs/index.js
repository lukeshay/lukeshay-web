"use strict";function e(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var u=e(require("@rollup/plugin-auto-install")),t=e(require("@rollup/plugin-commonjs")),r=e(require("@rollup/plugin-node-resolve")),i=e(require("@rollup/plugin-strip")),p=require("rollup-plugin-terser"),o=e(require("rollup-plugin-typescript2"));const s=e=>{const o={input:e.input,output:[],external:[...Object.keys(e.dependencies||{})],plugins:[p.terser(),r(),t(),i(),u()]};return e.cjs&&o.output.push({file:e.cjs,format:"cjs"}),e.esm&&o.output.push({file:e.esm,format:"esm"}),e.umd&&o.output.push({file:e.umd,format:"umd"}),e.iife&&o.output.push({file:e.iife,format:"iife"}),o};exports.javascriptConfig=s,exports.typescriptConfig=e=>{const u=s(e);return u.plugins.push(o({tsconfig:"./tsconfig.json"})),u};