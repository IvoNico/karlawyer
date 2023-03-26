import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';

export default function Articles({ img, alt, name, date, id }) {
  const formattedDate = new Date(date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link to={`/article/${id}`}>
      <article className='articles'>
        
        <img className='img' src={img} alt={alt} />
        <div className='descriptionArticle'>
          <h3 className='articlesTitle'>{name}</h3>
          <p className='articlesFecha'>{formattedDate}</p>
        </div>
      </article>
    </Link>
  );
}
