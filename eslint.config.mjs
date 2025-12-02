import eslintPlugin from "@eslint/js"
import nextPlugin from "@next/eslint-plugin-next"
import { defineConfig } from "eslint/config"
import prettier from "eslint-config-prettier/flat"
import importPlugin from "eslint-plugin-import"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import reactPlugin from "eslint-plugin-react"
import reactCompilerPlugin from "eslint-plugin-react-compiler"
import reactHooksPlugin from "eslint-plugin-react-hooks"
import tailwindcssPlugin from "eslint-plugin-tailwindcss"
import { configs as tseslintConfigs } from "typescript-eslint"

// Global ignores configuration
// Must be in its own config object to act as global ignores
const ignoresConfig = defineConfig([
	{
		name: "project/ignores",
		ignores: [".next/", "node_modules/", "public/", ".vscode/", "next-env.d.ts"],
	},
])

const importConfig = defineConfig([
	{
		name: "project/imports",
		plugins: {
			import: importPlugin,
		},
		rules: {
			"import/order": [
				"warn",
				{
					groups: [
						["builtin", "external"],
						["internal", "parent", "sibling", "index"],
						"object",
						"type",
					],
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			],
		},
	},
])

// ESLint recommended rules for JavaScript/TypeScript
const eslintConfig = defineConfig([
	{
		name: "project/javascript-recommended",
		files: ["**/*.{js,mjs,ts,tsx}"],
		...eslintPlugin.configs.recommended,
	},
])

// TypeScript configuration with type-checked rules
const typescriptConfig = defineConfig([
	{
		name: "project/typescript-strict",
		files: ["**/*.{ts,tsx,mjs}"],
		extends: [
			...tseslintConfigs.strictTypeChecked,
			...tseslintConfigs.stylisticTypeChecked,
		],
		languageOptions: {
			parserOptions: {
				// Automatically detects tsconfig.json
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
				ecmaFeatures: {
					jsx: true,
				},
				warnOnUnsupportedTypeScriptVersion: true,
			},
		},
		rules: {
			// Disable rules that conflict with TypeScript's own error checking
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/triple-slash-reference": "off",
			// disabled next rule due to bug:
			// https://github.com/typescript-eslint/typescript-eslint/issues/11732
			// https://github.com/eslint/eslint/issues/20272
			"@typescript-eslint/unified-signatures": "off",
			// Allow ts-expect-error and ts-ignore with descriptions
			"@typescript-eslint/ban-ts-comment": [
				"error",
				{
					"ts-expect-error": "allow-with-description",
					"ts-ignore": "allow-with-description",
					"ts-nocheck": false,
					"ts-check": false,
					minimumDescriptionLength: 3,
				},
			],
		},
	},
	{
		name: "project/javascript-disable-type-check",
		files: ["**/*.{js,mjs,cjs}"],
		...tseslintConfigs.disableTypeChecked,
	},
])

// React and Next.js configuration
const reactConfig = defineConfig([
	{
		name: "project/react-next",
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			"jsx-a11y": jsxA11yPlugin,
			"@next/next": nextPlugin,
		},
		rules: {
			// React recommended rules
			...reactPlugin.configs.recommended.rules,
			...reactPlugin.configs["jsx-runtime"].rules,
			// React Hooks rules (use recommended-latest for latest features)
			...reactHooksPlugin.configs["recommended-latest"].rules,
			// Accessibility rules (strict mode for better a11y)
			...jsxA11yPlugin.configs.strict.rules,
			// Next.js recommended rules
			...nextPlugin.configs.recommended.rules,
			// Next.js Core Web Vitals rules
			...nextPlugin.configs["core-web-vitals"].rules,

			// Customizations for modern React/Next.js
			"react/react-in-jsx-scope": "off", // Not needed in Next.js
			"react/prop-types": "off", // Use TypeScript instead
			"react/no-unknown-property": "off", // Conflicts with custom attributes
			"react/jsx-no-target-blank": "off", // Next.js handles this

			// Fine-tuned accessibility rules
			"jsx-a11y/alt-text": [
				"warn",
				{
					elements: ["img"],
					img: ["Image"], // Next.js Image component
				},
			],
			"jsx-a11y/media-has-caption": "warn",
			"jsx-a11y/aria-props": "warn",
			"jsx-a11y/aria-proptypes": "warn",
			"jsx-a11y/aria-unsupported-elements": "warn",
			"jsx-a11y/role-has-required-aria-props": "warn",
			"jsx-a11y/role-supports-aria-props": "warn",
		},
		settings: {
			react: {
				version: "detect", // Automatically detect React version
			},
		},
	},
])

// Tailwind CSS configuration
const tailwindConfig = defineConfig([
	{
		name: "project/tailwindcss",
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			tailwindcss: tailwindcssPlugin,
		},
		rules: {
			// Class name ordering and validation
			"tailwindcss/classnames-order": "off",
			"tailwindcss/enforces-negative-arbitrary-values": "warn",
			"tailwindcss/enforces-shorthand": "warn",
			"tailwindcss/no-contradicting-classname": "warn",
			"tailwindcss/no-unnecessary-arbitrary-value": "warn",
			"tailwindcss/no-custom-classname": "warn",
			"tailwindcss/migration-from-tailwind-2": "off",
		},
		settings: {
			tailwindcss: {
				callees: ["cva", "cn", "clsx", "twMerge", "tv"],
				// Point to your Tailwind config file
				config: `${import.meta.dirname}/src/1_app/styles/globals.css`,
				// CSS files to analyze for Tailwind classes
				cssFiles: ["app/**/*.css", "src/**/*.css"],
			},
		},
	},
])

// React Compiler configuration (experimental)
const reactCompilerConfig = defineConfig([
	{
		name: "project/react-compiler",
		files: ["**/*.{jsx,tsx}"],
		plugins: {
			"react-compiler": reactCompilerPlugin,
		},
		rules: {
			"react-compiler/react-compiler": "error",
		},
	},
])

// Export the complete configuration
// Order matters: ignores first, then general configs, then specific overrides
export default defineConfig([
	...ignoresConfig,
	...importConfig,
	...eslintConfig,
	...typescriptConfig,
	...reactConfig,
	...tailwindConfig,
	...reactCompilerConfig,
	prettier,
])

// import { defineConfig, globalIgnores } from "eslint/config"
// import nextVitals from "eslint-config-next/core-web-vitals"
// import nextTs from "eslint-config-next/typescript"
// import prettier from "eslint-config-prettier/flat"
// import pluginImport from "eslint-plugin-import"

// const eslintConfig = defineConfig([
// 	pluginImport.flatConfigs.recommended,
// 	...nextVitals,
// 	...nextTs,
// 	prettier,
// 	globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
// ])

// export default eslintConfig
