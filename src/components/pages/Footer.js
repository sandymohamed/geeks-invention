import React from 'react'
import '../styles';
import { logo } from '../assets';

// -------------------------------------------------------------------------------------------------------------

const Footer = () => {
    return (
        <section className='footer-section'>
            <div className='footer'>

                <div className='footer-logo'>
                    <img src={logo} alt="geeks" />


                    <p>
                        447 Broadway, 2nd Floor Suite #772, New York 10013, United States
                        <br />
                        +1-347-535-0004
                    </p>
                </div>

                <nav>
                    <ul className="clearfix">
                        <li>

                            <span>Works</span>

                        </li>
                        <li>
                            <span>Technologies</span>
                        </li>
                        <li>
                            <span>Services</span>
                        </li>
                        <li>
                            <span>Company</span>
                        </li>
                        <li>
                            <span>Contacts</span>
                        </li>
                        <li>
                            <span>Terms and Conditions</span>
                        </li>
                        <li>
                            <span>Privacy Policy</span>
                        </li>
                    </ul>
                </nav>

                <p
                    className=" btn-white subscription-dialog"
                    data-toggle="modal"
                    data-target="#subscribeModal"
                    data-backdrop="static"
                >Stay tuned for our updates
                </p>

            </div>

            <p className='muted-text'>© Copyright 2023 – Mobile App Design and Development Company. All Rights Reserved</p>
        </section>

    )
}

export default Footer