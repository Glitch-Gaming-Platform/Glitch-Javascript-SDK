import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import polyfillNode from 'rollup-plugin-polyfill-node';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.ts",
    output: [
      {
        dir: packageJson.main.replace('/index.js', ''),
        format: "cjs",
        sourcemap: true,
      }
    ],
    plugins: [
      json(),
      commonjs(),
      resolve({ preferBuiltins: true }),
      typescript({ tsconfig: "./tsconfig.cjs.json" })
    ],
  },
  {
    input: "src/index.ts",
    output: [
      {
        dir: packageJson.module.replace('/index.js', ''),
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      json(),
      commonjs(),
      resolve({ browser: true, preferBuiltins: false }),
      globals(),
      builtins(),
      polyfillNode(),
      typescript({
        tsconfig: "./tsconfig.esm.json",
        compilerOptions: { sourceRoot: '../' }
      })
    ],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{  file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts.default()],
  },
];
