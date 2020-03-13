module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"vue/html-self-closing": [
			"error",
			{
				"html": {
					"void": "never",
					"normal": "always",
					"component": "always"
				},
				"svg": "always",
				"math": "always"
			}
		],
		"quotes": [
			2,
			"single",
			{
				"avoidEscape": true
			}
		],
		"linebreak-style": ["error", "unix"]
	}
};
