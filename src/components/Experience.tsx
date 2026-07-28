import { experiences } from "../data/experiences";
import Card from "./Card";
import Section from "./Section";
import styles from "./Experience.module.css";

function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      backgroundColor="var(--color-experience)"
      count={`${experiences.length} 社`}
      navTargetId="product"
      navLabel="Product へ移動"
    >
      <div className={styles.grid}>
        {experiences.map((experience) => (
          <Card
            key={experience.companyName}
            title={experience.companyName}
            meta={experience.period}
            description={experience.description}
            image={experience.logo}
            plateColor={experience.backgroundColor}
            url={experience.url}
            widePlate
          />
        ))}
      </div>
    </Section>
  );
}

export default Experience;
