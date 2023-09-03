import React from 'react'
import '../styles';

// -------------------------------------------------------------------------------------

const KnowUs = () => {
  return (
    <section className="centered-container know" 
    data-aos="fade-down"
    data-aos-easing="linear"
          data-aos-delay="300">
    <h2 className="centered-title know-title">Get to know us better!</h2>
    <p className="centered-text know-text">
    It is a pleasure to have you on our website. Let us know if there&apos;s an opportunity to do something together.
    </p>
    <a className='know-btn ' href='#'> Drop us a message </a>

  </section>  )
}

export default KnowUs