import React, { useEffect, useRef, useState } from 'react';
import ChatBubble from './ChatBubble/ChatBubble';
import classes from './Chat.module.css';

const Chat = () => {
  const [state, setState] = useState(0);

  const choices = [{ text: 'Under 2 år siden' }, { text: 'Over 2 år siden' }];

  const choices2 = [{ text: 'Ja' }, { text: 'Nej' }];

  const renderNextBubble = () => {
    const newState = state + 1;
    setState(newState);
    console.log('test state', state);
  };

  return (
    <div className={classes.chatWrapper}>
      {/* <ChatBubble  isReply={true} typist={true} animationDelay={0} animationCallback={renderNextBubble}>
                Kom i gang
            </ChatBubble> */}

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
    </div>
  );
};

export default Chat;
