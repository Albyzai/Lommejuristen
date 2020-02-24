import React from 'react'
import classes from './FloatingArrow.module.css'
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';

const floatingArrow = () => {

    return (
        <div className={classes.floatingArrowWRapper}>
            <DoubleArrowIcon className={classes.arrow} style={{ color: 'green', fontSize: '5rem' }} />
        </div>
    )
}

export default floatingArrow