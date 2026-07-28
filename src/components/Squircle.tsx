// iOS のアイコンと同じ超楕円。border-radius の角丸とは曲率の連続性が違うので、
// clip-path で正確な形を切る。このサイトの形の語彙はすべてこれに揃える。
const SQUIRCLE_ID = "squircle";

/** |x|^n + |y|^n = 1 を 0..1 のボックスに正規化して折れ線で近似する */
function superellipsePath(exponent = 5, steps = 96): string {
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

const PATH = superellipsePath();

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
      </defs>
    </svg>
  );
}

export const squircleClip = `url(#${SQUIRCLE_ID})`;
