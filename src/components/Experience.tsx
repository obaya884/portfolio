import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { experiences } from "../data/experiences";
import Card from "./Card";
import Section from "./Section";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <Section id="experience" title="Experience" backgroundColor="#fd9347">
      <div className={styles.grid}>
        {experiences.map((experience) => (
          <Card
            key={experience.companyName}
            title={experience.companyName}
            subtitle={experience.period}
            description={experience.description}
            image={experience.logo}
            backgroundColor={experience.backgroundColor}
            link={{ url: experience.url, icon: faUpRightFromSquare }}
          />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
