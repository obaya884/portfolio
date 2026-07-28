import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

import { squircleClip } from "./Squircle";
import styles from "./Sidebar.module.css";

// バー全体を縦組みにしているため、並びは下から上の順になる
const SECTIONS = ["Product", "Experience", "About", "Top"];
const IDS = SECTIONS.map((section) => section.toLowerCase());

/** ビューポート中央の帯を横切っているセクションを現在地とみなす */
function useActiveSection() {
  const [active, setActive] = useState(IDS[IDS.length - 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((entry) => entry.isIntersecting);
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    IDS.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}

function Sidebar() {
  const active = useActiveSection();

  return (
    <nav className={styles.container} aria-label="セクション">
      <ul
        className={styles.list}
        style={{ "--squircle": squircleClip } as CSSProperties}
      >
        {SECTIONS.map((section) => {
          const id = section.toLowerCase();
          const isActive = id === active;
          return (
            <li key={section}>
              <a
                className={`${styles.link} ${isActive ? styles.active : ""}`}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
              >
                {section}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Sidebar;
