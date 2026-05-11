# CLAUDE.md

このファイルは、リポジトリ内のコードを操作する際に Claude Code (claude.ai/code) へのガイダンスを提供します。

## コマンド

```bash
npm run dev      # HMR付き開発サーバーを起動（Vite）
npm run build    # 型チェック（tsc -b）後に本番用バンドルを生成
npm run lint     # ESLint を実行
npm run preview  # 本番ビルドをローカルでプレビュー
```

## アーキテクチャ

React 19 + TypeScript + Vite の最小構成アプリです（公式 Vite テンプレートから生成）。

- `src/main.tsx` — エントリーポイント。React StrictMode で `<App />` を `#root` にマウントする
- `src/App.tsx` — ルートコンポーネント。現時点ではすべてのアプリロジックがここに集約されている
- `src/index.css` / `src/App.css` — グローバルスタイルとコンポーネントスコープのスタイル
- `public/icons.svg` — SVG スプライトシート。`<use href="/icons.svg#<id>">` パターンでアイコンを参照する

## TypeScript 設定

`tsconfig.app.json` は ES2023 をターゲットとし、未使用変数の厳格チェック（`noUnusedLocals`、`noUnusedParameters`）が有効です。コンパイラは bundler モジュール解決を使用しており、ローカルファイルのインポート時に `.tsx` 拡張子が必要です。

## ESLint

`eslint.config.js` で `typescript-eslint`、`eslint-plugin-react-hooks`、`eslint-plugin-react-refresh` を使用して設定されています。本番向けに型情報を考慮した厳格なルールを有効にする場合は、README の `recommendedTypeChecked` アップグレード手順を参照してください。
