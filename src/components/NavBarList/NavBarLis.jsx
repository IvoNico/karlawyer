import React, { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './NavBarlist.css';
import initWow from '../../Utils/Wowjs/Wowjs';
import { X } from 'react-feather';
import { fetchSocialImages } from '../FetchSocialImage/FetchSocialImage';
import { Link } from 'react-router-dom';

export default function NavBarList() {
    const [images, setImages] = useState({});
    const [showSearch, setShowSearch] = useState(false);

    const handleImageClick = () => {
    setShowSearch(!showSearch);
    };

    const handleRemoveSearchBar = () => {
    setShowSearch(false);
    };

    useEffect(() => {
        initWow();
        fetchSocialImages().then((images) => {setImages(images);}).catch((error) => {console.error(error);});
    }, []);

return (
    <div className='navBarSocial'>
        <Link className='NavredesLInks' to="https://instagram.com/karlawyer06?igshid=YmMyMTA2M2Y=" target="_blank"><img className="redesNavBar" src={images.instagram} alt="logo-Instagram" /></Link>
        <Link className='NavredesLInks' to="https://twitter.com/karlagribaudo?s=11&t=Wj6Zb42sSoVq_lD6_7KCfQ" target="_blank"><img className="redesNavBar" src={images.facebook} alt="logo-Facebook" /></Link>
        <Link className='NavredesLInks' to="https://www.linkedin.com/in/karla-eliana-gribaudo-8269461b1" target="_blank"><img className="redesNavBar" src={images.linkedin} alt="logo-Linkedin" /></Link>
        <img className="redesNavBar cursor" src={images.lupa} alt="logo-Lupa" onClick={handleImageClick} />
        {showSearch && (
            <div className='wow searchBar animate__animated animate__backInDown'>
                <SearchBar />
                <button className="remove-searchbar-button" onClick={handleRemoveSearchBar}>  <X className='btn'   /></button>
            </div>
        )}
    </div>)}

