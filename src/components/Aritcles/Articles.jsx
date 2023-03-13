import React from 'react'
import { Link } from 'react-router-dom'
import './Articles.css'

export default function Articles({img, alt, name, description, parrafo, id}) {
  return (
    
      <article className='articles'>
      <Link to={`/article/${id}`}>
        <img className='img' src={img} alt={alt}/>
        <h3>{name}</h3>
        <h4>{description}</h4>
        <p>{parrafo}</p>
        </Link>
    </article>
    
    
  )
}
