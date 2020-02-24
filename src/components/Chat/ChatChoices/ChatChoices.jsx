import React from 'react';
import classes from './ChatChoices.module.css';

const chatChoices = ({ choices }) => {
  return (
    <div className={classes.chatLine}>
      <div className={classes.wrapper}>
        <p>VÆLG EN MULIGHED</p>
        <div className={classes.choicesWrapper}>
          {choices
            ? choices.map((choice) => (
                <div key={choice.text} className={classes.choice}>
                  {choice.text}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default chatChoices;
