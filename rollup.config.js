import typescript from "rollup-plugin-typescript";

export default {
  input: "./src/BeforeRender.ts",
  output: {
    file: "dist/before-render.js",
    format: "esm"
  },
  plugins: [typescript()]
};
