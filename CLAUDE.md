# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

個人ポートフォリオサイト。Vite + React 19 製の静的 SPA で、GitHub Pages (https://obaya884.github.io/portfolio/) に公開している。表示テキストはすべて日本語。

2026-07 に Create React App から Vite へ移行した。

## コマンド

パッケージマネージャは npm。

```
npm install
npm run dev        # 開発サーバ http://localhost:5173
npm run build      # dist/ に本番ビルド
npm run preview    # ビルド結果をローカル配信
```

テストとリンタは無い。飾りコンテンツのみの静的サイトなので意図的に置いていない。

デプロイは master への push で `.github/workflows/deploy.yml` が自動実行する。手動デプロイのコマンドは無い。

## アーキテクチャ

### ルーティングは存在しない

縦スクロール1ページ構成。`App.jsx` が `Sidebar` と4セクションを並べるだけで、ルータは使っていない。画面遷移は素の `<a href="#about">` によるアンカースクロールで、滑らかさは `index.css` の `html { scroll-behavior: smooth }` が担う。

セクションの順序と ID: `top` → `about` → `experience` → `product`。各セクションコンポーネントはルート要素に `id` を持ち、これがアンカーの飛び先になる。

`vite.config.js` の `base: "./"` は GitHub Pages の `/portfolio/` サブパス配信に必要。外すと本番でアセットが 404 になる。

### セクションの共通パターン

`src/components/` 直下の `top.jsx` / `about.jsx` / `experience.jsx` / `product.jsx` がそれぞれ1画面を担当する。いずれもクラスコンポーネントで、共通して:

- ルート要素は `height: 100vh; width: 100vw` の単色背景（セクションごとに色が違う）
- 見出しフォントは `Futura, sans-serif`
- スタイリングはすべて styled-components

styled-components は v6 なので、DOM に渡したくない props は **transient props（`$` 始まり）にすること**。カードの背景色が `$backgroundColor` なのはこのため。`$` を落とすと React が未知の DOM 属性だと警告する。

### コンテンツデータの持ち方（変更時の注意点）

`experience.jsx` と `product.jsx` は、表示内容を `render()` 内のオブジェクト配列（`internInfos` / `productInfos`）としてハードコードし、`map` でカードコンポーネントに流している。

**画像だけは配列に入っていない。** `experience_card.jsx` / `product_card.jsx` の中に、`company_name` / `name` の文字列と import した SVG を突き合わせる if-else 連鎖がある。同様に `product_card.jsx` は `genre` 文字列からアイコンを引いている。

したがって項目を追加・改名するときは2箇所を必ず揃える:

1. セクション側の配列に要素を追加
2. カード側の if-else に同じ文字列でのマッピングを追加（画像は `src/images/` に置いて import）

文字列が一致しないと画像・アイコンが無言で `undefined` になる。

### FontAwesome

アイコンは**使うものだけ個別に import してオブジェクトで渡す**（`icon={faGithub}`）。`library.add()` と文字列指定（`icon={["fab", "github"]}`）は使わない。全アイコンを読み込むとバンドルが 400KB → 2MB に膨らむため。

v7 でいくつかのアイコンがリネームされている点に注意（`facebook-square` → `square-facebook`、`external-link-alt` → `up-right-from-square`）。

### パーティクル演出

`top.jsx` が tsparticles で背景の粒子アニメーションを描く。設定値は particles.js 由来の見た目を再現するために明示指定してあるので、消すと別物になる。

`fullScreen: { enable: false }` は必須。tsparticles の既定は `position: fixed` の全画面キャンバスで、外すと粒子が下のセクションにまではみ出す。
