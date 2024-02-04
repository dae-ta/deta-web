module.exports = {
  extends: ['prettier', 'next', 'plugin:prettier/recommended'],
  plugins: ['@typescript-eslint'],
  rules: {
    // prettier
    'prettier/prettier': ['error'],
    // TypeScript
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    '@typescript-eslint/no-explicit-any': 'warn',
  },
};
