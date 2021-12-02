module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "no-console": "off",
    "no-alert": "off",
    "max-len": "off",
    "no-unused-vars": "off",
    "default-case": ["error", { commentPattern: "^skip\\sdefault" }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": ["error", { props: false }],
    "no-use-before-define": ["error", { functions: false }],
  },
  plugins: ["jest"],
};
