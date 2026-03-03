import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

export default {
  input: "src/uv-card.ts",
  output: {
    file: "dist/uv-card.js",
    format: "es",
    sourcemap: false,
  },
  plugins: [
    resolve({ browser: true }),
    typescript({ tsconfig: "./tsconfig.json" }),
    terser({ format: { comments: false } }),
  ],
};
