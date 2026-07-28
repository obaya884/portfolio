import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { CSSProperties } from "react";

import profileImage from "../assets/icon.png";
import Section from "./Section";
import { squircleClip } from "./Squircle";
import styles from "./About.module.css";

const SOCIAL_LINKS: { name: string; url: string; icon: IconDefinition }[] = [
  { name: "Twitter", url: "https://twitter.com/obaya884", icon: faTwitter },
  {
    name: "Instagram",
    url: "https://www.instagram.com/obaya884photo/",
    icon: faInstagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/takumi.obayashi.8727",
    icon: faSquareFacebook,
  },
  { name: "GitHub", url: "https://github.com/obaya884", icon: faGithub },
];

const HATENA_BLOG_URL = "https://t-6bar10.hatenablog.com/";

/** value は1行の値、items は語彙単位で並べて走査させたい値 */
type Fact = { label: string; value?: string; items?: string[] };

const FACTS: Fact[] = [
  { label: "Name", value: "大林 拓実 / ろばーと" },
  { label: "Birthday", value: "1996/7/27" },
  { label: "From", value: "滋賀生まれ練馬育ち" },
  {
    label: "Skill",
    items: [
      "iOS / Swift",
      "Android / Kotlin",
      "HTML5 / CSS3",
      "JavaScript",
      "React",
      "Vue",
      "Ruby on Rails",
      "Python",
      "C++",
      "Git / GitHub",
      "Adobe Illustrator",
      "Adobe XD",
    ],
  },
  {
    label: "Like",
    items: [
      "Movie",
      "Anime",
      "Special Effect Films",
      "Photo",
      "Book",
      "Life hack",
      "Basketball",
      "Football",
      "LiSA",
      "Perfume",
    ],
  },
];

function About() {
  return (
    <Section
      id="about"
      title="Profile"
      backgroundColor="var(--color-about)"
      navTargetId="experience"
      navLabel="Experience へ移動"
    >
      <div className={styles.layout}>
        <img
          className={styles.portrait}
          style={{ clipPath: squircleClip } as CSSProperties}
          src={profileImage}
          alt="大林拓実"
        />
        <div>
          <dl className={styles.facts}>
            {FACTS.map((fact) => (
              <div key={fact.label} style={{ display: "contents" }}>
                <dt>{fact.label}</dt>
                <dd>
                  {fact.items ? (
                    <ul className={styles.tags}>
                      {fact.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    fact.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
          <div className={styles.links}>
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
              >
                <FontAwesomeIcon icon={link.icon} />
              </a>
            ))}
            <a
              href={HATENA_BLOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hatena Blog"
            >
              <HatenaIcon />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

// はてなは FontAwesome にグリフが無いのでマークをインラインで持つ
function HatenaIcon() {
  return (
    <svg className={styles.hatena} viewBox="0 0 300 300" aria-hidden="true">
      <path d="M149.999 248.909c-54.537 0-98.906-44.367-98.906-98.909 0-54.537 44.369-98.909 98.906-98.909 54.545 0 98.908 44.372 98.908 98.909 0 54.542-44.363 98.909-98.908 98.909zm0-185.238c-47.601 0-86.33 38.723-86.33 86.329 0 47.605 38.729 86.332 86.33 86.332 47.61 0 86.338-38.727 86.338-86.332 0-47.606-38.728-86.329-86.338-86.329zM161.52 101.16c-4.832-9.785-7.783-19.3-9.273-24.845v70.055c2.447.917 4.197 3.257 4.197 6.021 0 3.559-2.887 6.442-6.443 6.442-3.56 0-6.443-2.885-6.443-6.442 0-2.896 1.925-5.317 4.558-6.131v-70.019c-1.485 5.531-4.438 15.092-9.293 24.919-7.571 15.314-17.009 28.823-17.009 28.823l6.036 82.598s5.736 6.401 22.31 6.41h.023c16.573-.009 22.312-6.41 22.312-6.41l6.035-82.598s-9.441-13.508-17.01-28.823z" />
    </svg>
  );
}

export default About;
