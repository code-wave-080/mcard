import globals from 'globals'
import tseslint from 'typescript-eslint'
import { FlatCompat } from '@eslint/compat'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const compat = new FlatCompat({
    baseDirectory: __dirname,
})

export default [
    ...tseslint.configs.recommended,
    ...compat.extends('react-app', 'react-app/jest'),

    {
        files: ['src/**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: { jsx: true },
            },
        },
        rules: {
            'prettier/prettier': 'error',
        },
    },
]