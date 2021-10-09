import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { text: "Always Learning" },
  { text: "A Logical Mindset" },
  { text: "Self-Disciplined" },
  { text: "Puzzle Solver" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Qualities</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.text}</BoxNum>
          <BoxText>{card.desc}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
