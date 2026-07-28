import styles from "./Sidebar.module.css";

// Listed bottom-to-top because the whole bar is rotated 270deg.
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
