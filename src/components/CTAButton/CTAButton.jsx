import React from 'react';
import { Button } from 'semantic-ui-react';

const CTAButton = ({ buttonText }) => {
  return (
    <Button color="green" style={{ marginTop: '20px' }}>
      {buttonText}
    </Button>
  );
};

export default CTAButton;
