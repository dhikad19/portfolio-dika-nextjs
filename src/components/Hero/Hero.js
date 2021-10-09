import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
  SectionTitleName,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello! My Name Dwi Andika,
        <br />
        Welcome To My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am a Junior Programmer, JavaScript and Python enthusiast. Hard-working
        listing Programmer with a flair for creating elegant solutions in the
        least amount of time.
      </SectionText>
      <Button
        onClick={() =>
          (window.location = "https://www.linkedin.com/in/dwiandikaa/")
        }
      >
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
