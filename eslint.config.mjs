import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    ignores: [
      ".next/",
      "out/",
      "node_modules/",
      ".env*.local",
      ".vercel/",
      ".DS_Store",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      indent: ["error", 4, { SwitchCase: 1 }],
      "no-tabs": "error",
    },
  },
];

export default eslintConfig;
