import React from 'react';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  margin: 0;

  &.fluid.container {
    margin: 0 !important;
  }

  @media only screen and (max-width: 767px) {
    margin: 0 !important;
    .ui.container {
      margin: 0 !important;
    }

    &.fluid.container {
      margin: 0 !important;
    }

    &.ui.container {
      margin: 0 !important;
    }
  }
`;

const OwnContainer = ({ isFluid, children }) => {
  return <StyledContainer fluid={isFluid}>{children}</StyledContainer>;
};

export default OwnContainer;
