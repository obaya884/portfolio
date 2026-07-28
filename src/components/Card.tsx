import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CSSProperties } from "react";

import styles from "./Card.module.css";

type CardProps = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  backgroundColor: string;
  /** Omitted when there is nothing to link to, so no empty anchor is rendered. */
  link?: { url: string; icon: IconDefinition };
};

function Card({
  title,
  subtitle,
  description,
  image,
  backgroundColor,
  link,
}: CardProps) {
  return (
    <div className={styles.card}>
      <div
        className={styles.imageArea}
        style={{ "--card-background-color": backgroundColor } as CSSProperties}
      >
        <img src={image} alt={title} />
      </div>
      <div className={styles.body}>
        <div className={styles.heading}>
          <h3 className={styles.title}>{title}</h3>
          {link && (
            <a
              className={styles.link}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={link.icon} />
            </a>
          )}
        </div>
        <p className={styles.text}>{subtitle}</p>
        <p className={styles.text}>{description}</p>
      </div>
    </div>
  );
}

export default Card;
