# portfolio

個人ポートフォリオサイト。経歴と制作物を1ページで紹介しています。

**https://obaya884.github.io/portfolio/**

## 技術構成

- Vite / React 19 / TypeScript
- CSS Modules
- Jost（セルフホストの可変フォント）
- tsparticles（トップ画面の背景演出）

縦スクロールの1ページ構成で、ルータは使っていません。セクション間の移動は素のアンカーリンクです。掲載内容は `src/data/` に型付きのデータとしてまとまっています。

## 開発

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ に出力
npm run preview    # ビルド結果をローカル確認
npm run typecheck  # 型チェック
npm run lint       # ESLint
```

## デプロイ

`master` への push で GitHub Actions が自動デプロイします（`.github/workflows/deploy.yml`）。型チェックと Lint が通らない場合はデプロイされません。手動のデプロイ操作は不要です。
