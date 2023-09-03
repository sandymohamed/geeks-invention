import React from 'react'
import '../styles';
import { g } from '../assets';
import ParticleBackground from './ParticleBackground';

// -----------------------------------------------------------------------
const WelcomePage = () => {
  return (

    <section className='welcome'
      style={{
        backgroundImage: `url(${g})`,
        backgroundRepeat: 'no-repeat',

        backgroundSize: '100% 100%',

      }}
    >
      <ParticleBackground  />

    </section>
  )
}

export default WelcomePage