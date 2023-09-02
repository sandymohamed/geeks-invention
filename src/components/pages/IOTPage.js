import React from 'react'
import { industryIOT } from '../assets';
import '../styles';
import { Parallax } from 'react-scroll-parallax';


//  ---------------------------------------------------------
const IOTPage = () => {
    return (

        <section className='page-container iot '>

            <div className='left'  >
                <div className='content-container'  data-aos="fade-up" data-aos-delay="200">
                    <h3 className='title'>Industrial IoT</h3>
                    <p className='subtitle'>Providing a better connected experience</p>

                    <div className='chips-container'>
                        <p className='chips'>Connected manufacturing  </p>
                        <p className='chips'>Aviation  </p>
                        <p className='chips'>Smart Building</p>

                    </div>

                    <p className='text'>Revolutionize your industry with our innovative IoT solutions. Our software development services offer connected manufacturing, pollution control, smart transportation, and intelligent farming, agriculture, and forestry. With our expertise, you can harness the power of technology to increase efficiency, reduce waste, and optimize operations for a sustainable future.</p>

                    <a className='btn-more ' href='#'> <span>see full case study</span> </a>
                </div>

            </div>

            <div className='right img-container'>
                <img src={industryIOT} alt="fintech" />

            </div>

        </section>
    )
}

export default IOTPage