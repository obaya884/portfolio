import styles from "./SectionNav.module.css";

type SectionNavProps = {
  /** 送り先のセクション id */
  targetId: string;
  /** 読み上げ用。矢印だけでは行き先が伝わらないため */
  label: string;
  /** 最後のセクションからは上向きで先頭に戻す */
  direction?: "down" | "up";
};

function SectionNav({ targetId, label, direction = "down" }: SectionNavProps) {
  return (
    <a
      className={`${styles.nav} ${direction === "up" ? styles.up : ""}`}
      href={`#${targetId}`}
      aria-label={label}
    >
      <span />
      <span />
      <span />
    </a>
  );
}

export default SectionNav;
