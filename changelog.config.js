/**
 * @description git-cz 相关配置文件，用于交互式引导用户 提交符合规范的 commit 信息
 */
module.exports = {
  disableEmoji: true,
  list: [
    'feat',
    'fix',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'revert',
    'build',
  ],
  maxMessageLength: 128,
  minMessageLength: 3,
  questions: ['type', 'subject'],
  types: {
    feat: {
      description: '功变更更',
      emoji: '🤖',
      value: 'feat',
    },
    fix: {
      description: 'bug修复',
      emoji: '🐛',
      value: 'fix',
    },
    docs: {
      description: '文档变更',
      emoji: '✏️',
      value: 'docs',
    },
    style: {
      description: '纯样式变更',
      emoji: '🎸',
      value: 'style',
    },
    refactor: {
      description: '重构',
      emoji: '🎡',
      value: 'refactor',
    },
    perf: {
      description: '性能提升',
      emoji: '⚡️',
      value: 'perf',
    },
    test: {
      description: '单元测试',
      emoji: '🏹',
      value: 'test',
    },
    revert: {
      description: '回滚',
      emoji: '💄',
      value: 'revert',
    },
    build: {
      description: '构建相关变更',
      emoji: '💍',
      value: 'build',
    },
  },
}
