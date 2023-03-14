import React, { useEffect, useState } from 'react'
import { getDownloadURL,  ref } from 'firebase/storage'
import { storage } from '../../firebase/firebase'
import SearchBar from '../SearchBar/SearchBar'
import './NavBarlist.css'
import initWow from '../../Utils/Wowjs/Wowjs'
import { X } from 'react-feather';



export default function NavBarList(){
    const imageInstagram= ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Instagram.svg")
    const imageFacebook= ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Facebook.svg")
    const imageLinkedin= ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Linkedin.svg")
    const imageLupita= ref(storage, "gs://karlawyer-3efd3.appspot.com/utils/Lupita.svg")
    const [imageInsta, setImageInsta] = useState("")
    const [imageFace, setImageFace] = useState("")
    const [imageLinke, setImageLinke] = useState("")
    const [imageLupi, setImageLupi] = useState("")
    const [showSearch, setShowSearch] = useState(false);

    const handleImageClick = () => {
    setShowSearch(!showSearch);
    };
    
    const handleRemoveSearchBar = () => {
    setShowSearch(false);
    };

    useEffect(() => {initWow();}, []);
    
    //Traer la imagen del logo al banner
    useEffect(() => {
        const imageRefs = [imageInstagram, imageFacebook, imageLinkedin, imageLupita];
        imageRefs.forEach(ref => {
            getDownloadURL(ref)
            .then((url) => {
                if (ref === imageInstagram) {
                    setImageInsta(url);
                } else if (ref === imageFacebook) {
                setImageFace(url);
                } else if (ref === imageLinkedin) {
                setImageLinke(url);
                } else if (ref === imageLupita) {
                setImageLupi(url);
                }
            })
            .catch((error) => {
                console.error(error);
            });
        });
        }, [imageInstagram, imageFacebook, imageLinkedin, imageLupita]);

return(
    <>
        <img className="instagram" src={imageInsta} alt="logo-Instagram" />
        <img className="instagram" src={imageFace} alt="logo-Facebook" />
        <img className="instagram" src={imageLinke} alt="logo-Linkedin" />
        <img className="instagram cursor" src={imageLupi} alt="logo-Lupa" onClick={handleImageClick} />
        {showSearch && (
            <div className='wow searchBar animate__animated animate__backInDown'>
                <SearchBar />
                <button className="remove-searchbar-button" onClick={handleRemoveSearchBar}>  <X size={30} width={15} height={15} />
 </button>
            </div>
        )}
    </>)}

