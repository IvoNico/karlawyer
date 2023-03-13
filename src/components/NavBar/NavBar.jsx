import React, { useEffect, useState } from 'react'
import { getDownloadURL, listAll, ref } from 'firebase/storage'
import { storage } from '../../firebase/firebase'
import './NavBar.css'

export default function NavBar() {
    const imageListRef= ref(storage, "utils/")
    const logoRef= ref(storage, "gs://karlawyer-3efd3.appspot.com/logos/logoKarlawyer.jpeg")
    const [imageList, setImageList] = useState([])
    const [logoUrl, setLogoUrl] = useState("");

useEffect(() => {
  getDownloadURL(logoRef)
    .then((url) => {
      setLogoUrl(url);
    })
    .catch((error) => {
      console.error(error);
    });
}, [logoRef]);
    useEffect(() => {
        listAll(imageListRef)
        .then(response => {
            const downloadPromises = response.items.map(item => getDownloadURL(item))
            Promise.all(downloadPromises)
            .then(urls => {
                // Add the new URLs to the existing imageList
                setImageList(prevList => [ ...urls])
            })
            .catch(error => {
                console.error(error)
            })
        })
        .catch(error => {
            console.error(error)
        })
    }, [imageListRef])
return (
    <nav className='navBar'>
            <div className='Logo'>
            <img src={logoUrl} alt="logo" />

            </div>
            <div className='redesSociales'>
            <span className='aboutme'>Sobre mí</span>
            {imageList.map((url, index)=>{return <img className='instagram' src={url} key={url} alt="redes"/>})}
            </div>
        </nav>
)
}




