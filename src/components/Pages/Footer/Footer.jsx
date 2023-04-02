import React, { useEffect, useState } from 'react';
import {getDownloadURL, ref } from 'firebase/storage'
import { storage } from '../../../firebase/firebase';
import initWow from '../../../Utils/Wowjs/Wowjs';
import { fetchSocialImages } from '../../FetchSocialImage/FetchSocialImage';
import './Footer.css'
import { Link, NavLink } from 'react-router-dom';
import Variants from '../../../Utils/Loadings/LoadingsLogos';

export default function Footer() {
  const [imagen, setImageN] = useState({});
  const logoRefe= ref(storage, "gs://karlawyer-3efd3.appspot.com/logos/logoKarlawyer.jpeg")
  const [logoRefUrl, setLogoRefUrl] = useState("");

  useEffect(() => {
    initWow();
    fetchSocialImages().then((images) => {
      setImageN(images);
    }).catch((error) => {
        console.error(error);
    });
}, []);

  //Traer la imagen del logo al banner
useEffect(() => {
    getDownloadURL(logoRefe).then((url) => {setLogoRefUrl(url);}).catch((error) => {console.error(error);});}, [logoRefe]);

    const handleEmailClick = () => {
    window.location.href = 'mailto:contacto.karlawyer@gmail.com';
    };

    const [loading, SetLoading] = useState(true)
  useEffect(()=>{
      setTimeout(()=>{
          SetLoading(false)
      }, 1000)
  }, [])


    return (
    <footer className='footer'>
      
        <NavLink className='logoFooter' to='/'>
        <img className='logoFooterImg' src={logoRefUrl} alt="logo" />
        </NavLink>
        <p className='footerParrafo'>Karlawyer-Copyright © 2023.
        Todos los derechos reservados.</p>
        <div className=' footerRedes '>
            <div className='footerSociales'>
            { loading ? <Variants className="loadingLogoFooter"/> :
            <>
                <Link className='redesLInks' to="https://instagram.com/karlawyer06?igshid=YmMyMTA2M2Y=" target="_blank"><img className="redes" src={imagen.instagram} alt="logo-Instagram" /></Link>
                <Link className='redesLInks' to="https://twitter.com/karlagribaudo?s=11&t=Wj6Zb42sSoVq_lD6_7KCfQ" target="_blank"><img className="redes" src={imagen.facebook} alt="logo-Facebook" /></Link>
                <Link className='redesLInks' to="https://www.linkedin.com/in/karla-eliana-gribaudo-8269461b1" target="_blank"><img className="redes" src={imagen.linkedin} alt="logo-Linkedin" /></Link></>}
            </div>
            <button className='mail' onClick={handleEmailClick}>contacto.karlawyer@gmail.com</button>
        </div>
    </footer>
    );
}
