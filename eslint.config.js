import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  // Ignore dist folder
  globalIgnores(['dist']),

  {
    files: ['**/*.{js,jsx}'],

    extends: [
      js.configs.recommended,
      react.configs.recommended,            // React recommended rules
      reactHooks.configs.recommended,       // Hooks recommended rules
      reactRefresh.configs.vite,            // React Refresh for Vite
    ],

    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      // Merge all plugin rules
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Custom rules
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
      'react/react-in-jsx-scope': 'off',
    },
  },
])