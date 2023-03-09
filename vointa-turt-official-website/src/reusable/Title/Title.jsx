import './Title.scss'
import React from 'react'

const Title = ({title, color, width, fontSize}) => {
  return (
    <div style={{color: color, width: width, fontSize: fontSize}} className='title-label'>{title.toUpperCase()}</div>
  )
}

export default Title