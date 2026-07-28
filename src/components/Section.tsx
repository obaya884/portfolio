import type { ReactNode } from "react";
import styled from "styled-components";

type SectionProps = {
  /** Doubles as the anchor target the sidebar links to. */
  id: string;
  title: string;
  backgroundColor: string;
  children: ReactNode;
};

function Section({ id, title, backgroundColor, children }: SectionProps) {
  return (
    <SectionContainer id={id} $backgroundColor={backgroundColor}>
      <h1>{title}</h1>
      {children}
    </SectionContainer>
  );
}

const SectionContainer = styled.div<{ $backgroundColor: string }>`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: ${(props) => props.$backgroundColor};
  font-family: Futura, sans-serif;
  h1 {
    text-align: center;
    font-weight: 500;
    margin: 0;
    padding-top: 60px;
    margin-bottom: 20px;
  }
`;

export default Section;
