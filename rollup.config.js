import typescript from "rollup-plugin-typescript2";

export default {
  input: "./src/Mixins.ts",
  output: {
    file: "dist/mixins.js",
    format: "esm"
  },
  plugins: [typescript()]
};
