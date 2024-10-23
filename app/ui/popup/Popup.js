import React from 'react'
import classes from './popup.module.css'
const Popup = ({message}) => {
  return (
    <div className={classes['container']}>
        <p className={classes['message']}>
            {message}
        </p>
    </div>
  )
}

export default Popup