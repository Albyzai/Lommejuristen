import React from 'react';
import classes from './ChatBubble.module.css';
import Typist from 'react-typist';
import ChatChoices from '../ChatChoices/ChatChoices';
import ScrollAnimation from 'react-animate-on-scroll';

const chatBubble = (props) => {
  const { isReply, animationDelay, animationCallback, chatChoices } = props;
  let text = props.children;

  const typistCursor = {
    hideWhenDone: true,
    hideWhenDoneDelay: 200
  };

  if (props.typist) {
    text = (
      <Typist cursor={typistCursor}>
        <Typist.Delay ms={600} />
        {props.children}
      </Typist>
    );
  }

  return (
    <ScrollAnimation
      animateIn="fadeIn"
      duration={1}
      delay={animationDelay}
      animateOnce={true}
      afterAnimatedIn={animationCallback}
    >
      <div
        className={`${classes.chatLine} ${
          isReply ? classes.chatLineWhite : classes.chatLineBlue
        }`}
      >
        <div
          className={`${
            isReply ? classes.chatBubbleBlue : classes.chatBubbleWhite
          } ${classes.chatBubble}`}
        >
          <div>{text}</div>
        </div>
      </div>
      {chatChoices ? <ChatChoices choices={chatChoices} /> : null}
    </ScrollAnimation>
  );
};

export default chatBubble;
