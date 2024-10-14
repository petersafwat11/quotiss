import React from 'react'
import classes from './group.module.css'
const group = ({title, percentage, number}) => {
  return (
    <div className={classes['group']}>
      <div className={classes['top']}>
      <h4 className={classes['title']}></h4>

      </div>
        <p className={classes['']}></p>
        <div className={classes['bottom']}>
          <span className={classes['number']}></span>
          <p className={classes['tag']}></p>
        </div>
    </div>
  )
}

export default group