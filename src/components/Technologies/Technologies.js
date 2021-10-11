import React from "react";
import {
  DiFirebase,
  DiReact,
  DiZend,
  DiJavascript,
  DiPython,
  DiAndroid,
} from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle main>Skills</SectionTitle>
    <SectionText>
      I've learn with a ranged of technologies in web development <br />
      Back-end to design and making sort of Databases.
    </SectionText>
    <List>
      <ListItem>
        <DiJavascript size="3rem" />
        <ListContainer>
          <br />
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experienced With <br />
            HTML, CSS, JavaScript and React
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <br />
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Have a Experienced With <br />
            Python and Databases (My Sql)
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <br />
          <ListTitle>Tools</ListTitle>
          <ListParagraph>
            Experienced With <br />
            Git, Firebase and API
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
