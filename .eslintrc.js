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
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'i18next', 'react-hooks'],
  rules: {
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    indent: [2, 2],
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
        ignoreAttribute: ['data-testid', 'to', 'name'],
        markupOnly: true,
      },
    ],
    'linebreak-style': 0,
    'max-len': [
      'error',
      {
        ignoreComments: true,
        code: 120,
      },
    ],
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'error',
    'no-param-reassign': 'off',
    'no-undef': 'off',
  },
  globals: {
    __IS_DEV__: true,
    __API__: true,
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
