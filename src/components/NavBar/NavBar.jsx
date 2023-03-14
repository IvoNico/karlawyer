import React, { useEffect, useState } from 'react'
import { getDownloadURL , ref } from 'firebase/storage'
import { storage } from '../../firebase/firebase'
import {NavLink, useLocation} from "react-router-dom";
import './NavBar.css';
import NavBarList from '../NavBarList/NavBarLis';


export default function NavBar() {
    const logoRef= ref(storage, "gs://karlawyer-3efd3.appspot.com/logos/logoKarlawyer.jpeg")
    const [logoUrl, setLogoUrl] = useState("");
    const location = useLocation();
    const path = location.pathname;

    

//Traer la imagen del logo al banner
useEffect(() => {
    getDownloadURL(logoRef).then((url) => {setLogoUrl(url);}).catch((error) => {console.error(error);});}, [logoRef]);

return (
    <nav className={`navbar ${path === "/" ? "home-page" : "other-page"}`}>
        <NavLink to='/' className={`navbar ${path === "/" ? "Logo" : "other-logo"}`}>
                <img className={`navbar ${path === "/" ? "logoImg" : "other-img"}`} src={logoUrl} alt="logo" />
        </NavLink>
        <div className='wow redesSociales animate__animated animate__backInDown'>
            <span className='aboutme'>Sobre mí</span>
            <NavBarList/>
            </div>
        </nav>
)
}




