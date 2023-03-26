import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import { updateSearchTerms } from "../SearchServices/updateSearchTerms"
import ArticleDetails from "../ArticleDetails/ArticleDetails"

export default function ArticleDetailsContainer() {
  const [data, setData] = useState({})
  const { id } = useParams()

  useEffect(() => {
    const db = getFirestore()
    const getItem = doc(db, "blogs", id);
    getDoc(getItem).then((snapshot) => {
      if (snapshot.exists()) {
        const articleData = snapshot.data();
        setData({
          id: snapshot.id,
          title: articleData.title,
          content: articleData.content,
          date: articleData.date,
          formattedDate: articleData.date.toDate().toLocaleDateString("es-ES", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          ...snapshot.data() 
        });
        updateSearchTerms(snapshot.id, articleData.searchTerms);
      }
    }).catch(err => console.log(`Articulo no encontrado ${err}`))
  }, [id])

  return (
    <section>
      {data.id && <ArticleDetails {...data} />}
    </section>
  );
}
