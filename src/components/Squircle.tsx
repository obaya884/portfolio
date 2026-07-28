// iOS のアイコンと同じ超楕円。border-radius の角丸とは曲率の連続性が違うので、
// clip-path で正確な形を切る。このサイトの形の語彙はすべてこれに揃える。
const SQUIRCLE_ID = "squircle";
const SQUIRCLE_WIDE_ID = "squircle-wide";

/** |x|^n + |y|^n = 1 を 0..1 のボックスに正規化して折れ線で近似する */
function superellipsePath(exponent: number, steps = 96): string {
  const points: string[] = [];
  for (let i = 0; i < steps; i += 1) {
    const angle = (i / steps) * Math.PI * 2;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const x = Math.sign(cos) * Math.abs(cos) ** (2 / exponent);
    const y = Math.sign(sin) * Math.abs(sin) ** (2 / exponent);
    points.push(`${((x + 1) / 2).toFixed(4)},${((y + 1) / 2).toFixed(4)}`);
  }
  return `M${points.join("L")}Z`;
}

// objectBoundingBox 指定なので、横長の箱に当てると形ごと引き伸ばされて
// 丸みが強く見える。横長用は指数を上げて角を締めた別の形を用意する。
const PATH = superellipsePath(5);
const PATH_WIDE = superellipsePath(11);

/** clip-path の参照先。ページに一度だけ置く。
 *  インラインのままだと行ボックスが生まれて先頭に隙間ができるのでフローから外す */
export function SquircleDefs() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
      }}
    >
      <defs>
        <clipPath id={SQUIRCLE_ID} clipPathUnits="objectBoundingBox">
          <path d={PATH} />
        </clipPath>
        <clipPath id={SQUIRCLE_WIDE_ID} clipPathUnits="objectBoundingBox">
          <path d={PATH_WIDE} />
        </clipPath>
      </defs>
    </svg>
  );
}

export const squircleClip = `url(#${SQUIRCLE_ID})`;
/** 横長の箱に使う。正方形に使うと角が立ちすぎる */
export const squircleWideClip = `url(#${SQUIRCLE_WIDE_ID})`;
