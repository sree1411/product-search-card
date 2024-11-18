import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({movie}) => {
  const {id, title, price,description, category, image} = movie
  return (
    <div className='card' style={{width: "19rem", margin:"3px", padding:"10px"}}>
    <Link to={`movies/${id}`}>
    <img src={image} className="card-img-top" alt="..."/>
    </Link>
    <div className="card-body">
      <p className="card-text"> Title {title}</p>
      <p className="card-text"> Description{description}</p>
      <p className="card-text"> category{category}</p>
      <p className="card-text"> Price{price}</p>
      <Link to={`movies/${id}`} className='btn btn-primary'> Click here  </Link>
    </div>
    
</div>
  )
}
