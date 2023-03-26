import {useState, useEffect} from 'react'
import {getItemsFromFirestore} from '../../firebase/CallToFirebase/CallToFirebase'
import ListArticles from '../ListArticle/ListArticle'
import './ContainerListArticles.css'

export default function ItemsListContainer () {
  const [items, setItems] = useState([])

  useEffect(() => {
    getItemsFromFirestore()
      .then((itemsArray) => {
        setItems(itemsArray);
      })
      .catch((error) => {
        console.error("Error getting documents: ", error);
      });
  }, []);

  return (
    <main className="sectionItems">
      <h1 className='title'>PARA FREELANCERS Y NÓMADES DIGITALES QUE BUSCAN INFORMARSE SOBRE ASPECTOS LEGALES Y FISCALES DE SU TRABAJO PARA OPTIMIZAR SU SITUACIÓN FINANCIERA.</h1>
      <div className='sectionArticles'>
        <h2 className='titleArticulo'>Artículos</h2>
        <div className="articleList">
          {items.length === 0 ? (
            <p>No hay blogs disponibles.</p>
            ) : (
              <ListArticles articles={items.map(item => ({...item, date: item.date.toDate()}))} />
          )}
        </div>
        
      </div>
    </main>
  )
}
