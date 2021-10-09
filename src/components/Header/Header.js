import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/">
        <a
          style={{
            display: "flex",
            alignItems: "center",
            color: "#e4e6e7",
            fontSize: "2rem",
          }}
        >
          <span>DWI ANDIKA</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>About Me</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons
        href="https://github.com/dhikad19"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.linkedin.com/in/dwiandikaa/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://twitter.com/dwiandhika810"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillTwitterCircle size="3rem" />
      </SocialIcons>
      <SocialIcons
        href="https://www.instagram.com/dikad19/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
