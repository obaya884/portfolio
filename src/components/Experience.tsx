import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import { experiences } from "../data/experiences";
import Card from "./Card";
import Section from "./Section";

function Experience() {
  return (
    <Section id="experience" title="Experience" backgroundColor="#fd9347">
      <ContentsContainer>
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
      </ContentsContainer>
    </Section>
  );
}

const ContentsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-between;
  margin: 0 0 0 auto;
  height: 80%;
  width: 90%;
`;

export default Experience;
