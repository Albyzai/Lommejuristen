import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: #fff;
  color: #000;
  padding: 3em;
  border-radius: 10px;
  height: 400px;
  -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
    0 15px 12px rgba(0, 0, 0, 0.22);
  -moz-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
    0 15px 12px rgba(0, 0, 0, 0.22);
  -ms-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
    0 15px 12px rgba(0, 0, 0, 0.22);
  -o-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05), 0 1px 12px rgba(0, 0, 0, 0.1);

  &.horizontal {
    flex-direction: row;
    padding: 2em;
    min-height: 175px;
    max-height: 175px;
  }

  &.withArrow::after {
    font-family: 'Font Awesome 5 Pro';
    display: block;
    box-sizing: border-box;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    content: '\f054';
    position: absolute;
    font-size: 1.2em;
    color: #0700dd;
    background: #fff;
    border: 1px solid #0700dd;
    z-index: 10;
    text-align: center;
    line-height: 50px;

    -webkit-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);
    -moz-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);
    -ms-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);
    -o-box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
      0 15px 12px rgba(0, 0, 0, 0.22);
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }

  @media only screen and (max-width: 991px) {
    padding: 1.5em;
  }

  @media only screen and (min-width: 768px) {
    &.withArrow::after {
      content: '\f054';
      right: -38px;
      top: 50%;
      margin-top: -25px;
    }
  }

  @media only screen and (max-width: 767px) {
    min-height: 200px;
    max-height: 200px;
    flex-direction: row;

    &.withArrow::after {
      content: '\f107';
      right: 50%;
      bottom: -38px;
      margin-right: -25px;
    }
  }
`;

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.alignment === 'horizontal' ? '30%' : '100%')};
  // padding: 1.5em;
  // padding: 10px;
  // padding-bottom: ${(props) =>
    props.alignment === 'horizontal' ? '10px' : '1.5em'};

    ${(props) =>
      props.alignment === 'horizontal'
        ? 'padding-right: 1.5em'
        : 'padding-bottom: 1.5em'};

  @media only screen and (max-width: 767px) {
    width: 30%;
    padding-bottom: 0;
    padding-right: 1.5em;
    // padding-bottom: 0;

    &.withArrow::after {
      content: '\f107';
      right: 50%;
      bottom: -38px;
      margin-right: -25px;
    }
  }
`;

const CardContent = styled.div`
  // padding-left: 25px;
`;

const CardHeading = styled.h4`
  font-family: 'Roboto';
  color: #404f54;
  font-weight: 700;
  font-size: 1.5em;
  text-align: left;
`;

const CardText = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1.1em;
  color: #818a8f;
  margin-bottom: 50px;
  text-align: left;
`;

const NewCard = ({ icon, title, text, withArrow, alignment, children }) => {
  return (
    <Card
      className={`${withArrow ? 'withArrow' : ''} ${
        alignment === 'horizontal' ? 'horizontal' : ''
      }`}
    >
      {icon ? <IconWrapper alignment={alignment}>{icon}</IconWrapper> : null}
      <CardContent>
        {title ? <CardHeading>{title}</CardHeading> : null}
        {text ? <CardText>{text}</CardText> : null}
        {children}
      </CardContent>
    </Card>
  );
};

export default NewCard;
