import React from 'react'
import '../styles';
import { logo } from '../assets';

// -------------------------------------------------------------------------------------------------------------

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer'>

            <div className='footer-logo'>
                <p rel="nofollow" href="index.html">
                    <img src={logo} alt="geeks" />
                 </p>

                <p> 
                    447 Broadway, 2nd Floor Suite #772, New York 10013, United States
                    <br /> 
                    +1-347-535-0004 
                    </p>
            </div>

            <nav>
                <ul className="clearfix">
                    <li>
                        <p rel="nofollow" href="works/">
                            <span>Works</span>
                         </p>
                    </li>
                    <li>
                        <p rel="nofollow" href="technologies/">
                            <span>Technologies</span>
                         </p>
                    </li>
                    <li>
                        <p rel="nofollow" href="services/">
                            <span>Services</span>
                         </p>
                    </li>
                    <li>
                        <p rel="nofollow" href="about/">
                            <span>Company</span>
                         </p>
                    </li>
                    <li>
                        <p rel="nofollow" href="contacts/">
                            <span>Contacts</span>
                         </p>
                    </li>
                    <li>
                        <p href="terms.html">
                        <span>Terms and Conditions</span>
                         </p>
                        <p href="privacy.html">
                        <span>Privacy Policy</span>
                         </p>
                    </li>
                </ul>
            </nav>

            <p rel="nofollow"
                href="#"
                className=" btn-white subscription-dialog"
                data-toggle="modal"
                data-target="#subscribeModal"
                data-backdrop="static"
                >Stay tuned for our updates </p>
            
                </div>

                <p className='muted-text'>© Copyright 2023 – Mobile App Design and Development Company. All Rights Reserved</p>
            </section>

    )
}

export default Footer