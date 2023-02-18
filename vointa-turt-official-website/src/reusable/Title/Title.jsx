import './Title.scss'
import React from 'react'

const Title = ({title, color, width}) => {
  return (
    <div style={{color: color, width: width}} className='title-label'>{title.toUpperCase()}</div>
  )
}

export default Title