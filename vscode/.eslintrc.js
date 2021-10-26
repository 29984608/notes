module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: ['standard', 'plugin:vue/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2021,
    parser: 'babel-eslint',
    sourceType: 'module',
  },
  plugins: ['vue'],
  globals: {},
  rules: {
    'prettier/prettier': 'error',
    'arrow-body-style': 0,
    'arrow-parens': ['error', 'always'],
    'comma-dangle': 0,
    'global-require': 0,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    indent: 'error',
    'template-curly-spacing': ['error', 'never'],
    'no-continue': 0,
    'no-debugger': 'warn',
    'no-loop-func': 0,
    'no-mixed-operators': 0,
    'no-plusplus': 0,
    'no-restricted-syntax': 0,
    'no-underscore-dangle': 0,
    'no-shadow': 0,
    'no-bitwise': 0,
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: true,
        allowTernary: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],
    'no-restricted-globals': [
      'error',
      {
        name: 'event',
        message: 'Use local parameter instead.',
      },
    ],
    'max-len': [
      'error',
      120,
      {
        ignoreComments: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
        ignoreTrailingComments: true,
      },
    ],
    'max-lines': [
      'error',
      {
        max: 800,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-template-curly-in-string': 0,
    'object-curly-newline': [
      'error',
      {
        consistent: true,
        multiline: true,
      },
    ],
    'prefer-destructuring': [
      'warn',
      {
        AssignmentExpression: {
          array: false,
          object: false,
        },
        VariableDeclarator: {
          array: false,
          object: true,
        },
      },
    ],
    'quote-props': 'error',
    semi: 0,
    'space-before-function-paren': 0,
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          exceptions: ['*'],
        },
      },
    ],
    'vue/attributes-order': 'error',
    'vue/html-self-closing': 'error',
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 4,
      },
    ],
    'vue/no-v-html': 0,
    'vue/singleline-html-element-content-newline': 0,
    'vue/no-mutating-props': 0,
  },
};
