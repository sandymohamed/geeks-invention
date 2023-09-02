import React from 'react'
import { industryFintech } from '../assets';
import '../styles';
import { Parallax } from 'react-scroll-parallax';


//  ---------------------------------------------------------
const Solution = () => {
    return (
      
        <section
        // data-aos="fade-up"
        // data-aos-duration="30"
        className='page-container' 
        >

            <div className='left'>
                <div className='content-container' data-aos="fade-up" data-aos-delay="200">
                    <h3 className='title'>Fintech Solution</h3>
                    <p className='subtitle'>Transforming Fintech with AI</p>

                    <div className='chips-container'>
                        <p className='chips'>Fraud detection </p>
                        <p className='chips'>Transaction categorisation </p>
                        <p className='chips'>Risk Scoring</p>

                    </div>

                    <p className='text'>Empower your financial institution with our advanced fintech solutions. From real-time fraud detection to easy bookkeeping, our software development services provide credit risk scoring for accurate lending eligibility, transaction categorization for seamless organization, and anomaly detection to safeguard your assets</p>

                    <a className='btn-more ' href='#'> <span>see full case study</span> </a>
                </div>

            </div>
            <div className='right img-container'>
                <img src={industryFintech} alt="fintech" />

            </div>

        </section>
    )
}

export default Solution