import React from 'react'

function Card({icon,count,title,subText}) {
  return (
    <div className="card-container">
    <img src={icon} alt/>
    <div className="card-count">{count}</div>
    <div className="card-title">{title}</div>
    <div className="card-subText">{subText}</div>
    </div>
  )
}

export default Card