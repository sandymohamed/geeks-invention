import React from 'react'
import { industryEducation } from '../assets';
import '../styles';


//  ---------------------------------------------------------
const SmartEducation = () => {
    return (
        <section className='page-container iot '>

            <div className='left'>
                <div className='content-container'  data-aos="fade-up" data-aos-delay="200">
                    <h3 className='title'>Smart Education</h3>
                    <p className='subtitle'>Elevate your Education Institution</p>

                    <div className='chips-container'>
                        <p className='chips'>Learning Management</p>
                        <p className='chips'> Course offering</p>
                        <p className='chips'>Professional Training</p>

                    </div>

                    <p className='text'>
                        Elevate your education institution with our comprehensive software solutions.
                         Learning management, course offerings, professional training, certification,
                          and school management tools to streamline your operations and enhance your
                           students&apos; learning experience. Trust us to provide the cutting-edge technology and
                            support you need to thrive in the ever-evolving education industry.
                            </p>

                    <a className='btn-more ' href='#'> <span>see full case study</span> </a>

                </div>

            </div>
            <div className='right img-container'>
                <img src={industryEducation} alt="fintech" />

            </div>

        </section>
    )
}

export default SmartEducation