import React from 'react'
import './ArticlesDetails.css'

export default function ArticleDetails({name, img, alt, subtitle,formattedDate, parrafo, parrafo2, parrafo3, img2, alt2}) {
  
  return (
    <section className='unicoArticle'>
      <h1 className='unicoArtTitle'>{name}</h1>
      <article>
        <img className='unicoImg1' src={img} alt={alt}/>
        <h4 className='unicoSubtitle'>{subtitle}</h4>
        <p>{parrafo}</p>
        <p className='unicoParrafo2'>{parrafo2}</p>
        <img src={img2} alt={alt2}/>
        <p>{parrafo3}</p>
        
    </article>
    <div className='Author'>
      <p><em>Por Karla Gribaudo</em></p>
      <p>Publicado el {formattedDate}</p>
    </div>
    </section>
  )
}
