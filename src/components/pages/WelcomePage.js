import React from 'react'
import '../styles';
import { Parallax } from 'react-parallax';
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
      <ParticleBackground opacity={0.5} />

    </section>
  )
}

export default WelcomePage