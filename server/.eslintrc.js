module.exports = {
  "parser": "esprima",
  "extends": [
    "eslint:recommended",
    "plugin:node/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true
    }
  },
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "commonjs": true
  },
  "globals": {
    "BigInt": true
  },
  "rules": {
    /* ==================== Possible Errors ==================== */
    "no-cond-assign": "off",
    "no-console": "warn",
    "no-constant-condition": "off",
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-empty-character-class": "warn",
    "no-ex-assign": "warn",
    "no-extra-boolean-cast": "warn",
    "no-extra-parens": ["warn", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "multi-line", "enforceForArrowConditionals": false }],
    "no-extra-semi": "warn",
    "no-inner-declarations": "warn",
    "no-irregular-whitespace": ["warn", { "skipTemplates": true }],
    "no-misleading-character-class": "error",
    "no-regex-spaces": "warn",
    "no-sparse-arrays": "warn",
    "no-template-curly-in-string": "warn",
    "no-unreachable": "warn",
    "no-unsafe-finally": "warn",
    "valid-typeof": ["warn", { "requireStringLiterals": true }],

    /* ==================== Best Practices ==================== */
    "array-callback-return": "warn",
    "block-scoped-var": "warn",
    "curly": "warn",
    "default-case": "warn",
    "dot-location": ["warn", "property"],
    "dot-notation": ["warn"],
    "eqeqeq": "warn",
    "guard-for-in": "warn",
    "max-classes-per-file": "warn",
    "no-caller": "warn",
    "no-case-declarations": "warn",
    "no-else-return": "warn",
    "no-empty-function": "warn",
    "no-eq-null": "warn",
    "no-eval": "warn",
    "no-extend-native": "warn",
    "no-extra-bind": "warn",
    "no-fallthrough": "warn",
    "no-implicit-globals": "warn",
    "no-implied-eval": "warn",
    "no-invalid-this": "warn",
    "no-iterator": "warn",
    "no-labels": "warn",
    "no-lone-blocks": "warn",
    "no-loop-func": "warn",
    "no-multi-spaces": ["warn", { "ignoreEOLComments": true, "exceptions": { "VariableDeclarator": true } }],
    "no-multi-str": "warn",
    "no-new": "warn",
    "no-new-func": "warn",
    "no-new-wrappers": "warn",
    "no-octal-escape": "warn",
    "no-proto": "warn",
    "no-redeclare": "warn",
    "no-return-assign": "warn",
    "no-return-await": "warn",
    "no-script-url": "warn",
    "no-self-assign": "warn",
    "no-self-compare": "warn",
    "no-sequences": "warn",
    "no-restricted-syntax": ["warn", "SequenceExpression"],
    "no-throw-literal": "warn",
    "no-unmodified-loop-condition": "warn",
    "no-unused-expressions": "warn",
    "no-useless-call": "warn",
    "no-useless-catch": "warn",
    "no-useless-concat": "warn",
    "no-useless-escape": "warn",
    "no-useless-return": "warn",
    "no-warning-comments": ["warn", { "location": "anywhere" }],
    "no-with": "warn",
    "yoda": ["warn", "never", { "exceptRange": true }],

    /* ==================== Variables ==================== */
    "no-shadow-restricted-names": "error",
    "no-undef-init": "warn",
    "no-undefined": "error",
    "no-unused-vars": "warn",
    "no-use-before-define": ["error", { "functions": false }],

    /* ==================== Node.js and CommonJS ==================== */
    "global-require": "warn",
    "no-buffer-constructor": "warn",
    "no-mixed-requires": ["warn", { "grouping": true, "allowCall": true }],
    "no-new-require": "warn",
    "no-path-concat": "warn",
    "no-process-exit": "warn",

    /* ==================== Stylistic Issues ==================== */
    "array-bracket-newline": ["warn", "consistent"],
    "array-bracket-spacing": ["warn", "never", { "objectsInArrays": true }],
    "array-element-newline": ["warn", "consistent"],
    "block-spacing": "warn",
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "camelcase": "warn",
    "comma-style": "warn",
    "computed-property-spacing": "warn",
    "eol-last": "warn",
    "func-call-spacing": "warn",
    "indent": ["warn", 2, {
      "SwitchCase": 1,
      "VariableDeclarator": "first",
      "FunctionDeclaration": { "parameters": "first" },
      "FunctionExpression": { "parameters": "first" },
      "CallExpression": { "arguments": "first" }
    }],
    "key-spacing": ["warn", { "mode": "minimum" }],
    "keyword-spacing": "warn",
    "linebreak-style": "warn",
    "lines-around-comment": ["warn", { "allowBlockStart": true }],
    "lines-between-class-members": ["warn", "always", { "exceptAfterSingleLine": true }],
    "multiline-ternary": ["warn", "always-multiline"],
    "no-mixed-spaces-and-tabs": ["warn", "smart-tabs"],
    "no-multiple-empty-lines": ["warn", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-tabs": "warn",
    "no-trailing-spaces": "warn",
    "no-unneeded-ternary": "warn",
    "no-whitespace-before-property": "warn",
    "object-curly-spacing": ["warn", "always"],
    "object-property-newline": ["warn", { "allowAllPropertiesOnSameLine": true }],
    "operator-assignment": "warn",
    "operator-linebreak": ["warn", "before"],
    "padding-line-between-statements": ["warn",
      { "blankLine": "always", "prev": "cjs-export", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "cjs-export" },
      { "blankLine": "any", "prev": "cjs-export", "next": "cjs-export" },
      { "blankLine": "always", "prev": "cjs-import", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "cjs-import" },
      { "blankLine": "any", "prev": "cjs-import", "next": "cjs-import" },
      { "blankLine": "always", "prev": "*", "next": "class" },
      { "blankLine": "always", "prev": "class", "next": "*" },
      { "blankLine": "always", "prev": "const", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "const" },
      { "blankLine": "any", "prev": "const", "next": "const" },
      { "blankLine": "always", "prev": "export", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "export" },
      { "blankLine": "any", "prev": "export", "next": "export" },
      { "blankLine": "always", "prev": "*", "next": "function" },
      { "blankLine": "always", "prev": "directive", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "directive" },
      { "blankLine": "any", "prev": "directive", "next": "directive" },
      { "blankLine": "always", "prev": "function", "next": "*" },
      { "blankLine": "always", "prev": "import", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "import" },
      { "blankLine": "any", "prev": "import", "next": "import" },
      { "blankLine": "always", "prev": "let", "next": "*" },
      { "blankLine": "always", "prev": "*", "next": "let" },
      { "blankLine": "any", "prev": "let", "next": "let" },
      { "blankLine": "always", "prev": "*", "next": "return" }
    ],
    "prefer-object-spread": "warn",
    "quote-props": ["error", "as-needed", { "keywords": true }],
    "quotes": ["warn", "single"],
    "semi": "warn",
    "semi-spacing": "warn",
    "semi-style": "warn",
    "space-before-blocks": "warn",
    "space-before-function-paren": ["warn", { "named": "never" }],
    "space-in-parens": "warn",
    "space-infix-ops": ["warn", { "int32Hint": true }],
    "space-unary-ops": "warn",
    "spaced-comment": ["warn", "always", {
      "line": { "markers": ["/"], "exceptions": ["/", "=", "-"] },
      "block": { "exceptions": ["*", "=", "-"], "balanced": true }
    }],
    "switch-colon-spacing": "warn",
    "template-tag-spacing": "warn",

    /* ==================== ECMAScript 6 ==================== */
    "arrow-body-style": "warn",
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": "warn",
    "generator-star-spacing": ["warn", { "before": false, "after": true, "method": "both" }],
    "no-class-assign": "warn",
    "no-confusing-arrow": ["warn", { "allowParens": true }],
    "no-dupe-class-members": "warn",
    "no-duplicate-imports": ["warn"],
    "no-useless-computed-key": "warn",
    "no-useless-constructor": "warn",
    "no-useless-rename": "warn",
    "no-var": "warn",
    "object-shorthand": ["warn", "always", { "avoidQuotes": true, "avoidExplicitReturnArrows": true }],
    "prefer-arrow-callback": ["warn", { "allowNamedFunctions": true }],
    "prefer-const": ["warn", { "destructuring": "all" }],
    "prefer-numeric-literals": "warn",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "require-yield": "warn",
    "rest-spread-spacing": "warn",
    "template-curly-spacing": "warn",
    "yield-star-spacing": "warn",

    /* ==================== Node.js ==================== */
    "node/no-extraneous-import": "warn",
    "node/no-extraneous-require": "warn",
    "node/no-missing-import": "error",
    "node/no-unpublished-import": "warn",
    "node/no-unpublished-require": "warn",
    "node/no-unsupported-features/es-syntax": "off",
    "node/process-exit-as-throw": "error",
    "node/no-deprecated-api": "warn",
    "node/exports-style": "warn",
    "node/prefer-global/buffer": "warn",
    "node/prefer-global/console": "warn",
    "node/prefer-global/process": "warn",
    "node/prefer-global/text-decoder": "warn",
    "node/prefer-global/text-encoder": "warn",
    "node/prefer-global/url-search-params": "warn",
    "node/prefer-global/url": "warn"
  }
};
