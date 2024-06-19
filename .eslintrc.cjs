module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "import", "react", "jsx-a11y"],
  rules: {
    // Wymusza używanie funkcji strzałkowych zamiast tradycyjnych funkcji
    "prefer-arrow-callback": "error",

    // Wymusza używanie ciała funkcji strzałkowych tylko wtedy, gdy jest to konieczne
    "arrow-body-style": ["error", "as-needed"],

    // Wymusza deklarowanie funkcji jako wyrażenia, pozwalając na używanie funkcji strzałkowych
    "func-style": ["error", "expression", { allowArrowFunctions: true }],

    // Wyłącza regułę wymagającą importowania React w plikach JSX (od React 17 nie jest to konieczne)
    "react/react-in-jsx-scope": "off",

    // Wymusza eksportowanie komponentów z funkcją tylko-export-components z możliwością eksportowania stałych
    "react-refresh/only-export-components": [
      "error",
      { allowConstantExport: true },
    ],

    // Zakazuje używania eksportów domyślnych
    "import/no-default-export": ["error"],

    // Wymaga nowej linii po importach
    "import/newline-after-import": "error",

    // Zakazuje duplikatów importów
    "import/no-duplicates": "error",

    // Wymusza, aby importy były na początku pliku
    "import/first": "error",
    // Wymusza określoną kolejność grup importów
    "import/order": [
      "error",
      {
        groups: [
          "builtin", // Wbudowane moduły Node.js (fs, path)
          "external", // Zewnętrzne moduły npm
          "internal", // Moduły wewnętrzne
          ["sibling", "parent"], // Moduły z katalogów nadrzędnych i podrzędnych
          "index", // Moduły z katalogu głównego
          "object", // Importy obiektów
          "type", // Importy typów
        ],
        // Nie wstawiaj nowych linii między grupami importów
        "newlines-between": "never",
        // Alfabetyczne sortowanie importów, bez uwzględniania wielkości liter
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  settings: {
    // Automatyczne wykrywanie wersji React
    react: {
      version: "detect",
    },
  },
  overrides: [
    {
      // Dla plików deklaracji TypeScript i konfiguracji Vite
      files: ["declarations.d.ts", "vite.config.ts"],
      rules: {
        // Wyłącza zakaz używania eksportów domyślnych w tych plikach
        "import/no-default-export": "off",
      },
    },
  ],
};
