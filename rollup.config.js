import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import polyfillNode from 'rollup-plugin-polyfill-node'

const packageJson = require("./package.json");

const EMPTY_MODULE_ID = '$empty$'
const EMPTY_MODULE = `export default {}`

const BROWSERIFY_ALIASES = {
  'fetch-blob/from': EMPTY_MODULE_ID,
  module: EMPTY_MODULE_ID,
};

const nodeResolve = resolve({
  preferBuiltins: false
});

const browserify = {
  name: 'browserify',
  resolveId(source) {
    if (source in BROWSERIFY_ALIASES) {
      if (BROWSERIFY_ALIASES[source] === EMPTY_MODULE_ID) {
        return EMPTY_MODULE_ID;
      }
      return nodeResolve.resolveId(BROWSERIFY_ALIASES[source], undefined);
    }
    if (source === EMPTY_MODULE_ID) {
      return EMPTY_MODULE_ID;
    }
  },
  load(id) {
    if (id === EMPTY_MODULE_ID) return EMPTY_MODULE;
  },
};

export default [
  {
    input: "src/index.ts",
    inlineDynamicImports: false,
    output: [
      {
        dir: packageJson.main.replace('/index.js', ''),
        format: "cjs",
        sourcemap: true,
        entryFileNames: 'index.js',
      }
    ],
    plugins: [
      json(),
      commonjs(),
      resolve({
        preferBuiltins: true
      }),
      typescript({ tsconfig: "./tsconfig.cjs.json" })
    ],
  },
  {
    input: "src/index.ts",
    inlineDynamicImports: false,
    output: [
      {
        dir: packageJson.module.replace('/index.js', ''),
        format: "esm",
        sourcemap: true,
        entryFileNames: 'index.js',
        sourcemapPathTransform: (relativeSourcePath) => {
          if (relativeSourcePath.includes('../../index.ts')) {
            return relativeSourcePath.replace('../../index.ts', '../../src/index.ts')
          }
          return relativeSourcePath
        },
      },
    ],
    plugins: [
      json(),
      commonjs(),
      nodeResolve,
      browserify,
      // https://github.com/FredKSchott/rollup-plugin-polyfill-node/issues/21
      polyfillNode(),
      typescript({
        tsconfig: "./tsconfig.esm.json",
        compilerOptions: {
          sourceRoot: '../'
        }
      })
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{  file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
];