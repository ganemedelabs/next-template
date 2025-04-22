// See https://eslint.org/docs/latest/use/configure/configuration-files for more about configuration files.

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
// @ts-ignore
import _import from "eslint-plugin-import";
import prettier from "eslint-plugin-prettier";
import tsParser from "@typescript-eslint/parser";
import { Linter } from "eslint";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import jsxA11Y from "eslint-plugin-jsx-a11y";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all,
});

const config = [
    {
        ignores: ["node_modules", "dist", ".next", ".vercel", "package-lock.json"],
    },
    ...fixupConfigRules(
        compat.extends(
            "eslint:recommended",
            "next/core-web-vitals",
            "next/typescript",
            "plugin:import/errors",
            "plugin:jsx-a11y/recommended",
            "plugin:prettier/recommended"
        )
    ),
    {
        plugins: {
            "jsx-a11y": fixupPluginRules(jsxA11Y),
            import: fixupPluginRules(_import),
            prettier: fixupPluginRules(prettier),
        },
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            parser: tsParser,
            ecmaVersion: "latest",
            sourceType: "module",
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            indent: ["warn", 4],
            quotes: ["warn", "double"],
            "react/prop-types": "off",
            "react/jsx-uses-vars": "warn",
            "react/react-in-jsx-scope": "off",
            "react/jsx-uses-react": "off",
            "no-unused-vars": "warn",
            "no-console": "off",
            "react/jsx-filename-extension": "off",
            "react/jsx-no-bind": "off",
            "jsx-a11y/no-autofocus": "off",
            "import/no-extraneous-dependencies": "off",
            "@typescript-eslint/ban-ts-comment": "off",
            "prettier/prettier": ["error", { endOfLine: "auto" }],
        },
    },
] satisfies Linter.Config[];

export default config;
