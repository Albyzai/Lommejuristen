import React from 'react';
import HeaderNavigation from '../../components/HeaderNavigation/HeaderNavigation';
import Section from '../../components/Section/Section';
import classes from './MainLayout.module.css';
import { Typography, Paper } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import FloatingArrow from '../../components/FloatingArrow/FloatingArrow';
import SubjectIcon from '@material-ui/icons/Subject';
import { Grid, Icon, Container, Header } from 'semantic-ui-react';
import Card from '../../components/Card/Card';
import ScrollAnimation from 'react-animate-on-scroll';
import Accordion from '../../components/Accordion/Accordion';
import CTAButton from '../../components/CTAButton/CTAButton'
import NewCard from '../../components/NewCard/NewCard'

//  assets
import mobileImage from '../../assets/images/newmobile.png';
import PdfIcon from '../../assets/icons/pdf-icon.svg';
import Chat from '../../components/Chat/Chat';
import Shape from '../../assets/images/header-bottom.svg';
import HalfRoundShape from '../../assets/images/half-round.svg';

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

const mainLayout = () => {
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

  const triangle = (
    <div className={classes.TriangleShape}>
      <svg className={classes.shapeFill} xmlns="http://www.w3.org/2000/svg" viewBox="5 0 249 130">
          <polygon  class="cls-1" points="0.46 0.76 0.46 132.76 257.46 132.76 0.46 0.76"/>
      </svg>
    </div>
  )

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

  return (
    <>
      <HeaderNavigation navItems={navItems} />
      <div className={classes.background}>
        <Container
          fluid
          style={{ paddingBottom: '150px' }}
          className={`${classes.introSection}`}
        >
          <Grid centered style={{ paddingTop: '150px' }}>
            <Grid.Column
              className={classes.columnCentered}
              computer={6}
              tablet={6}
              mobile={16}
            >
              <p className={`${classes.TextMargin} ${classes.AboveHeading}`}>
                Fordi adgangen til juridisk hjælp skal være for alle
              </p>
              <p className={`${classes.TextMargin} ${classes.Heading}`}>
                Danmarks Første Juridiske Robot
              </p>
              <p className={`${classes.TextMargin} ${classes.subheading}`}>
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
            <Grid.Column
            className={classes.columnCentered}
            computer={12}
            tablet={12}
            mobile={16}>
              <Grid centered>
              {cards.map((card) => (
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  {/* <Card
                    raised={true}
                    iconName={card.icon}
                    header={card.header}
                    description={card.description}
                    className={classes.TestCard}
                  /> */}
                  <NewCard>
                    <h1>{card.header}</h1>
                    <p>{card.description}</p>
                  </NewCard>
                </Grid.Column>
              ))}
            </Grid>
              
            </Grid.Column>
          </Grid>
          {/* {svg} */}
          {triangle}
          {/* <Container fluid className={`${classes.Container} ${classes.White}`}>
          <Header>Hvad kan robotten?</Header>
          <ScrollAnimation animateIn="fadeInUp">
            <Grid centered>
              {cards.map((card) => (
                <Grid.Column computer={5} tablet={5} mobile={16}>
                  <Card
                    raised={true}
                    iconName={card.icon}
                    header={card.header}
                    description={card.description}
                    className={classes.TestCard}
                  />
                </Grid.Column>
              ))}
            </Grid>
          </ScrollAnimation>
        </Container> */}
        </Container>

        
        <Container className={classes.Container} fluid>
          <Grid centered>
            <Grid.Column
              className={`${classes.columnCentered}`}
              computer={6}
              tablet={6}
              mobile={16}
            >
              <ScrollAnimation
                animateIn="slideInLeft"
                animateOut="slideOutLeft"
                className={` ${classes.SlideIn} ${classes.Left}`}
              >
                <div className={classes.Wrapper}>
                  <Typography
                    variant="h3"
                    className={classes.heading}
                    gutterBottom={true}
                  >
                    Hjælp robotten med at udforme klagen
                  </Typography>
                  <Typography variant="h6" className={classes.subheading}>
                    Ved at svare på en række smpørgsmål, vil chatbotten udforme
                    en skræddersyet klage til netop dit problem
                  </Typography>
                  <CTAButton buttonText="Tal med robotten" />
                </div>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column
              className={classes.columnCentered}
              computer={10}
              tablet={10}
              mobile={16}
            >
              <div className={classes.ContentContainer}>
                <Chat className={classes.Chat} />
              </div>
            </Grid.Column>
          </Grid>
        </Container>
        <Container fluid>
          <Grid centered>
            <Grid.Column
              className={`${classes.columnCentered}`}
              computer={10}
              tablet={10}
              mobile={16}
            >
              <div className={classes.ContentContainer}>
                <Paper elevation={3} className={classes.pdfPaper}>
                  <SubjectIcon style={{ height: '100%', width: '90%' }} />
                  <img
                    src={PdfIcon}
                    className={classes.pdfIcon}
                    alt=""
                    height="75px"
                  />
                </Paper>
              </div>
            </Grid.Column>
            <Grid.Column
              className={`${classes.columnCentered}`}
              computer={6}
              tablet={6}
              mobile={16}
            >
              <ScrollAnimation
                animateIn="slideInRight"
                className={` ${classes.SlideIn} ${classes.Right}`}
              >
                <div className={classes.Wrapper}>
                  <Typography
                    variant="h3"
                    className={classes.heading}
                    gutterBottom={true}
                  >
                    Få tilsendt klagen øjeblikkeligt
                  </Typography>
                  <Typography variant="h6" className={classes.subheading}>
                    Til slut når robotten har den nødvendige information, vil du
                    få muligheden for øjeblikkeligt at få tilsendt klagen for
                    kun 29 kr.
                  </Typography>
                  <CTAButton buttonText="Tal med robotten" />
                </div>
              </ScrollAnimation>
            </Grid.Column>
          </Grid>
        </Container>
        <Container>
          <Header>Hvilke lovområder?</Header>
          <Grid centered>
            {lawAreas.map((card) => (
              <Grid.Column computer={5} tablet={5} mobile={16}>
                <Card
                  raised={true}
                  color={card.color}
                  iconName={card.icon}
                  header={card.header}
                  description={card.description}
                />
              </Grid.Column>
            ))}
          </Grid>
        </Container>
        <Container className={classes.Container}>
          <Grid centered>
            <Grid.Column
              className={classes.columnCentered}
              computer={8}
              tablet={8}
              mobile={16}
            >
              <Typography
                variant="h3"
                className={classes.heading}
                gutterBottom={true}
              >
                Ofte stillede spørgsmål
              </Typography>
              <Typography variant="h6" className={classes.subheading}>
                Få svar på mange af de ofte stillede spørgsmål
              </Typography>
            </Grid.Column>
            <Grid.Column
              className={classes.columnCentered}
              computer={8}
              tablet={8}
              mobile={16}
            >
              <Accordion options={FAQOptions} />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    </>
  );
};

// const mainLayout = () => {
//     return (
//         <React.Fragment>
//             <HeaderNavigation navItems={navItems} />
//             <main className={classes.main}>
//                 <Section className={classes.section} color={'#fff'}>
//                     <Grid container justify="center" spacing={10}>
//                         <Grid item xs={12} sm={6} className={classes.grid} >
//                             <div>
//                                 <Typography variant='h3' className={classes.heading} gutterBottom={true}>
//                                     Øjeblikkelig juridisk hjælp
//                                 </Typography>
//                                 <Typography variant='h6' className={classes.subheading}>
//                                     Den første danske juridiske chatbot, få hurtig hjælp til dine problemer for kun 29 kr
//                                 </Typography>
//                             </div>
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <Zoom in={true} timeout={1500}>
//                                 <img src={mobileImage} className={classes.image} />
//                             </Zoom>
//                         </Grid>
//                     </Grid>
//                 </Section>
//                 <Section className={classes.section} >
//                     <Grid container justify="center" spacing={3}>
//                         <Grid item xs={12} sm={4} className={classes.grid} >
//                             <Paper>
//                                 Gratis rådgivning
//                             </Paper>
//                             <Paper>
//                                 Vi skriver klagen
//                             </Paper>
//                             <Paper>
//                                 5 minutter
//                             </Paper>
//                         </Grid>
//                         <Grid item xs={12} sm={4} className={classes.grid} >

//                         </Grid>
//                         <Grid item xs={12} sm={4} className={classes.grid} >

//                         </Grid>

//                     </Grid>
//                 </Section>
//                 <Section className={classes.section} >
//                     <Grid container justify="center" spacing={3}>
//                         <Grid item xs={12} sm={6} className={classes.grid} >
//                             <div>
//                                 <Typography variant='h3' className={classes.heading} gutterBottom={true}>
//                                     Hjælp robotten med at udforme klagen
//                                 </Typography>
//                                 <Typography variant='h6' className={classes.subheading}>
//                                     Ved at svare på en række smpørgsmål, vil chatbotten udforme en skræddersyet klage til netop dit problem
//                                 </Typography>
//                             </div>
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <Chat />
//                         </Grid>
//                     </Grid>
//                 </Section>
//                 <Section className={classes.section}>
//                     <Grid container justify="center" spacing={3}>
//                         <Grid item xs={12} sm={6} className={classes.grid} >
//                             <div>
//                                 <Typography variant='h3' className={classes.heading} gutterBottom={true}>
//                                     Få tilsendt klagen øjeblikkeligt
//                                 </Typography>
//                                 <Typography variant='h6' className={classes.subheading}>
//                                     Til slut når robotten har den nødvendige information, vil du få muligheden for øjeblikkeligt at få tilsendt klagen for kun 29 kr.
//                                 </Typography>
//                             </div>
//                         </Grid>

//                         <Grid item xs={12} sm={6}>
//                             <Paper elevation={3} className={classes.pdfPaper}>
//                                 <SubjectIcon style={{height: '100%', width: '90%'}} />
//                                 <img src={PdfIcon} className={classes.pdfIcon} alt="" height="75px" />
//                             </Paper>
//                         </Grid>
//                     </Grid>
//                 </Section>
//             </main>
//             <FloatingArrow />
//         </React.Fragment>
//     )
// }

export default mainLayout;
