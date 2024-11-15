import prettier from "eslint-config-prettier";
import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import globals from "globals";
import ts from "typescript-eslint";

export default ts.config(
    js.configs.recommended,
    ...ts.configs.recommended,
    ...astro.configs.recommended,
    ...astro.configs["jsx-a11y-recommended"],
    prettier,
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
            },
        },
    },
    {
        files: ["**/*.astro"],

        languageOptions: {
            parserOptions: {
                parser: ts.parser,
            },
        },
    },
    {
        ignores: ["dist/"],
    },
);
