import React, { useRef, useState, createRef } from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import Section from '../../components/Section/Section';
import classes from './MainLayout.module.css';
import { Typography, Paper } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import FloatingArrow from '../../components/FloatingArrow/FloatingArrow';
import SubjectIcon from '@material-ui/icons/Subject';
import _ from 'lodash';
import {
  Grid,
  Icon,
  Container,
  Header,
  Divider,
  Sticky,
  Rail,
  Ref,
  Segment,
  Image
} from 'semantic-ui-react';
import Card from '../../components/Card/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import Accordion from '../../components/Accordion/Accordion';
import CTAButton from '../../components/CTAButton/CTAButton';
import NewCard from '../../components/NewCard/NewCard';
import { useSpring, animated, useTrail } from 'react-spring';
import NewChat from '../../components/NewChat/NewChat';
import ChatGuide from '../../components/ChatGuide/ChatGuide';
import OwnContainer from '../../components/Grid/Grid';
import styled from 'styled-components';

//  assets
import mobileImage from '../../assets/images/newestphone.svg';
import PdfIcon from '../../assets/icons/pdf-icon.svg';
import Chat from '../../components/Chat/Chat';
import Shape from '../../assets/images/header-bottom.svg';
import HalfRoundShape from '../../assets/images/half-round.svg';
import TV2Logo from '../../assets/images/tv2-logo.svg';
import TaenkLogo from '../../assets/images/taenk-logo.svg';
import DRLogo from '../../assets/images/dr-logo.svg';
import MaerskLogo from '../../assets/images/maersk-logo.svg';
import LegoLogo from '../../assets/images/lego-logo.svg';
import IntroBG from '../../assets/images/introbg.svg';
import BasketIcon from '../../assets/icons/basket.svg';

const cards = [
  {
    color: 'blue',
    icon: <i className={`${classes.BulbIcon} fad fa-lightbulb-on`}></i>,
    header: 'Gratis Rådgivning',
    text:
      'Upload any bill to Roger or use your unique RogerAddress to instantly receive and scan invoices.'
  },
  {
    color: 'blue',
    icon: <i className={`${classes.ScaleIcon} fad fa-balance-scale`}></i>,
    header: 'Vi skriver klagen!',
    text:
      "The market's best approval flow. Create rules for who approves what and when."
  },
  {
    color: 'blue',
    icon: <i className={`${classes.MoneyIcon} fad fa-money-bill-alt`}></i>,
    header: 'Betal',
    text:
      'Pay any bill or invoice to anyone without changing your current setup.'
  },
  {
    color: 'blue',
    icon: <i className={`${classes.ComplaintIcon} fad fa-file-contract`}></i>,
    header: '5 Minutter',
    text:
      'With our powerful accounting system integrations you can automate the entire accounts payable flow.'
  }
];

const lawAreas = [
  {
    color: 'blue',
    icon: <img src={BasketIcon} alt="kurv" />,
    header: 'Købeloven',
    description:
      'Har du købt et TV, fået en håndværker til at udføre noget arbejde, eller har du lånt en ting? \n \n Robotten kan hjælpe dig med alle de problemer du møder i hverdagen.'
  }
];

const FAQOptions = [
  {
    question: 'What is a dog?',
    answer:
      'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.'
  },
  {
    question: 'Hvem er din mor?',
    answer: 'En skøge'
  }
];

const FooterItems = {
  contactInfo: [
    '+45 28 40 45 00',
    'Mandag-Fredag: 8-16',
    'Lørdag-Søndag: lukket'
  ],
  socialMedia: ['Facebook', 'Medium', 'Twitter'],
  company: ['Om os', 'Blog', 'Presse'],
  product: ['FAQ'],
  law: ['Privatpolitik', 'Handelsbetingelser', 'Cookies Politik']
};

const TestDiv = styled(OwnContainer)`
   {
    width: 100px !important;
    height: 100px !important;
    position: relative !important;
    background: green !important;
  }
`;

const IntroContainer = styled(Container)`
  // background-image: linear-gradient(130deg, #0700dd 0%, #00f2ff 89%);
  background: url(${IntroBG}) no-repeat;
  background-size: cover;

  margin: 0 !important;

  @media only screen and (max-width: 767px) {
    &.ui.container {
      margin: 0 !important;
      padding-left: 1em;
      padding-right: 1em;
    }
  }
`;

const StyledContainer = styled(Container)`
  padding-bottom: 150px;
  margin: 0 !important;
`;

const IntroductionContainer = styled(Container)`
  padding-top: 150px;
  padding-bottom: 150px;
`;

const WhiteCTAButton = styled(CTAButton)`
  align-self: flex-start;
  margin-top: 20px;
`;

const Heading = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 2.5em;
  width: 100%;
  padding-bottom: 20px;
  text-align: left;
`;

const HeadingWhite = styled(Heading)`
  color: #fff;
`;

const HeadingDark = styled(Heading)`
  color: #404f54;
`;

const HeadingDarkCentered = styled(HeadingDark)`
  text-align: center;
`;

const SubHeading = styled.div`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.5em;
  color: #818a8f;
  margin-bottom: 50px;
`;

const FooterList = styled.ul`
  list-style: none;
  padding-left: 0;
  text-align: left;

  li {
    padding: 7.5px 0;
    color: #818a8f;
  }

  li:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const ContentWrapperCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const FooterContentWrapperCenter = styled(ContentWrapperCenter)`
  li {
    text-align: center;
  }
  @media only screen and (min-width: 767px) {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;

    li {
      text-align: left;
    }
  }
`;

const FooterHeading = styled.h3`
  text-align: left;
  font-weight: 700;
  color: #34383b;
`;

const IntroSloganText = styled.h3`
  width: 100%;
  color: #fff;
  font-weight: 300;
  font-size: 1.5em;
  text-align: left;
`;
const IntroHeader = styled.h1`
  width: 100%;
  font-size: 2.5em;
  font-weight: 700;
  color: white;
  text-align: left;
`;

const IntroSubtext = styled.p`
  width: 100%;
  color: #fff;
  font-size: 1.2em;
  font-weight: 100;
  opacity: 0.8;
  text-align: left;
`;

const CopyrightText = styled.p`
  font-size: 0.8em;
  color: #818a8f;
  width: 60%;
  margin: auto;
  text-align: center;
`;

const StyledColumn = styled(Grid.Column)`
  @media only screen and (max-width: 767px) {
    &:not(:last-child) {
      padding-bottom: 50px;
    }
  }
`;

const IntroText = (
  <ContentWrapperCenter>
    <IntroSloganText>
      Fordi adgangen til juridisk hjælp skal være for alle
    </IntroSloganText>
    <IntroHeader>Danmarks Første Juridiske Robot</IntroHeader>
    <IntroSubtext>
      Velkommen til Danmarks første juridiske robot. Robotten vurderer gratis
      dit problem, og du er derfor sikker på hvad dine rettigheder er. Den kan
      også for 29,- kroner skrive din klage, som du herefter kan sende til
      butikken.
    </IntroSubtext>
    <WhiteCTAButton>Start robotten</WhiteCTAButton>
  </ContentWrapperCenter>
);

const IntroPhone = (
  <ContentWrapperCenter>
    <Zoom in={true} timeout={1500}>
      <img src={mobileImage} className={classes.image} />
    </Zoom>
  </ContentWrapperCenter>
);

const CompanySection = (
  <>
    <HeadingDarkCentered>Anerkendt af</HeadingDarkCentered>
    <SubHeading>
      Lommejuristen er et anerkendt brand indenfor legaltech, virksomhederne
      elsker os.
    </SubHeading>
    <Grid className={classes.LogosWrapper}>
      <StyledColumn computer={4} mobile={8}>
        <img src={DRLogo} alt="DR" />
      </StyledColumn>
      <StyledColumn computer={4} mobile={8}>
        <img src={LegoLogo} alt="LEGO" />
      </StyledColumn>
      <StyledColumn computer={4} mobile={8}>
        <img src={TV2Logo} alt="TV2" />
      </StyledColumn>
      <StyledColumn computer={4} mobile={8}>
        <img src={TaenkLogo} alt="Taenk" />
      </StyledColumn>
      <StyledColumn computer={4} mobile={8}>
        <img src={MaerskLogo} alt="MAERSK" />
      </StyledColumn>
    </Grid>
  </>
);

const FooterContactInfo = (
  <FooterContentWrapperCenter>
    <FooterHeading>Lommejuristen</FooterHeading>
    <FooterList>
      {FooterItems.contactInfo.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </FooterContentWrapperCenter>
);

const FooterSocialmedia = (
  <FooterContentWrapperCenter>
    <FooterHeading>Følg Os</FooterHeading>
    <FooterList>
      {FooterItems.socialMedia.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </FooterContentWrapperCenter>
);

const FooterCompany = (
  <FooterContentWrapperCenter>
    <FooterHeading>Virksomhed</FooterHeading>
    <FooterList>
      {FooterItems.company.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </FooterContentWrapperCenter>
);

const FooterProduct = (
  <FooterContentWrapperCenter>
    <FooterHeading>Produkt</FooterHeading>
    <FooterList>
      {FooterItems.product.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </FooterContentWrapperCenter>
);

const FooterLaw = (
  <FooterContentWrapperCenter>
    <FooterHeading>Juridisk</FooterHeading>
    <FooterList>
      {FooterItems.law.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </FooterContentWrapperCenter>
);

const MainLayout = () => {
  const cardIcon = <img src={PdfIcon} alt="" height="100%" />;

  const trail = useTrail(cards.length, {
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 }
  });

  const Cards = trail.map((props, index) => (
    <StyledColumn computer={4} tablet={4} mobile={16} key={index}>
      <animated.div style={props}>
        <NewCard
          withArrow={trail.length !== index + 1 ? true : false}
          icon={cards[index].icon}
          title={cards[index].header}
          text={cards[index].text}
        ></NewCard>
      </animated.div>
    </StyledColumn>
  ));

  const LawCards = lawAreas.map((card) => (
    <StyledColumn computer={8} mobile={16}>
      <NewCard
        icon={card.icon}
        title="Købeloven"
        text="Har du købt et TV, fået en håndværker til at udføre noget arbejde, eller har du lånt en ting? Robotten kan hjælpe dig med alle de problemer du møder i hverdagen."
        alignment="horizontal"
      ></NewCard>
    </StyledColumn>
  ));

  return (
    <>
      <IntroContainer fluid>
        <IntroductionContainer>
          <Grid centered>
            <Grid.Row>
              <StyledColumn computer={9} tablet={8} mobile={16}>
                {IntroText}
              </StyledColumn>
              <StyledColumn computer={7} tablet={8} mobile={16}>
                {IntroPhone}
              </StyledColumn>
            </Grid.Row>
          </Grid>
        </IntroductionContainer>
        <StyledContainer>
          <Grid>
            <Grid.Row>
              <StyledColumn computer={16}>
                <HeadingWhite>En problemfri sagsbehandling</HeadingWhite>
              </StyledColumn>
            </Grid.Row>
            {Cards}
          </Grid>
        </StyledContainer>
      </IntroContainer>
      <StyledContainer>{CompanySection}</StyledContainer>
      <StyledContainer>
        <Grid>
          <Grid.Row>
            <StyledColumn computer={16}>
              <HeadingDark>Lovområder</HeadingDark>
            </StyledColumn>
          </Grid.Row>
          {LawCards}
        </Grid>
      </StyledContainer>
      <StyledContainer>
        <ChatGuide />
      </StyledContainer>
      <StyledContainer>
        <HeadingDarkCentered>FAQ</HeadingDarkCentered>
        <Grid centered>
          <StyledColumn computer={8} tablet={8} mobile={16}>
            <Accordion options={FAQOptions} />
          </StyledColumn>
          <StyledColumn computer={8} tablet={8} mobile={16}>
            <Accordion options={FAQOptions} />
          </StyledColumn>
        </Grid>
      </StyledContainer>
      <footer>
        <Grid container centered>
          <Grid.Row>
            <StyledColumn computer={16}>
              <Divider />
            </StyledColumn>
          </Grid.Row>
          <StyledColumn computer={4} tablet={6} mobile={8}>
            {FooterContactInfo}
          </StyledColumn>
          <StyledColumn computer={3} tablet={5} mobile={8}>
            {FooterSocialmedia}
          </StyledColumn>
          <StyledColumn computer={3} tablet={5} mobile={8}>
            {FooterCompany}
          </StyledColumn>
          <StyledColumn computer={3} tablet={5} mobile={8}>
            {FooterProduct}
          </StyledColumn>
          <StyledColumn computer={3} tablet={5} mobile={8}>
            {FooterLaw}
          </StyledColumn>
          <Grid.Row>
            <StyledColumn computer={16}>
              <CopyrightText>
                &copy; 2020 JurNordica ApS. Alle rettigheder forbeholdes.
              </CopyrightText>
            </StyledColumn>
          </Grid.Row>
        </Grid>
      </footer>
    </>
  );
};

export default MainLayout;
