import React from 'react'
import PropTypes from 'prop-types';
import classes from './Section.module.css'

const section = ({ color, textColor, children }) => {

    return (
        <section className={classes.paddedSection} style={{backgroundColor: color, color: textColor}}>
            {children}
        </section>
    )
}

section.propTypes = {
    color: PropTypes.string,
    textColor: PropTypes.string,

}

section.defaultProps = {
}

export default section