import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faInstagram,
  faSquareFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

import profileImage from "../assets/icon.png";

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

function About() {
  return (
    <AboutContainer id="about">
      <h1>Profile</h1>
      <ContentsContainer>
        <ProfileContainer>
          <img src={profileImage} alt="profile" />
          <Profile>
            <p>- Name: 大林 拓実</p>
            <p>- Nickname: ろばーと</p>
            <p>- Birthday: 1996/7/27</p>
            <p>- From: 滋賀生まれ練馬育ち</p>
            <p>
              - Like: Movie, Anime, Special Effect Films, Photo, Book, Life
              hack, Basketball, Football, LiSA, Perfume
            </p>
            <p>
              - Skill
              <br />- iOS/Swift, Android/kotlin, HTML5/CSS3, javascript(React,
              Vue), ruby(Rails), python, C++
              <br /> - git/GitHub, Adobe illustrator, Adobe XD
            </p>
          </Profile>
        </ProfileContainer>
        <LinkIconContainer>
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
            >
              <FontAwesomeIcon className="font-awesome-icon" icon={link.icon} />
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
        </LinkIconContainer>
      </ContentsContainer>
    </AboutContainer>
  );
}

// Hatena has no FontAwesome glyph, so the mark is inlined.
function HatenaIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="43"
      height="43"
      viewBox="0 0 300 300"
      aria-hidden="true"
    >
      <path
        fill="#000"
        d="M149.999 248.909c-54.537 0-98.906-44.367-98.906-98.909 0-54.537 44.369-98.909 98.906-98.909 54.545 0 98.908 44.372 98.908 98.909 0 54.542-44.363 98.909-98.908 98.909zm0-185.238c-47.601 0-86.33 38.723-86.33 86.329 0 47.605 38.729 86.332 86.33 86.332 47.61 0 86.338-38.727 86.338-86.332 0-47.606-38.728-86.329-86.338-86.329zM161.52 101.16c-4.832-9.785-7.783-19.3-9.273-24.845v70.055c2.447.917 4.197 3.257 4.197 6.021 0 3.559-2.887 6.442-6.443 6.442-3.56 0-6.443-2.885-6.443-6.442 0-2.896 1.925-5.317 4.558-6.131v-70.019c-1.485 5.531-4.438 15.092-9.293 24.919-7.571 15.314-17.009 28.823-17.009 28.823l6.036 82.598s5.736 6.401 22.31 6.41h.023c16.573-.009 22.312-6.41 22.312-6.41l6.035-82.598s-9.441-13.508-17.01-28.823z"
      />
    </svg>
  );
}

const AboutContainer = styled.div`
  height: 100vh;
  width: 100vw;
  margin: 0;
  background-color: #81b4e7;
  font-family: Futura, sans-serif;
  h1 {
    text-align: center;
    font-weight: 500;
    margin: 0;
    padding-top: 60px;
  }
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70%;
`;

const ProfileContainer = styled.div`
  width: 70%;
  height: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 300px;
    height: 300px;
  }
`;

const Profile = styled.div`
  p {
    font-family: Futura, sans-serif;
    text-indent: -1em;
    text-align: left;
  }
`;

const LinkIconContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #000;
    text-decoration: none;
    :hover path {
      fill: #fff;
    }
  }

  .font-awesome-icon {
    font-size: 1.8em;
  }
`;

export default About;
