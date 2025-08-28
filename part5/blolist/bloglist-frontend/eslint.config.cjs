module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'double'],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    indent: ['error', 2],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off'
  },
  settings: {
    react: { version: 'detect' },
  },
};
