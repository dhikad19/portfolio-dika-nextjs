import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Phone</LinkTitle>
          <LinkItem href="tel:085156456453">0851-56456453</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:dwiandika911@gmail.com">dwiandika911@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
        <SocialContainer>
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
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
