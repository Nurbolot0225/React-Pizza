module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": ["error", "never"],
    'react/prop-types': 'off',
    "no-unused-vars": "off",
    "prefer-const": "error",
    "no-console": "warn",
    "quotes": ["warn", "single"],
    "jsx-quotes": ["error", "prefer-double"],
    "indent": ["warn", 4],
    "react/react-in-jsx-scope": "off",
    "no-multiple-empty-lines": ["error", { "max": 1 }],
    "react-hooks/exhaustive-deps": "error",
    "object-curly-spacing": ["warn", "always"]
  },
}
