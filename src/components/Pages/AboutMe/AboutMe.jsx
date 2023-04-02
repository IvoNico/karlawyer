import {useState, useEffect} from 'react'

import initWow from '../../../Utils/Wowjs/Wowjs';
import { fetchSocialImages } from '../../FetchSocialImage/FetchSocialImage';
import './AboutMe.css'

export default function AboutMe() {
    const [imagen, setImageN] = useState({});
    
    useEffect(() => {
        initWow();
        fetchSocialImages().then((images) => {
            setImageN(images);
        }).catch((error) => {
            console.error(error);
        });
    }, []);

    return (
    <section className='AboutMe'>
        <h1 className='aboutMeTitle'>Sobre mí</h1>
        <div className='aboutMeP1'>
            <div className='aboutMeP1Text'>
            <p>¡Hola! Soy Karla, abogada argentina. 
                Fundé Karlawyer en medio de un proceso de crecimiento personal y profesional mientras también intento cumplir mi sueño de salir de la zona de confort y redescrubir(me) viajando por distintas ciudades y países.</p>
                <p>Desde chica tuve interés por conocer nuevos lugares, pero no como turista, sino viviendo como un residente más aprendiendo nuevas perspectivas sobre la ley y cómo esta se aplica en diferentes lugares.</p>
                <p>Cuatro años antes de recibirme de abogada ya comencé a trabajar en áreas legales y judiciales, pero un año antes de recibirme comencé a planear emigrar y me volvia loca la idea de cómo continuar mi carrera de abogada afuera de Argentina, sin tener que realizar de nuevo la carrera para validar mi título. </p>
                <p>No viendo en el momento una solución, empecé a estudiar y desempeñarme de forma freelance en marketing digital, community managment y diseño ux.</p>
                <p>Fue un libro en 2023, el que me despertó la idea de combinar ambas áreas y se me ocurrió empezar a crear contenido de  aaspectos legales para freelancer y autonomos viajeros. Dar respuesta algunas certidumbres que como se me presentaron a mí mientras me desempeñaba como freelance, también se le deben presentar a otros colegas.</p>
            </div>
            <img className="aboutMeImg" src={imagen.imagek} alt="img Karla Gribaudo" />
            </div>
        <div className='aboutMeP1UX'>
        <img className="aboutMeImg1" src={imagen.imageUx} alt="img Ux desing karla" />
        <p>Si bien la idea de este blog es otorgar información legal o fiscal, también puede que enuentren datos sobre marketer y diseño web. Este blog y página web fue totalmente diseñado por mí (en cuanto a la experiencia al usuario) en medio de viajes, aeropuertos y mudanzas, por lo que espero que tu visita a estas páginas sea muy gratificante.</p>
        </div>
        <div className='aboutMeP3'>
            <p>En este blog, compartiré mis experiencias y conocimientos sobre diversos temas legales, en ayuda principalmente aquellos colegas freelancers y/o autónomos que desarrollan sus negocios digitales y viajan </p>
            <p>¡Gracias por visitar mi blog, espero que lo encuentres informativo y útil! </p>
        </div>
    </section>
  )
}
