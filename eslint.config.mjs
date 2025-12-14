import eslint from "@eslint/js"
import nextVitals from "eslint-config-next/core-web-vitals"
import prettier from "eslint-config-prettier/flat"
import jsxA11y from "eslint-plugin-jsx-a11y"
import perfectionist from "eslint-plugin-perfectionist"
import react from "eslint-plugin-react"
import reactCompiler from "eslint-plugin-react-compiler"
import reactHooks from "eslint-plugin-react-hooks"
import tailwindcss from "eslint-plugin-tailwindcss"
import { defineConfig } from "eslint/config"
import tseslint from "typescript-eslint"

const ignoresConfig = defineConfig([
	{
		ignores: [
			"node_modules/",
			".next/**",
			"out/**",
			"build/**",
			"public/",
			".vscode/",
			"next-env.d.ts",
		],
		name: "project/ignores",
	},
])

const perfectionistConfig = defineConfig([
	{
		name: "project/perfectionist",
		...perfectionist.configs["recommended-natural"],
	},
])

const eslintConfig = defineConfig([
	{
		name: "project/javascript-recommended",
		...eslint.configs["recommended"],
	},
])

const typescriptConfig = defineConfig([
	...tseslint.configs["strict"],
	{
		name: "project/typescript",
	},
])

const nextjsConfig = defineConfig([
	...nextVitals,
	{
		name: "project/next",
	},
])

const reactConfig = defineConfig([
	{
		name: "project/react",
		...react.configs.flat["recommended"],
		...react.configs.flat["jsx-runtime"],
		...reactHooks.configs["flat"]["recommended-latest"],
		...jsxA11y.flatConfigs["recommended"],
		...reactCompiler.configs["recommended"],
	},
])

const tailwindConfig = defineConfig([
	...tailwindcss.configs["flat/recommended"],
	{
		name: "project/tailwindcss",
		rules: {
			"tailwindcss/classnames-order": "off",
		},
		settings: {
			tailwindcss: {
				callees: ["cva", "cn", "clsx", "twMerge", "tv"],
				config: `${import.meta.dirname}/src/1_app/styles/globals.css`,
				cssFiles: ["app/**/*.css", "src/**/*.css"],
			},
		},
	},
])

export default defineConfig([
	...ignoresConfig,
	...perfectionistConfig,
	...eslintConfig,
	...typescriptConfig,
	...nextjsConfig,
	...reactConfig,
	...tailwindConfig,
	prettier,
])
