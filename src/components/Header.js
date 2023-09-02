import React, { useState } from 'react';
import './styles';
import { logo } from './assets';

// ---------------------------------------------------------------------------
const Header = () => {

    const [activeLink, setActiveLink] = useState('home')

    const handleClick = (activeName) => {
        console.log('click');
        setActiveLink(activeName)
    }
    return (
        <div className='header'>
            <div className='header-container'>
                {/* <h1 className='logo'> Geeks <span> Invention</span> </h1> */}
                <a rel="nofollow" href="index.html">
                    <img src={logo} alt="geeks" />
                </a>
                <ul className='nav'>
                    <li className={activeLink === 'home'? 'active': ''}> <a href='#' onClick={()=> handleClick('home')}>home </a> </li>
                    <li className={activeLink === 'works'? 'active': ''}> <a href='#' onClick={()=> handleClick('works')}> works </a> </li>
                    <li className={activeLink === 'technologies'? 'active': ''}> <a href='#' onClick={()=> handleClick('technologies')}>technologies </a> </li>
                    <li className={activeLink === 'services'? 'active': ''}> <a href='#' onClick={()=> handleClick('services')}>services </a> </li>
                    <li className={activeLink === 'compan'? 'active': ''}> <a href='#' onClick={()=> handleClick('compan')}>compan </a> </li>
                    <li className={activeLink === 'contacts'? 'active': ''}> <a href='#' onClick={()=> handleClick('contacts')}>contacts </a> </li>
                </ul>
            </div>
        </div>
    )
}

export default Header