// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevent
  // ion consider switching to `plugin:vue/strongly-recommended` or
  // `plugin:vue/recommended` for stricter rules.
  extends: ['plugin:vue/recommended'],
  // required to lint *.vue files
  plugins: ['vue'],
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue']
      }
    },
  },
  // add your custom rules here
  rules: {
    'linebreak-style': 0, //操作系统差异，忽略
    'global-require': 0, //暂时离不开require
    'no-use-before-define': 0, //忽略
    'no-underscore-dangle': 0, //命名允许下划线
    'no-return-assign': ['error', 'except-parens'], //除非返回时使用括号，否则不允许返回赋值
    'no-unused-expressions': 0,
    /* 主观风格,考虑到每个人编辑器配置不同，尤其是格式化风格，暂时禁用 */
    'arrow-body-style': 0,
    'no-shadow':0,
    'no-bitwise': 0,
    'object-curly-newline': 0,
    'function-paren-newline': 0,
    'no-trailing-spaces': 0, // 有些规则需要换行，与vue推荐规则有点冲突
    'object-curly-spacing': 0,
    'class-methods-use-this': 0,
    'no-mixed-operators': 0,
    // 'comma-dangle': 0,
    'object-shorthand': ['error', 'properties'], //当键与属性名称一样的时候，强制使用对象字面量简写
    'arrow-parens': ['error', 'as-needed'], //参数只有一个时，箭头函数允许省略括号
    // don't require .vue extension when importing
    // 'import/extensions': [
    //   'error',
    //   'always',
    //   {
    //     js: 'never',
    //     vue: 'never',
    //   },
    // ],
    // disallow reassignment of function parameters disallow parameter object
    // manipulation except for specific exclusions
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state', // for vuex state
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],
    // allow optionalDependencies
    // 'import/no-extraneous-dependencies': [
    //   'error',
    //   // {
    //   //   optionalDependencies: ['test/unit/index.js'],
    //   // },
    // ],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
