import React from 'react'
import classes from './NewCard.module.css'

const NewCard = ({children}) => {

    return (
        <div className={classes.Card}>
            {children}
        </div>
    )
}

export default NewCard