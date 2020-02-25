import React, { useEffect, useRef, useState } from 'react';
import ChatBubble from './ChatBubble/ChatBubble';
import classes from './Chat.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import Typist from 'react-typist';

const Chat = () => {
  const [state, setState] = useState(0);

  const [showInputText, setShowInputText] = useState(false);

  const [showInputField, setShowInputField] = useState(true);

  useEffect(() => {
    if (state === 6) {
      setTimeout(() => {
        setShowInputText(true);
        setTimeout(() => {
          setShowInputField(false);
        }, 1500);
      }, 2000);
    }
  }, [state]);

  const choices = [{ text: 'Under 2 år siden' }, { text: 'Over 2 år siden' }];

  const choices2 = [{ text: 'Ja' }, { text: 'Nej' }];

  const typistCursor = {
    hideWhenDone: true,
    hideWhenDoneDelay: 200
  };

  const inputTypist = <Typist cursor={typistCursor}>test@mail.com</Typist>;
  const inputPlaceholder = (
    <div className={classes.InputText}>Indtast din email her...</div>
  );
  const inputText = <Typist cursor={typistCursor}>test@mail.com</Typist>;

  const renderNextBubble = () => {
    const newState = state + 1;
    setState(newState);
  };

  return (
    <div className={classes.chatWrapper}>
      <ChatBubble
        isReply={false}
        animationDelay={0}
        animationCallback={renderNextBubble}
        chatChoices={choices}
      >
        <p>Hvornår købte du din vare?</p>
      </ChatBubble>

      {state >= 1 ? (
        <ChatBubble
          isReply={true}
          animationDelay={0}
          animationCallback={renderNextBubble}
        >
          Under 2 år siden
        </ChatBubble>
      ) : null}

      {state >= 2 ? (
        <ChatBubble
          isReply={false}
          animationDelay={0}
          animationCallback={renderNextBubble}
          chatChoices={choices2}
        >
          <p>Er det under 6 måneder siden at du bestilte/modtog dit køb?</p>
        </ChatBubble>
      ) : null}

      {state >= 3 ? (
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          delay={-0.25}
          animateOnce={true}
          afterAnimatedIn={renderNextBubble}
        >
          <div className={classes.DotContainer}>
            <div className={classes.Dot}></div>
          </div>
        </ScrollAnimation>
      ) : null}
      {state >= 4 ? (
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          delay={-0.25}
          animateOnce={true}
          afterAnimatedIn={renderNextBubble}
        >
          <div className={classes.DotContainer}>
            <div className={classes.Dot}></div>
          </div>
        </ScrollAnimation>
      ) : null}
      {state >= 5 ? (
        <ScrollAnimation
          animateIn="fadeIn"
          duration={0.5}
          delay={-0.25}
          animateOnce={true}
          afterAnimatedIn={renderNextBubble}
        >
          <div className={classes.DotContainer}>
            <div className={classes.Dot}></div>
          </div>
        </ScrollAnimation>
      ) : null}

      {state >= 6 ? (
        <>
          <ChatBubble
            isReply={false}
            animationDelay={0}
            animationCallback={renderNextBubble}
          >
            <p style={{ fontWeight: 'bold' }}>Du er næsten færdig</p>
            <p>
              Skriv din email nedenunder, så har vi en mulighed for at sende
              klagen til dig
            </p>
            <p style={{ fontWeight: 'bold' }}>
              Dobbelttjek at du har skrevet den rigtige mail!
            </p>
          </ChatBubble>
          {showInputField ? (
            <div className={classes.EmailInput}>
              {showInputText ? inputTypist : inputPlaceholder}
            </div>
          ) : null}
        </>
      ) : null}
      {state >= 7 && showInputField === false ? (
        <ChatBubble
          isReply={true}
          animationDelay={0}
          animationCallback={renderNextBubble}
        >
          <p>test@mail.com</p>
        </ChatBubble>
      ) : null}
      {state >= 8 ? (
        <div className={classes.PaymentWindow}>
          <div className={classes.PaymentWindowHeader}>
            <h1>www.lommejuristen.dk</h1>
            <span className={classes.Email}>test@mail.com</span>
          </div>
          <div className={classes.PaymentFormWrapper}>
            <div className={`${classes.PaymentInput} ${classes.CardNumber}`}>
              <i class="fal fa-credit-card"></i>
              <span>Kortnummer</span>
            </div>
            <div className={`${classes.PaymentInput} ${classes.CardNumber}`}>
              <i class="far fa-calendar"></i>
              <span>MM/ÅÅ</span>
            </div>
            <div className={`${classes.PaymentInput} ${classes.CardNumber}`}>
              <i class="fal fa-lock"></i>
              <span>CVC</span>
            </div>
            <input
              type="tel"
              placeholder="Kortnummer"
              name="cardnumber"
              id=""
            />
            <input type="tel" placeholder="MM/ÅÅ" name="cardnumber" id="" />
            <input type="number" placeholder="CVC" name="cardnumber" id="" />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Chat;
