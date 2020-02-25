import React from 'react';
import classes from './NewCard.module.css';

const NewCard = ({ icon, title, text, withArrow, alignment, children }) => {
  console.log('witharrow:', withArrow);
  return (
    <div
      className={`${classes.Card} ${withArrow ? classes.WithArrow : ''} ${
        alignment === 'horizontal' ? classes.Horizontal : ''
      }`}
    >
      {icon ? <div className={classes.IconWrapper}>{icon}</div> : null}
      <div className={classes.Content}>
        {title ? <h4 className={classes.Heading}>{title}</h4> : null}
        {text ? <p className={classes.Subheading}>{text}</p> : null}
        {children}
      </div>
    </div>
  );
};

export default NewCard;
