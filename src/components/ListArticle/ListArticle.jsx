import React from 'react'
import Articles from '../Aritcles/Articles'

export default function ListArticles ({articles}) {

    return (
            articles.map(p =>
                <Articles key={p.id} {...p}  />
            )
    )
}

