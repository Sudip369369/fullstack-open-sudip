module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules: {
    // General JS rules
    "semi": ["error", "always"],
    "quotes": ["error", "double"],
    "no-unused-vars": ["warn", { "argsIgnorePattern": "^_" }],
    "indent": ["error", 2],
    
    // React specific rules
    "react/react-in-jsx-scope": "off", // React 17+ doesn’t need React import
    "react/prop-types": "off",         // You can use TypeScript for props if needed
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
