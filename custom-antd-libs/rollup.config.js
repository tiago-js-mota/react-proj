import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import postcssImport from 'postcss-import';
import dts from "rollup-plugin-dts";

const packageJson = require("./package.json");

const EXTERNALS = [
  ...Object.keys(packageJson.devDependencies),
  ...Object.keys(packageJson.peerDependencies),
]


export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        plugins: [postcssImport()],
        extract: true,
        modules: true,
        use: ['sass']
      }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
    external: [...EXTERNALS, /\.(css|less|scss)$/],
  },
];