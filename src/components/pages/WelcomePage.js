import React from 'react'
import '../styles';
import ParticlesComp from './ParticleBackground';

// -----------------------------------------------------------------------
const WelcomePage = () => {
  return (
    <section className='welcome'
    // style={{background: '#fff'}}
    >

<ParticlesComp />

        <p>EMBRACE THE FUTURE</p>
        <p>Welcome to the Age of Action</p>
    </section>
  )
}

export default WelcomePage