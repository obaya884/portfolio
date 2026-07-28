import type { CSSProperties, ReactNode } from "react";

import styles from "./Section.module.css";

type SectionProps = {
  /** サイドバーのリンク先となるアンカーを兼ねる */
  id: string;
  title: string;
  backgroundColor: string;
  children: ReactNode;
};

function Section({ id, title, backgroundColor, children }: SectionProps) {
  return (
    <div
      id={id}
      className={styles.section}
      style={{ "--section-background-color": backgroundColor } as CSSProperties}
    >
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
}

export default Section;
