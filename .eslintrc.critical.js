module.exports = {
  extends: './.eslintrc.js',
  // These rules are not enforced by CI but errors show up in the editor
  // The goal is to progressively apply them as we encounter the errors in the existing code
  rules: {
    '@typescript-eslint/ban-types': 'off',
    'prefer-const': 'off',
  },
};
