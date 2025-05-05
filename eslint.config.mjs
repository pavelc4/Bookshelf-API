import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      js
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      ecmaVersion: "latest",
      sourceType: "module"
    },
    rules: {

      "no-unused-vars": "warn",
      "no-var": "error",
      "prefer-const": "error",
      "eqeqeq": "error",


      "indent": ["error", 2],
      "quotes": ["error", "single"],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "never"],
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],


      "curly": "error",
      "default-case": "error",
      "dot-notation": "error",


      "no-console": "warn",
      "no-debugger": "error"
    }
  }
]);