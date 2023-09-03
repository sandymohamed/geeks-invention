// App.js
import React, { useEffect,  } from 'react';
import './App.scss';
import Header from './components/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  WelcomePage,
  Solution,
  DedicatedTeams,
  KnowUs,
  PlatformsPage,
  RecentClients,
  CheckoutPage,
  SmartEducation,
  IOTPage,
  Footer
} from './components/pages/index'


const App = () => {

  useEffect(() => {
    AOS.init();



  }, [])

  return (
    <div className='App' >

      <Header />
      <WelcomePage />
      <div
        className='blue'
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-delay="50"
      >

        <Solution />
        <IOTPage />
      </div>
      <SmartEducation />
      <CheckoutPage />
      <RecentClients />
      <PlatformsPage />
      <DedicatedTeams />
      <KnowUs />
      <Footer />
    </div>

  );
};

export default App;
