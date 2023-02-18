import './NewsCard.scss'
import React from 'react'

const NewsCard = ({column, row, number}) => {
  return (
    <div className='news-card-container' style={{gridColumn: column, gridRow: row}}>
        {number}
    </div>
  )
}

export default NewsCard