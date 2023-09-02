import React from 'react'
import '../styles';
import { logo } from '../assets';

// -------------------------------------------------------------------------------------------------------------

const Footer = () => {
    return (
        <section className='footer'>
            <div className='footer-logo'>
                <a rel="nofollow" href="index.html">
                    <img src={logo} alt="geeks" />
                </a>

                <p> 
                    447 Broadway, 2nd Floor Suite #772, New York 10013, United States
                    <br /> 
                    +1-347-535-0004 
                    </p>
            </div>

            <nav>
                <ul class="clearfix">
                    <li>
                        <a rel="nofollow" href="works/">
                            <span>Works</span>
                        </a>
                    </li>
                    <li>
                        <a rel="nofollow" href="technologies/">
                            <span>Technologies</span>
                        </a>
                    </li>
                    <li>
                        <a rel="nofollow" href="services/">
                            <span>Services</span>
                        </a>
                    </li>
                    <li>
                        <a rel="nofollow" href="about/">
                            <span>Company</span>
                        </a>
                    </li>
                    <li>
                        <a rel="nofollow" href="contacts/">
                            <span>Contacts</span>
                        </a>
                    </li>
                    <li>
                        <a href="terms.html">
                        <span>Terms and Conditions</span>
                        </a>
                        <a href="privacy.html">
                        <span>Privacy Policy</span>
                        </a>
                    </li>
                </ul>
            </nav>

            <a rel="nofollow"
                href="#"
                class=" btn-white subscription-dialog"
                data-toggle="modal"
                data-target="#subscribeModal"
                data-backdrop="static"
            >Stay tuned for our updates</a></section>

    )
}

export default Footer