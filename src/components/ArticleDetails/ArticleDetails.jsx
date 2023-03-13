import React from 'react'

export default function ArticleDetails({title, img, alt, description, parrafo}) {
  return (
    <section>
        <article>
        <img src={img} alt={alt}/>
        <h3>{title}</h3>
        <h4>{description}</h4>
        <p>{parrafo}</p>
    </article>
    </section>
  )
}
