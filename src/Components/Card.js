import React from 'react'
import './Card.css'

const Card = ({ image, title, description, rlink }) => {
  return (
    <a href={rlink} target='_blank' rel='noreferrer'>
      <div className='card'>
        <img className='card-img' src={image} alt={title} />
        <div className='info'>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    </a>
  )
}

export default Card
