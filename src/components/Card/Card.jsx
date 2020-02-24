import React from 'react'
import { Card as SemanticCard, Icon } from 'semantic-ui-react'
import classes from './Card.module.css';
import PropTypes from 'prop-types';

const Card = ({color, iconName, header, description}) => {
    
    return(
        <SemanticCard fluid className={classes.Card} color={color}>
            {iconName ? <Icon name={iconName} className={classes.icon} size='huge'   /> : null }
            <SemanticCard.Content className={classes.Content}>
                {header ? <SemanticCard.Header>{header}</SemanticCard.Header> : null }
                {description ? <SemanticCard.Description>{description}</SemanticCard.Description> : null }
            </SemanticCard.Content>
        </SemanticCard>
    )
}

Card.propTypes = {

}

Card.defaultProps = {

}

export default Card;