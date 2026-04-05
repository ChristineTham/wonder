/** @type {import('stylelint').Config} */
export default {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-html/astro',
  ],
  rules: {
    // ── Astro-specific ─────────────────────────────────────────────
    // :global() is a valid Astro/CSS Modules pseudo-class
    'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }],

    // ── SCSS library conventions ────────────────────────────────────
    // This project's SCSS design system uses underscore-prefixed functions
    // (_duration, _palette, _size, _font, _misc) and camelCase local vars
    'scss/at-function-pattern': null,
    'scss/dollar-variable-pattern': null,

    // Old-style @if (condition) with parentheses used throughout the library
    'scss/at-rule-conditional-no-parentheses': null,
    // Library uses `@if check == null` style
    'scss/at-if-no-null': null,
    // Library formatting: space/newline after @if/@else braces
    'scss/at-if-closing-brace-space-after': null,
    'scss/at-else-closing-brace-space-after': null,
    'scss/at-if-closing-brace-newline-after': null,
    'scss/at-else-closing-brace-newline-after': null,
    // Library uses Sass built-in functions (type-of) without sass: prefix
    // (scss/no-global-function-names is the correct rule name in stylelint-scss v7)
    'scss/no-global-function-names': null,

    // ── Vendor prefixes ─────────────────────────────────────────────
    // Original HTML5 UP template intentionally targets older browsers
    'property-no-vendor-prefix': null,
    'value-no-vendor-prefix': null,
    'selector-no-vendor-prefix': null,
    'at-rule-no-vendor-prefix': null,

    // ── Shorthand / value rules ─────────────────────────────────────
    // SCSS function calls in shorthand values confuse stylelint's trailing-zero check
    'shorthand-property-no-redundant-values': null,
    // rgba() is still valid CSS; the project uses it consistently
    'color-function-notation': null,
    'color-function-alias-notation': null,
    'alpha-value-notation': null,
    // Font/keyword values can include proper-noun names (Helvetica)
    // and SCSS interpolated identifiers
    'value-keyword-case': null,

    // ── Formatting ─────────────────────────────────────────────────
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'scss/dollar-variable-empty-line-before': null,
    // Template SCSS uses empty lines before // comments for readability
    'scss/double-slash-comment-empty-line-before': null,

    // ── Rules kept at error level (genuine best practices) ──────────
    // Enforce :: for pseudo-elements
    'selector-pseudo-element-colon-notation': 'double',
    // Enforce shorthand hex (#fff not #ffffff)
    'color-hex-length': 'short',
    // CSS reset uses `font: inherit` after `font-size: 100%` intentionally
    'declaration-block-no-shorthand-property-overrides': null,
  },
  overrides: [
    {
      files: ['**/*.astro'],
      customSyntax: 'postcss-html',
    },
    {
      files: ['**/*.scss'],
      customSyntax: 'postcss-scss',
    },
  ],
};

