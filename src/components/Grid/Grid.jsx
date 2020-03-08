import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin: 0;
`;

const OwnContainer = ({ isFluid, children }) => {
  return <StyledContainer fluid={isFluid}>{children}</StyledContainer>;
};

export default OwnContainer;
