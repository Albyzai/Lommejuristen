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
import mobileImage from '../../assets/images/newmobile.png';
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

const navItems = [{ name: 'Artikler' }];

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
    icon: 'shopping basket',
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
    'Åbningstider: Mandag-Fredag: 8-16 \n Lørdag-Søndag: lukket'
  ],
  socialMedia: ['Facebook', 'Medium', 'Twitter'],
  company: ['Om os', 'Blog', 'Presse'],
  product: ['FAQ'],
  law: ['Privatpolitik', 'Handelsbetingelser', 'Cookies Politik']
};

// const IntroContainer = styled(OwnContainer)`
//   background-image: linear-gradient(130deg, #0700dd 0%, #00f2ff 89%);
//   background: black;
//   width: 50% !important;
// `;

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
`;

const StyledContainer = styled(Container)`
  padding-bottom: 150px;
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

const FooterHeading = styled.h3`
  text-align: left;
  font-weight: 700;
  color: #34383b;
`;

const IntroText = (
  <>
    <p className={`${classes.TextMargin} ${classes.AboveHeading}`}>
      Fordi adgangen til juridisk hjælp skal være for alle
    </p>
    <p
      className={`${classes.TextMargin} ${classes.Heading} ${classes.Inverted}`}
    >
      Danmarks Første Juridiske Robot
    </p>
    className=
    {`${classes.TextMargin} ${classes.Subheading} ${classes.Inverted}`}
    <p>
      Velkommen til Danmarks første juridiske robot. Robotten vurderer gratis
      dit problem, og du er derfor sikker på hvad dine rettigheder er. Den kan
      også for 29,- kroner skrive din klage, som du herefter kan sende til
      butikken.
    </p>
  </>
);

const IntroPhone = (
  <Zoom in={true} timeout={1500}>
    <img src={mobileImage} className={classes.image} />
  </Zoom>
);

const CompanySection = (
  <>
    <HeadingDarkCentered>Anerkendt af</HeadingDarkCentered>
    <SubHeading>
      Lommejuristen er et anerkendt brand indenfor legaltech, virksomhederne
      elsker os.
    </SubHeading>
    <Grid className={classes.LogosWrapper}>
      <Grid.Column computer={4} mobile={8}>
        <img src={DRLogo} alt="DR" />
      </Grid.Column>
      <Grid.Column computer={4} mobile={8}>
        <img src={LegoLogo} alt="LEGO" />
      </Grid.Column>
      <Grid.Column computer={4} mobile={8}>
        <img src={TV2Logo} alt="TV2" />
      </Grid.Column>
      <Grid.Column computer={4} mobile={8}>
        <img src={TaenkLogo} alt="Taenk" />
      </Grid.Column>
      <Grid.Column computer={4} mobile={8}>
        <img src={MaerskLogo} alt="MAERSK" />
      </Grid.Column>
    </Grid>
  </>
);

const FooterContactInfo = (
  <>
    <FooterHeading>Lommejuristen</FooterHeading>
    <FooterList>
      {FooterItems.contactInfo.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </>
);

const FooterSocialmedia = (
  <>
    <FooterHeading>Følg Os</FooterHeading>
    <FooterList>
      {FooterItems.socialMedia.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </>
);

const FooterCompany = (
  <>
    <FooterHeading>Virksomhed</FooterHeading>
    <FooterList>
      {FooterItems.company.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </>
);

const FooterProduct = (
  <>
    <FooterHeading>Produkt</FooterHeading>
    <FooterList>
      {FooterItems.product.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </>
);

const FooterLaw = (
  <>
    <FooterHeading>Juridisk</FooterHeading>
    <FooterList>
      {FooterItems.law.map((item) => (
        <li>{item}</li>
      ))}
    </FooterList>
  </>
);

const MainLayout = () => {
  const cardIcon = <img src={PdfIcon} alt="" height="100%" />;

  const trail = useTrail(cards.length, {
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 }
  });

  const Cards = trail.map((props, index) => (
    <Grid.Column computer={4} tablet={4} mobile={16} key={index}>
      <animated.div style={props}>
        <NewCard
          withArrow={trail.length !== index + 1 ? true : false}
          icon={cards[index].icon}
          title={cards[index].header}
          text={cards[index].text}
        ></NewCard>
      </animated.div>
    </Grid.Column>
  ));

  const LawCards = cards.map((card) => (
    <Grid.Column computer={8} mobile={16}>
      <NewCard
        icon={cardIcon}
        title="Købeloven"
        text="Har du købt et TV, fået en håndværker til at udføre noget arbejde, eller har du lånt en ting? Robotten kan hjælpe dig med alle de problemer du møder i hverdagen."
        alignment="horizontal"
      ></NewCard>
    </Grid.Column>
  ));

  return (
    <>
      <HeaderNavigation navItems={navItems} />
      <IntroContainer fluid>
        <StyledContainer>
          <Grid>
            <Grid.Row>
              <Grid.Column computer={8} mobile={16}>
                {IntroText}
              </Grid.Column>
              <Grid.Column computer={8} mobile={16}>
                {IntroPhone}
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer={16}>
                <HeadingWhite>En problemfri sagsbehandling</HeadingWhite>
              </Grid.Column>
            </Grid.Row>
            {Cards}
          </Grid>
        </StyledContainer>
      </IntroContainer>
      <StyledContainer>{CompanySection}</StyledContainer>
      <StyledContainer>
        <Grid>
          <Grid.Row>
            <Grid.Column computer={16}>
              <HeadingDark>Lovgivnings områder</HeadingDark>
            </Grid.Column>
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
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Accordion options={FAQOptions} />
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Accordion options={FAQOptions} />
          </Grid.Column>
        </Grid>
      </StyledContainer>
      <footer>
        <Grid container centered>
          <Grid.Row>
            <Grid.Column computer={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Column computer={4} mobile={6}>
            {FooterContactInfo}
          </Grid.Column>
          <Grid.Column computer={3} mobile={5}>
            {FooterSocialmedia}
          </Grid.Column>
          <Grid.Column computer={3} mobile={5}>
            {FooterCompany}
          </Grid.Column>
          <Grid.Column computer={3} mobile={5}>
            {FooterProduct}
          </Grid.Column>
          <Grid.Column computer={3} mobile={5}>
            {FooterLaw}
          </Grid.Column>
        </Grid>
      </footer>
    </>
  );
};

export default MainLayout;
