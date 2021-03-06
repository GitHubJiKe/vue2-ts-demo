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
    "subject"
    // "breaking",
    // "issues"
    // "lerna"
  ],
  scopes: [
    "Component",
    "Store",
    "Pages",
    "Utils",
    "Routes",
    "Styles",
    "Configs"
  ],
  types: {
    chore: {
      description: "å¶ä»ä¿®æ¹",
      emoji: "ð¤",
      value: "chore"
    },
    ci: {
      description: "åå¸æµç¨",
      emoji: "ð¡",
      value: "ci"
    },
    docs: {
      description: "æ´æ°ææ¡£",
      emoji: "âï¸",
      value: "docs"
    },
    feat: {
      description: "æ°åè½",
      emoji: "ð¸",
      value: "feat"
    },
    fix: {
      description: "Bugä¿®å¤",
      emoji: "ð",
      value: "fix"
    },
    perf: {
      description: "ä¼å+æ§è½up",
      emoji: "â¡ï¸",
      value: "perf"
    },
    refactor: {
      description: "éæ",
      emoji: "ð¡",
      value: "refactor"
    },
    release: {
      description: "åå¸æ°ç",
      emoji: "ð¹",
      value: "release"
    },
    style: {
      description: "æ ·å¼ä¿®æ¹",
      emoji: "ð",
      value: "style"
    },
    test: {
      description: "è¡¥åæµè¯",
      emoji: "ð",
      value: "test"
    }
  }
};
