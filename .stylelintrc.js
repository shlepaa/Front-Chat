module.exports = {
	extends: [
		'stylelint-prettier/recommended',
		'stylelint-config-standard',
		'stylelint-config-rational-order',
		'stylelint-config-recommended-scss',
	],
	rules: {
		indentation: 'tab',
		'color-hex-case': null,
		'string-quotes': 'single',
		'selector-class-pattern': null,
		'selector-id-pattern': null,
		'declaration-block-no-redundant-longhand-properties': null,
		'color-function-notation': null,
		'import-notation': 'string',
		'function-no-unknown': null,
		'no-descending-specificity': null,
		'scss/no-global-function-names': null,
	},
};
