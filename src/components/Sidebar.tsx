import styles from "./Sidebar.module.css";

// バー全体を 270deg 回転させているため、並びは下から上の順になる
const SECTIONS = ["Product", "Experience", "About", "Top"];

function Sidebar() {
  return (
    <nav className={styles.container} aria-label="セクション">
      <ul className={styles.list}>
        {SECTIONS.map((section) => (
          <li key={section}>
            <a className={styles.link} href={`#${section.toLowerCase()}`}>
              {section}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Sidebar;
