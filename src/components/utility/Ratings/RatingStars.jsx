import React from 'react'

const RatingStars = (props) => {

    const {index, calculateWidth} = props;

  return (
    <div className="ratings">
        <div className="empty-stars"></div>
        <div className="full-stars" 
        style={{ width: calculateWidth(index) }}></div>
    </div>
  )
}

export default RatingStars