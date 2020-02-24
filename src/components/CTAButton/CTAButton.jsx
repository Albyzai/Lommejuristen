import React from 'react'
import { Button } from 'semantic-ui-react'

const CTAButton = ({buttonText}) => {

    return (
        <Button color='green'>
            {buttonText}
        </Button>
    )
}

export default CTAButton