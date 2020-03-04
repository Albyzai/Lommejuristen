import React, { useEffect, useRef, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import classes from './NewChat.module.css';
import { Typography } from '@material-ui/core';
import { Grid } from 'semantic-ui-react';

import ChatBubble from '../Chat/ChatBubble/ChatBubble';
import CTAButton from '../../components/CTAButton/CTAButton';
// You can use this `calc` method to increase the impact
// of the effect by playing around with the values and units.
const calc = (o) => `translateY(${o * 0.1}px)`;

const Comp = () => {
  const ref = useRef();
  const ref1 = useRef();

  //   console.log('ref1', ref1);

  const [{ offset, opacity1, opacity2, opacity3 }, set] = useSpring(() => ({
    offset: 0,
    opacity1: 0,
    opacity2: 0,
    opacity3: 0,
    config: { duration: 500 }
  }));

  const [activeRows, setActiveRows] = useState([false, false, false]);

  const handleScroll = () => {
    const posY = ref1.current.offsetTop;

    let newActiveRows = [...activeRows];
    let opacity1, opacity2, opacity3;
    if (newActiveRows) {
      if (posY < 200 && posY > 0) {
        // newActiveRows = [true, false, false];
        const opacity1 = 1;
        const opacity2 = 0;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY > 200 && posY < 400) {
        // newActiveRows = [false, true, false];
        const opacity1 = 0;
        const opacity2 = 1;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY > 400 && posY < 600) {
        // newActiveRows = [false, false, true];
        const opacity1 = 0;
        const opacity2 = 0;
        const opacity3 = 1;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY < 0) {
        const opacity1 = 1;
        const opacity2 = 0;
        const opacity3 = 0;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      } else if (posY > 600) {
        const opacity1 = 0;
        const opacity2 = 0;
        const opacity3 = 1;
        console.log('opacity1', opacity1);
        console.log('opacity1', opacity2);
        console.log('opacity1', opacity3);
        set({ opacity1, opacity2, opacity3 });
      }
    }

    console.log('opacity1', opacity1);
    console.log('opacity2', opacity2);
    console.log('opacity3', opacity3);

    console.log(newActiveRows);
    setActiveRows(newActiveRows);
  };

  const choices = [{ text: 'Under 2 år siden' }, { text: 'Over 2 år siden' }];

  const row1col1 = (
    <animated.div
      className={` ${classes.ContentContainer}`}
      style={{ opacity: opacity1 }}
    >
      <Typography
        variant="h3"
        className={`${classes.Heading} ${classes.TextLeft}`}
        gutterBottom={true}
      >
        Hjælp robotten med at udforme klagen 1
      </Typography>
      <Typography
        variant="h6"
        className={`${classes.Subheading} ${classes.TextLeft}`}
      >
        Ved at svare på en række smpørgsmål, vil chatbotten udforme en
        skræddersyet klage til netop dit problem
      </Typography>
      <CTAButton buttonText="Tal med robotten" />
    </animated.div>
  );

  const row2col1 = (
    <animated.div
      className={` ${classes.ContentContainer}`}
      style={{ opacity: opacity2 }}
    >
      <Typography
        variant="h3"
        className={`${classes.Heading} ${classes.TextLeft}`}
        gutterBottom={true}
      >
        Hjælp robotten med at udforme klagen 2
      </Typography>
      <Typography
        variant="h6"
        className={`${classes.Subheading} ${classes.TextLeft}`}
      >
        Ved at svare på en række smpørgsmål, vil chatbotten udforme en
        skræddersyet klage til netop dit problem
      </Typography>
      <CTAButton buttonText="Tal med robotten" />
    </animated.div>
  );

  const row3col1 = (
    <animated.div
      className={` ${classes.ContentContainer}`}
      style={{ opacity: opacity3 }}
    >
      <Typography
        variant="h3"
        className={`${classes.Heading} ${classes.TextLeft}`}
        gutterBottom={true}
      >
        Hjælp robotten med at udforme klagen 3
      </Typography>
      <Typography
        variant="h6"
        className={`${classes.Subheading} ${classes.TextLeft}`}
      >
        Ved at svare på en række smpørgsmål, vil chatbotten udforme en
        skræddersyet klage til netop dit problem
      </Typography>
      <CTAButton buttonText="Tal med robotten" />
    </animated.div>
  );

  const row1col2 = (
    <animated.div
      className={` ${classes.ContentContainer}`}
      style={{ opacity: opacity1 }}
    >
      <div className={`${classes.Chatbubble} test`}>
        <p>Hvornår købte du din vare?</p>
      </div>
      {/* <ChatBubble isReply={false} animationDelay={0} chatChoices={choices}>
      </ChatBubble> */}
    </animated.div>
  );

  const row2col2 = (
    <animated.div
      className={`${classes.Wrapper} ${classes.ContentContainer}`}
      style={{ opacity: opacity2 }}
    >
      <div className={`${classes.ChatChoicesWrapper}`}>
        <div className={classes.ChatChoice}>1</div>
        <div className={classes.ChatChoice}>2</div>
      </div>
    </animated.div>
  );

  const row3col2 = (
    <animated.div
      className={`${classes.Wrapper} ${classes.ContentContainer}`}
      style={{ opacity: opacity3 }}
    >
      <div className={classes.PaymentWindow}>
        <div className={classes.PaymentWindowHeader}>
          <h1>www.lommejuristen.dk</h1>
          <span className={classes.Email}>test@mail.com</span>
        </div>
        <div className={classes.PaymentFormWrapper}>
          <div className={`${classes.PaymentInput} ${classes.CardNumber}`}>
            <div className={classes.InputTextWrapper}>
              <i class="fal fa-credit-card"></i>
              <span>Kortnummer</span>
            </div>
          </div>
          <div className={`${classes.PaymentInput} ${classes.ExpiryDate}`}>
            <div className={classes.InputTextWrapper}>
              <i class="far fa-calendar"></i>
              <span>MM/ÅÅ</span>
            </div>
          </div>
          <div className={`${classes.PaymentInput} ${classes.CVC}`}>
            <div className={classes.InputTextWrapper}>
              <i class="fal fa-lock"></i>
              <span>CVC</span>
            </div>
          </div>
        </div>
      </div>
    </animated.div>
  );

  const row1 = (
    <>
      <Grid.Column computer={8}>
        <animated.div
          className={` ${classes.ContentContainer}`}
          style={{ opacity: opacity1 }}
        >
          <Typography
            variant="h3"
            className={`${classes.Heading} ${classes.TextLeft}`}
            gutterBottom={true}
          >
            Hjælp robotten med at udforme klagen 1
          </Typography>
          <Typography
            variant="h6"
            className={`${classes.Subheading} ${classes.TextLeft}`}
          >
            Ved at svare på en række smpørgsmål, vil chatbotten udforme en
            skræddersyet klage til netop dit problem
          </Typography>
          <CTAButton buttonText="Tal med robotten" />
        </animated.div>
      </Grid.Column>
      <Grid.Column computer={8}>
        <animated.div
          className={`${classes.Wrapper} ${classes.ContentContainer}`}
          style={{ opacity: opacity1 }}
        >
          <ChatBubble isReply={false} animationDelay={0} chatChoices={choices}>
            <p>Hvornår købte du din vare?</p>
          </ChatBubble>
        </animated.div>
      </Grid.Column>
    </>
  );

  const row2 = (
    <>
      <Grid.Column computer={6}>
        <animated.div
          className={`${classes.Wrapper} ${classes.ContentContainer}`}
          style={{ opacity: opacity2 }}
        >
          <Typography
            variant="h3"
            className={`${classes.Heading} ${classes.TextLeft}`}
            gutterBottom={true}
          >
            Hjælp robotten med at udforme klagen 2
          </Typography>
          <Typography
            variant="h6"
            className={`${classes.Subheading} ${classes.TextLeft}`}
          >
            Ved at svare på en række smpørgsmål, vil chatbotten udforme en
            skræddersyet klage til netop dit problem
          </Typography>
          <CTAButton buttonText="Tal med robotten" />
        </animated.div>
      </Grid.Column>
      <Grid.Column computer={6}>
        <animated.div
          className={`${classes.Wrapper} ${classes.ContentContainer}`}
          style={{ opacity: opacity2 }}
        >
          <ChatBubble isReply={false} animationDelay={0} chatChoices={choices}>
            <p>Hvornår købte du din vare?</p>
          </ChatBubble>
        </animated.div>
      </Grid.Column>
    </>
  );

  const row3 = (
    <>
      <Grid.Column computer={6}>
        <animated.div
          className={`${classes.Wrapper} ${classes.ContentContainer}`}
          style={{ opacity: opacity3, display: opacity3 ? 'block' : 'none' }}
        >
          <Typography
            variant="h3"
            className={`${classes.Heading} ${classes.TextLeft}`}
            gutterBottom={true}
          >
            Hjælp robotten med at udforme klagen 3
          </Typography>
          <Typography
            variant="h6"
            className={`${classes.Subheading} ${classes.TextLeft}`}
          >
            Ved at svare på en række smpørgsmål, vil chatbotten udforme en
            skræddersyet klage til netop dit problem
          </Typography>
          <CTAButton buttonText="Tal med robotten" />
        </animated.div>
      </Grid.Column>
      <Grid.Column computer={6}>
        <animated.div
          className={`${classes.Wrapper} ${classes.ContentContainer}`}
          style={{ opacity: opacity3, display: opacity3 ? 'block' : 'none' }}
        >
          <ChatBubble isReply={false} animationDelay={0} chatChoices={choices}>
            <p>Hvornår købte du din vare?</p>
          </ChatBubble>
        </animated.div>
      </Grid.Column>
    </>
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div
      style={{
        position: 'relative',
        width: '100vw',
        height: '2000px'
      }}
      ref={ref}
    >
      <animated.div
        style={{
          position: 'sticky',
          top: '50%',
          width: '100vw',
          height: '400px'
        }}
        ref={ref1}
      >
        <Grid container centered columns={2}>
          <Grid.Column computer={6} className={` ${classes.ContentContainer}`}>
            {row1col1}
            {row2col1}
            {row3col1}
          </Grid.Column>
          <Grid.Column computer={10} className={` ${classes.ContentContainer}`}>
            {row1col2}
            {row2col2}
            {row3col2}
          </Grid.Column>
        </Grid>
        {/* {activeRows[0] ? row1 : null}
        {activeRows[1] ? row2 : null}
        {activeRows[2] ? row3 : null} */}
      </animated.div>
    </div>
  );
};

export default Comp;
