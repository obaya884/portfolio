import styles from "./Sidebar.module.css";

// バー全体を 270deg 回転させているため、並びは下から上の順になる
const SECTIONS = ["Product", "Experience", "About", "Top"];

function Sidebar() {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {SECTIONS.map((section) => (
            <li key={section} className={styles.item}>
              <a className={styles.link} href={`#${section.toLowerCase()}`}>
                {section}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
