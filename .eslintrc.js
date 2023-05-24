module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    parser: '@typescript-eslint/parser',
    tsconfigRootDir: __dirname,
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
    'sergey-kotenko-plugin',
    'unused-imports',
  ],
  rules: {
    // 'react/jsx-indent': [2, 2],
    // 'react/jsx-indent-props': [2, 2],
    'unused-imports/no-unused-imports': 'error',
    // indent: [2, 2],
    semi: 'off', // точка с запятой
    '@typescript-eslint/semi': 'off', // точка с запятой
    'react/function-component-definition': [
      // вызов стрелочной функции вместо function
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],

    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [
      2,
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/comma-dangle': 'off',
    'react/require-default-props': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'warn',
    'no-shadow': 'off',
    'react/prop-types': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    'i18next/no-literal-string': [
      'error',
      {
        ignoreAttribute: [
          'data-testid',
          'to',
          'name',
          'target',
          'direction',
          'justify',
          'align',
          'gap',
          'titleTag',
          'role',
          'as',
          'refName',
          'border',
          'feature',
          'color',
          'variant',
        ],
        markupOnly: true,
      },
    ],
    'linebreak-style': 0,
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 140,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'react/no-array-index-key': 'off',
    //new
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'sergey-kotenko-plugin/path-checker': ['error', { alias: '@' }],
    'sergey-kotenko-plugin/layer-imports': [
      'error',
      {
        alias: '@',
        ignoreImportPatterns: ['**/StoreProvider', '**/testing'],
      },
    ],
    'sergey-kotenko-plugin/public-api-imports': [
      'error',
      {
        alias: '@',
        testFilesPatterns: [
          '**/*.test.*',
          '**/*.story',
          '**/StoreDecorator.tsx',
        ],
      },
    ],
    'import/order': 'off',
    'react/no-unstable-nested-components': 'warn',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
    __PROJECT__: true,
  },
  overrides: [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
        'max-len': 'off',
      },
    },
  ],
}
