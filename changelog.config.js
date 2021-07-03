module.exports = {
  disableEmoji: false,
  list: [
    "test",
    "feat",
    "fix",
    "chore",
    "docs",
    "refactor",
    "style",
    "ci",
    "perf"
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    "type",
    "scope",
    "subject",
    "body",
    // "breaking",
    "issues"
    // "lerna"
  ],
  scopes: [],
  types: {
    chore: {
      description: "其他修改",
      emoji: "🤖",
      value: "chore"
    },
    ci: {
      description: "发布流程",
      emoji: "🎡",
      value: "ci"
    },
    docs: {
      description: "更新文档",
      emoji: "✏️",
      value: "docs"
    },
    feat: {
      description: "新功能",
      emoji: "🎸",
      value: "feat"
    },
    fix: {
      description: "Bug修复",
      emoji: "🐛",
      value: "fix"
    },
    perf: {
      description: "优化+性能up",
      emoji: "⚡️",
      value: "perf"
    },
    refactor: {
      description: "重构",
      emoji: "💡",
      value: "refactor"
    },
    release: {
      description: "发布新版",
      emoji: "🏹",
      value: "release"
    },
    style: {
      description: "样式修改",
      emoji: "💄",
      value: "style"
    },
    test: {
      description: "补充测试",
      emoji: "💍",
      value: "test"
    }
  }
};
