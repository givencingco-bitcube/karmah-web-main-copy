/** @type {import('stylelint').Config} */
/* eslint import/no-anonymous-default-export: [0] */
export default {
  extends: 'stylelint-config-recommended',
  ignoreFiles: ['./dist/**/*', './node_modules/**/*'],
  rules: {
    'max-nesting-depth': 4,
    'color-hex-length': null,
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind', 'media', 'apply', 'screen'],
      },
    ],
  },
};
