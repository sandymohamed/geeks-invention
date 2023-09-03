import React, { useState } from 'react';
import './styles';
import { logo } from './assets';

// ---------------------------------------------------------------------------
const Header = () => {

    const [activeLink, setActiveLink] = useState('home')
    const [menuClass, setMenuClass] = useState(false)
    const [navClass, setNavClass] = useState(false)

    const handleClick = (activeName) => {
        setActiveLink(activeName)
    }


    const handleMenueClick = () => {
        setMenuClass(!menuClass)
        setNavClass(!navClass)
    }

  

    return (
        <div className='header'>
            <div className='header-container'>
                <a rel="nofollow" href="index.html" className='logo-img'>
                    <img src={logo} alt="geeks" />
                </a>

                <a href="#" className={`device-menu ${menuClass ? 'open' : ''} `} onClick={() => handleMenueClick()}>

                    <div className="device-menu__i">
                        <span className='ft'></span>
                        <span className='sc'></span>
                        <span className='td'></span>
                    </div>
                </a>


                <ul className={`nav ${navClass ? 'active-nav' : ''} `}>

                    <li className={activeLink === 'home' ? 'active' : ''} >
                        <a className='one' href='#' onClick={() => handleClick('home')}>home </a>
                    </li>

                    <li className={activeLink === 'works' ? 'active' : ''}>
                        <a className='two' href='#' onClick={() => handleClick('works')}> works </a>
                    </li>

                    <li className={activeLink === 'technologies' ? 'active' : ''}>
                        <a className='one' href='#' onClick={() => handleClick('technologies')}>technologies </a>
                    </li>

                    <li className={activeLink === 'services' ? 'active' : ''}>
                        <a className='two' href='#' onClick={() => handleClick('services')}>services </a>
                    </li>

                    <li className={activeLink === 'compan' ? 'active' : ''}>
                        <a className='one' href='#' onClick={() => handleClick('compan')}>compan </a>
                    </li>

                    <li className={activeLink === 'contacts' ? 'active' : ''}>
                        <a className='two' href='#' onClick={() => handleClick('contacts')}>contacts </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Header