// https://prettier.io/docs/en/options.html
module.exports = {
  trailingComma: 'es5',
  bracketSpacing: true,
  tabWidth: 2,
  semi: true,
  jsxBracketSameLine: true,
  jsxSingleQuote: true,
  useTabs: false,
  singleQuote: true,
  arrowParens: 'always',
  printWidth: 120,
  overrides: [
    {
      files: 'Routes.js',
      options: {
        printWidth: 200,
      },
    },
  ],
};
