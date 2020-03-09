import React from 'react';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledButton = styled.button`
  font-family: 'Roboto';
  border: 0;
  text-align: center;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
  background: #046cec;
  color: #fff;
  transition: 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #3180e0;
  }
`;

const CTAButton = ({ buttonText, children, className }) => {
  return <StyledButton className={className}>{children}</StyledButton>;
};

export default CTAButton;
