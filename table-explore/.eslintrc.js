module.exports = {
  globals: {
    $: true,
    jQuery: true,
    Signature: true,
    $workflow: true,
    workbox: true,
    HS_SOURCE_VERSION: true
  },
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended'],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 校验 v-for 是否有v-bind:key
    'vue/require-v-for-key': 'off',
    // 未使用的变量 不提示
    'no-unused-vars': 'off',
    //就是这一句，禁用import和require必须出现在顶层作用域的验证规则
    'global-require': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
