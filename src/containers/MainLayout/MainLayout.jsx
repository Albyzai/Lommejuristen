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

const navItems = [{ name: 'Artikler' }];

const cards = [
  {
    color: 'blue',
    icon: 'balance',
    header: 'Gratis Rådgivning',
    description:
      'Har du købt en ting i en butik eller i en netbutik, og er du usikker på om du f.eks. må bytte varen? \n\n Vi vurderer altid gratis hvad du har krav på!'
  },
  {
    color: 'blue',
    icon: 'write',
    header: 'Vi skriver klagen!',
    description:
      'For 29,- kroner skriver robotten klagen lige præcis til din situation \n\n Du kan herefter sende klagen videre til butikken.'
  },
  {
    color: 'blue',
    icon: 'wait',
    header: '5 Minutter',
    description:
      'Det tager kun 5 minutter at trykke sig igennem vores interaktive skema \n\n Slip for at søge flere timer på nettet.'
  },
  {
    color: 'blue',
    icon: 'wait',
    header: '5 Minutter',
    description:
      'Det tager kun 5 minutter at trykke sig igennem vores interaktive skema \n\n Slip for at søge flere timer på nettet.'
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

const MainLayout = () => {
  const svg = (
    <div className={classes.headerShape}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 100"
        preserveAspectRatio="none"
      >
        <path
          className={classes.shapeFill}
          d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
                        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
                        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"
        />
      </svg>
    </div>
  );

  // const triangle = (
  //   <div className={classes.TriangleShape}>
  //     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259.38 133.22">
  //         <polygon className={classes.shapeFill} class="cls-1" points="0.46 0.76 0.46 132.76 257.46 132.76 0.46 0.76"/>
  //     </svg>
  //   </div>
  // )

  const cardIcon = <img src={PdfIcon} alt="" height="100%" />;

  const triangle = (
    <div className={classes.TriangleShape}>
      <svg
        className={classes.shapeFill}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="5 0 249 130"
      >
        <polygon
          class="cls-1"
          points="0.46 0.76 0.46 132.76 257.46 132.76 0.46 0.76"
        />
      </svg>
    </div>
  );

  const halfRoundSVG = (
    <div className={classes.roundShape}>
      <svg
        id="Lag_1"
        data-name="Lag 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 400 452"
      >
        <defs>
          <linearGradient id="myGradient">
            <stop offset="0%" stop-color="#0700dd" />
            <stop offset="89%" stop-color="#00f2ff" />
          </linearGradient>
        </defs>
        <path
          fill="url(#myGradient)"
          d="M99.5,608.5v-451h399V321c-.12,74.79-28.29,145.61-79.31,199.43S300.05,605.3,227,608.26c-3.79.16-7.66.24-11.48.24Z"
          transform="translate(-99 -157)"
        />
      </svg>
    </div>
  );

  // const springRef = useRef();
  // const props = useSpring({ ...values, ref: springRef });

  // const transitionRef = useRef();
  // const transitions = useTransition({ ...values, ref: transitionRef });

  // const trail = useTrail(cards.length, {
  //   from: { opacity: 0, marginTop: 100},
  //   to: { opacity: 1, marginTop: 0 }
  // })

  const trail = useTrail(cards.length, {
    from: { opacity: 0, marginTop: 100 },
    to: { opacity: 1, marginTop: 0 },
    config: { duration: 1000 }
  });

  const stickyRef = createRef();

  const Placeholder = () => (
    <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
  );

  return (
    <>
      <HeaderNavigation navItems={navItems} />
      <Container
        fluid
        style={{ paddingBottom: '150px' }}
        className={`${classes.introSection}`}
      >
        <Grid container centered style={{ paddingTop: '150px' }}>
          <Grid.Row>
            <Grid.Column
              className={classes.columnCentered}
              computer={8}
              tablet={8}
              mobile={16}
            >
              <p className={`${classes.TextMargin} ${classes.AboveHeading}`}>
                Fordi adgangen til juridisk hjælp skal være for alle
              </p>
              <p
                className={`${classes.TextMargin} ${classes.Heading} ${classes.Inverted}`}
              >
                Danmarks Første Juridiske Robot
              </p>
              <p
                className={`${classes.TextMargin} ${classes.Subheading} ${classes.Inverted}`}
              >
                Velkommen til Danmarks første juridiske robot. Robotten vurderer
                gratis dit problem, og du er derfor sikker på hvad dine
                rettigheder er. Den kan også for 29,- kroner skrive din klage,
                som du herefter kan sende til butikken.
              </p>
            </Grid.Column>

            <Grid.Column
              className={classes.columnCentered}
              computer={8}
              tablet={8}
              mobile={16}
            >
              <Zoom in={true} timeout={1500}>
                <img src={mobileImage} className={classes.image} />
              </Zoom>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column
              className={classes.columnCentered}
              computer={16}
              tablet={16}
              mobile={16}
            >
              <h1 className={`${classes.Heading} ${classes.Inverted}`}>
                En problemfri sagsbehandling
              </h1>
              <Grid centered className={classes.IntroCardsContainer}>
                {trail.map((props, index) => (
                  <Grid.Column computer={4} tablet={4} mobile={14} key={index}>
                    <animated.div style={props}>
                      <NewCard
                        withArrow={trail.length !== index + 1 ? true : false}
                      >
                        <h4 className={classes.Heading}>
                          {cards[index].header}
                        </h4>
                        <div
                          className={`${classes.Subheading} ${classes.Medium}`}
                        >
                          {cards[index].description}
                        </div>
                      </NewCard>
                    </animated.div>
                  </Grid.Column>
                ))}
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        {triangle}
      </Container>
      <Container className={classes.Container}>
        <h1 className={`${classes.DarkText} ${classes.Heading}`}>
          Anerkendt af
        </h1>
        <div className={`${classes.Subheading}`}>
          Lommejuristen er et anerkendt brand indenfor legaltech, virksomhederne
          elsker os.
        </div>
        <div className={classes.LogosWrapper}>
          <img src={DRLogo} alt="DR" />
          <img src={LegoLogo} alt="LEGO" />
          <img src={TV2Logo} alt="TV2" />
          <img src={TaenkLogo} alt="Taenk" />
          <img src={MaerskLogo} alt="MAERSK" />
        </div>
      </Container>
      <Grid className={classes.Container} container>
        <Grid.Row>
          <Grid.Column computer={16}>
            <h1 className={`${classes.Heading} ${classes.TextLeft}`}>
              Lovgivnings områder
            </h1>
          </Grid.Column>
        </Grid.Row>
        {cards.map((card) => (
          <Grid.Column computer={8}>
            <NewCard
              icon={cardIcon}
              title="Købeloven"
              text="Har du købt et TV, fået en håndværker til at udføre noget arbejde, eller har du lånt en ting? Robotten kan hjælpe dig med alle de problemer du møder i hverdagen."
              alignment="horizontal"
            ></NewCard>
          </Grid.Column>
        ))}
      </Grid>

      <Container fluid style={{ height: '1600px', marginBottom: '150px' }}>
        <NewChat />
      </Container>
      <Container className={classes.Container}>
        <h1 className={`${classes.DarkText} ${classes.Heading}`}>FAQ</h1>
        <Grid centered>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Accordion options={FAQOptions} />
          </Grid.Column>
          <Grid.Column computer={8} tablet={8} mobile={16}>
            <Accordion options={FAQOptions} />
          </Grid.Column>
        </Grid>
      </Container>
      <footer>
        <Grid container>
          <Grid.Row>
            <Grid.Column computer={16}>
              <Divider />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column computer={4}>
              <ul className={classes.FooterList}>
                <li>
                  <h3 className={`${classes.heading} ${classes.TextLeft}`}>
                    Lommejuristen
                  </h3>
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.NoLink} ${classes.TextLeft}`}
                >
                  +45 28 40 45 00
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.NoLink} ${classes.TextLeft}`}
                >
                  Åbningstider: {'\n'}
                  Mandag-Fredag: 8-16 {'\n'}
                  Lørdag-Søndag: lukket
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column computer={3}>
              <ul className={classes.FooterList}>
                <li>
                  <h3 className={`${classes.heading}  ${classes.TextLeft}`}>
                    Følg os
                  </h3>
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Facebook
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Medium
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Twitter
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column computer={3}>
              <ul className={classes.FooterList}>
                <li>
                  <h3
                    className={`${classes.heading} ${classes.Normal} ${classes.TextLeft}`}
                  >
                    Virksomhed
                  </h3>
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Om os
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Blog
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Presse
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column computer={3}>
              <ul className={classes.FooterList}>
                <li>
                  <h3 className={`${classes.heading} ${classes.TextLeft}`}>
                    Produkt
                  </h3>
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  FAQ
                </li>
              </ul>
            </Grid.Column>
            <Grid.Column computer={3}>
              <ul className={classes.FooterList}>
                <li>
                  <h3 className={`${classes.heading} ${classes.TextLeft}`}>
                    Juridisk
                  </h3>
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Privatpolitik
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Handelsbetingelser
                </li>
                <li
                  className={`${classes.Subheading} ${classes.Normal} ${classes.TextLeft}`}
                >
                  Cookies Politik
                </li>
              </ul>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </footer>
    </>
  );
};

export default MainLayout;
