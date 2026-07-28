import type { CSSProperties } from "react";

import { squircleClip, squircleWideClip } from "./Squircle";
import styles from "./Card.module.css";

type CardProps = {
  title: string;
  /** プラットフォームや在籍期間。等幅で組む短いラベル */
  meta: string;
  description: string;
  image: string;
  plateColor: string;
  /** リンク先が無い場合は省略する。空のアンカーを描画しないため */
  url?: string;
  /** 公開済みであることを印で示すか */
  live?: boolean;
  /** 横長の絵（会社ロゴなど）を載せるプレートにするか */
  widePlate?: boolean;
};

function Card({
  title,
  meta,
  description,
  image,
  plateColor,
  url,
  live = false,
  widePlate = false,
}: CardProps) {
  return (
    <article className={styles.card}>
      <div
        className={`${styles.plate} ${widePlate ? styles.plateWide : ""}`}
        style={
          {
            "--plate-color": plateColor,
            clipPath: widePlate ? squircleWideClip : squircleClip,
          } as CSSProperties
        }
      >
        <img src={image} alt="" />
      </div>
      <div className={styles.head}>
        <h3 className={styles.title}>
          {url ? (
            <a
              className={styles.titleLink}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {title}
            </a>
          ) : (
            title
          )}
        </h3>
        <p
          className={styles.meta}
          style={{ "--squircle": squircleClip } as CSSProperties}
        >
          <span>{meta}</span>
          {live && <span className={styles.live}>公開中</span>}
        </p>
      </div>
      <p className={styles.description}>{description}</p>
    </article>
  );
}

export default Card;
