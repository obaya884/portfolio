# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

個人ポートフォリオサイト。Vite + React 19 + TypeScript の静的 SPA で、GitHub Pages (https://obaya884.github.io/portfolio/) に公開している。表示テキストはすべて日本語。

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

`package.json` の `overrides.minimatch` は GHSA-g3hv-75wg-m249 対策。修正は minimatch 11 にしか無いが、eslint / typescript-eslint が `^10.2.x` を要求しているので強制している。両者が 11 以上を要求するようになったら外すこと。

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

`About` / `Experience` / `Product` は共通の `Section`（全画面の色面 + 見出し + 任意の件数ラベル）で囲む。`Experience` と `Product` はさらに共通の `Card`（squircle プレート・タイトル・メタ・説明・任意のリンク）を並べる。グリッドの列数だけ各セクションが `auto-fill` で自前に持つ。

`Card` の `live` を立てると「公開中」の印が付く。`Product` では `link` の有無から導出しているので、データに公開状態を持たせる必要は無い。

`Card` の `widePlate` は横長の絵を載せる時に立てる。会社ロゴは 4:1 前後のものが多く、正方形プレートに `contain` すると読めない大きさまで縮む。アプリアイコンは正方形なので通常のプレートでよい。

`experiences` は開始が古い順、`products` は見せたい順に**データの並びがそのまま表示順**になる。並べ替えはコンポーネントではなくデータ側で行う。

### 形の語彙は squircle

`components/Squircle.tsx` が iOS のアイコンと同じ超楕円を SVG の `clip-path` として一度だけ定義し、プレートとプロフィール写真、公開中の印がすべてこれを参照する。**`border-radius` の角丸で代用しないこと。** 曲率の連続性が違うため、この形がこのサイトの識別要素になっている。

`clipPathUnits="objectBoundingBox"` なので**横長の箱に当てると形ごと引き伸ばされて丸みが強く出る**。横長プレート用に指数を上げた `squircleWideClip` を用意してあるので、正方形以外にはそちらを使う。

`SquircleDefs` はフローから外してあり、これを戻すと行ボックスが生まれてページ先頭に隙間が出る。

### 寸法は clamp() で画面幅に追従させる

文字サイズと余白は `index.css` の `--step-*` / `--gutter` / `--rail` にまとめてある。**固定 px やビューポート単位の決め打ちを新しく足さないこと。** 過去に `width: 1300px` と `font-size: 108px` の直書きで狭い画面が横に 900px はみ出していた。

縦組みサイドバーは 60rem 未満では非表示にし、`--rail` も 0 になる。

### サイドバーは現在地表示を兼ねる

`Sidebar` は IntersectionObserver でビューポート中央の帯を横切っているセクションを拾い、その項目だけ squircle の印を塗りつぶして `aria-current` を立てる。軸線が4項目を貫き、縦送りの進行そのものを表す。

`--tick-center` は印の中心に軸線を合わせるための実測値。文字サイズや `--rail` を変えたらここも取り直すこと。

現在地のスタイルは `.link.active` と書いて `.link:hover` と詳細度を揃えてある。`.active` 単独だとホバー時に現在地の方が暗くなる。

### セクションの送り

`SectionNav` が各セクションの下端にシェブロンを置き、次のセクションへ送る。`Top → About → Experience → Product → Top` と一周し、最後の `Product` だけ `direction="up"` で山を反転させて先頭に戻す。

**60rem 未満では非表示。** 狭い画面では素直にスクロールさせる方が速い。

矢印だけでは行き先が分からないので `label` は必須にしてある。

### スタイリングは CSS Modules

コンポーネントごとに `Xxx.module.css` を隣に置き、`import styles from "./Xxx.module.css"` して `className={styles.foo}` で当てる。Vite が標準サポートしているのでビルド設定は不要。CSS-in-JS のランタイムは無い。

**動的な値は CSS カスタムプロパティで渡す。** セクションとプレートの背景色だけが動的で、`style={{ "--plate-color": color } as CSSProperties}` のように inline style で変数を注入し、CSS 側は `var(--plate-color)` を参照する。TypeScript はカスタムプロパティを `CSSProperties` として認めないのでキャストが要る。

4つのセクション色は `index.css` の `--color-top` / `--color-about` / `--color-experience` / `--color-product` に置いてある。**これは意図的に選ばれた配色なので変更しないこと。**

英字を `text-transform: uppercase` で潰さないこと。`iOSアプリ` が `IOSアプリ` になるなど、表記を壊す。ラテン文字だけのラベル（アイブロウやサイドバー）に限って使う。

グローバルなスタイル（`body` など）は `src/index.css` に置く。

CSS ネストは使わず、フラットなセレクタで書く（`.link:hover path` など）。

### 書体は Jost をセルフホスト

全面的に `"Jost Variable", sans-serif`。`main.tsx` の `import "@fontsource-variable/jost"` で読み込む。Jost は欧文のみなので、日本語は字単位で `sans-serif` にフォールバックする。

**外部 CDN は使わずセルフホストすること。** このサイトはサードパーティへのリクエストがゼロで、それを保つのは意図的（プライバシーと表示速度の両面）。

`Futura` のような OS 同梱フォントを指定しないこと。macOS/iOS にしか無いため、他環境では素の `sans-serif` に落ちて書体の性格が失われる。

### FontAwesome

アイコンは**使うものだけ個別に import してオブジェクトで渡す**（`icon={faGithub}`）。`library.add()` と文字列指定（`icon={["fab", "github"]}`）は使わない。理由は2つで、全アイコンを読み込むとバンドルが 400KB → 2MB に膨らむこと、文字列は解決に失敗しても無言でアイコンが消えるだけで気づけないこと。

v7 でリネームされた名前がある（`facebook-square` → `square-facebook`、`external-link-alt` → `up-right-from-square`）。

### パーティクル演出

`Top.tsx` が tsparticles で背景の粒子アニメーションを描く。粒子数・色・不透明度・リンク距離・速度は明示指定してあり、消すと tsparticles の既定値に落ちて別物の見た目になる。

`fullScreen: { enable: false }` は必須。tsparticles の既定は `position: fixed` の全画面キャンバスで、外すと粒子が下のセクションにまではみ出す。

`ParticlesProvider` の `init` コールバックは参照が安定していないと例外を投げるため、モジュールスコープに置いてある。
