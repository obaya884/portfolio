import styled from "styled-components";

// Listed bottom-to-top because the whole bar is rotated 270deg.
const SECTIONS = ["Product", "Experience", "About", "Top"];

function Sidebar() {
  return (
    <SideContainer>
      <Sidenav>
        <ul>
          {SECTIONS.map((section) => (
            <li key={section}>
              <a href={`#${section.toLowerCase()}`}>{section}</a>
            </li>
          ))}
        </ul>
      </Sidenav>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  position: fixed;
  transform: rotate(270deg);
  top: 50%;
  left: -200px;
  z-index: 3;
`;

const Sidenav = styled.nav`
  font-family: Futura, sans-serif;
  font-weight: 500;
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    margin: 0;
    li {
      font-size: 1.2em;
      margin-right: 60px;
      a {
        color: #000;
        text-decoration: none;
        :hover {
          color: #fff;
        }
      }
    }
  }
`;

export default Sidebar;
