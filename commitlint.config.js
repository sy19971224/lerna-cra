/**
 * @description commitlint-cli 的配置文件，在 commit-msg 钩子中触发，对commit信息做拦截性校验
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 128],
  },
}
