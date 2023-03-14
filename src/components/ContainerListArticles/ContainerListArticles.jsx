import {useState, useEffect} from 'react'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import ListArticles from '../ListArticle/ListArticle'
import './ContainerListArticles.css'

export default function ItemsListContainer () {
  const [items, setItems] = useState([])

  useEffect(() =>{
    const db = getFirestore()
    const productsCollection = collection(db, "blogs")
    getDocs(productsCollection)
      .then((snapshot) => {
        const itemsArray = snapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
        setItems(itemsArray)
      })
      .catch((error) => {
        console.error("Error getting documents: ", error)
      })
  }, [])

  return (
    <main className="sectionItems">
      <h2>Blogs</h2>
      <div className="articleList">
        {items.length === 0 ? (
          <p>No hay blogs disponibles.</p>
        ) : (
          <ListArticles articles={items} />
        )}
      </div>
    </main>
  )
}

