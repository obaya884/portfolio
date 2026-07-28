import type { CSSProperties, ReactNode } from "react";

import SectionNav from "./SectionNav";
import styles from "./Section.module.css";

type SectionProps = {
  /** サイドバーのリンク先となるアンカーを兼ねる */
  id: string;
  title: string;
  backgroundColor: string;
  /** 見出しの右に添える件数などの短いラベル */
  count?: string;
  /** 送り先のセクション id */
  navTargetId: string;
  navLabel: string;
  navDirection?: "down" | "up";
  children: ReactNode;
};

function Section({
  id,
  title,
  backgroundColor,
  count,
  navTargetId,
  navLabel,
  navDirection,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={styles.section}
      style={{ "--section-background-color": backgroundColor } as CSSProperties}
    >
      <div className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        {count && <p className={styles.count}>{count}</p>}
      </div>
      <div>{children}</div>
      <SectionNav
        targetId={navTargetId}
        label={navLabel}
        direction={navDirection}
      />
    </section>
  );
}

export default Section;
