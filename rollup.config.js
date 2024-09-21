import resolve from "rollup-plugin-node-resolve";
import { terser } from "rollup-plugin-terser";

const output = (file, format, name) => ({
  file,
  format,
  name,
});

export default [
  {
    input: "index.js",
    output: [
      output("dist/index.cjs", "cjs"),
      output("dist/index.js", "es"),
      output("dist/index.browser.js", "iife", "consoleBg"),
    ],
    plugins: [resolve(), terser()],
  },
];
