# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

個人ポートフォリオサイト。Vite + React 19 + TypeScript の静的 SPA で、GitHub Pages (https://obaya884.github.io/portfolio/) に公開している。表示テキストはすべて日本語。

2026-07 に Create React App から Vite へ移行し、あわせて TypeScript 化した。

## コマンド

パッケージマネージャは npm。

```
npm install
npm run dev        # 開発サーバ http://localhost:5173
npm run build      # dist/ に本番ビルド
npm run preview    # ビルド結果をローカル配信
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
```

ユニットテストは無い。飾りコンテンツのみの静的サイトなので意図的に置いていない。品質ゲートは typecheck と lint で、どちらも `.github/workflows/deploy.yml` がデプロイ前に実行する。**片方でも落ちるとデプロイされない。**

デプロイは master への push で自動実行される。手動デプロイのコマンドは無い。

## アーキテクチャ

### ルーティングは存在しない

縦スクロール1ページ構成。`App.tsx` が `Sidebar` と4セクションを並べるだけで、ルータは使っていない。画面遷移は素の `<a href="#about">` によるアンカースクロールで、滑らかさは `index.css` の `html { scroll-behavior: smooth }` が担う。

セクションの順序と ID: `top` → `about` → `experience` → `product`。`Sidebar` はセクション名を小文字化してアンカーを組み立てるので、**セクション名と ID がずれるとリンクが無言で壊れる**。

`vite.config.ts` の `base: "./"` は GitHub Pages の `/portfolio/` サブパス配信に必要。外すと本番でアセットが 404 になる。

### ディレクトリ構成

```
src/
  main.tsx           エントリポイント
  App.tsx
  index.css          グローバルスタイル
  components/        関数コンポーネント + 同名の .module.css
  data/              表示コンテンツ（型付き）
  assets/            画像。import して URL 文字列として使う
```

### コンテンツの追加・変更は data/ だけで済む

`data/experiences.ts` と `data/products.ts` が表示内容を型付きの配列として持つ。**画像もアイコンもこの配列の中にある**ので、項目の追加はここ1か所を編集するだけで完結する。コンポーネント側に名前でマッピングする分岐は無い。

`Product` 型の `link` は optional。未公開でストアリンクが無い作品はこれを省略する（`Sireee` と `SHABOM`）。カードは `link` が無ければリンク要素ごと描画しないので、空リンクは生まれない。

### Section と Card

`Experience` と `Product` は構造が同じなので、共通の `Section`（全画面の色付きセクション + 見出し）と `Card`（画像・タイトル・サブタイトル・説明・任意のリンク）を組み合わせて作る。カードのグリッド幅だけ各セクションが自前で持つ（Experience は 90%、Product は 1300px）。

`About` はカードグリッドではなく見出しの余白も違うので、`Section` は使わず独立している。

### スタイリングは CSS Modules

コンポーネントごとに `Xxx.module.css` を隣に置き、`import styles from "./Xxx.module.css"` して `className={styles.foo}` で当てる。Vite が標準サポートしているのでビルド設定は不要。CSS-in-JS のランタイムは無い。

**動的な値は CSS カスタムプロパティで渡す。** セクションとカードの背景色だけが動的で、`style={{ "--card-background-color": color } as CSSProperties}` のように inline style で変数を注入し、CSS 側は `var(--card-background-color)` を参照する。TypeScript はカスタムプロパティを `CSSProperties` として認めないのでキャストが要る。

グローバルなスタイル（`body` など）は `src/index.css` に置く。

CSS ネストは使わず、フラットなセレクタで書いている（`.link:hover path` など）。

### 書体は Jost をセルフホスト

見出し・サイドバー・プロフィールは `"Jost Variable", sans-serif`。`main.tsx` の `import "@fontsource-variable/jost"` で読み込む。

以前は `Futura` を指定していたが、Futura は macOS/iOS にしか無いため Windows/Android では素の `sans-serif` にフォールバックし、幾何学サンセリフという書体の性格が失われていた。Jost は Futura を範に作られたオープンソース書体で、全環境で同じ見た目になる。

**外部 CDN は使わずセルフホストすること。** このサイトはサードパーティへのリクエストがゼロで、それを保つのは意図的（プライバシーと表示速度の両面）。以前あった Google Fonts の `@import` は同じ理由で削除した。

カード本文だけは元から `sans-serif` 指定で、Jost にはしていない。

### FontAwesome

アイコンは**使うものだけ個別に import してオブジェクトで渡す**（`icon={faGithub}`）。`library.add()` と文字列指定（`icon={["fab", "github"]}`）は使わない。全アイコンを読み込むとバンドルが 400KB → 2MB に膨らむ。

v7 でリネームされたものがある点に注意（`facebook-square` → `square-facebook`、`external-link-alt` → `up-right-from-square`）。文字列指定をやめたのはこれで無言に壊れたため。

### パーティクル演出

`Top.tsx` が tsparticles で背景の粒子アニメーションを描く。設定値は particles.js 由来の見た目を再現するために明示指定してあるので、消すと別物になる。

`fullScreen: { enable: false }` は必須。tsparticles の既定は `position: fixed` の全画面キャンバスで、外すと粒子が下のセクションにまではみ出す。

`ParticlesProvider` の `init` コールバックは参照が安定していないと例外を投げるため、モジュールスコープに置いてある。
