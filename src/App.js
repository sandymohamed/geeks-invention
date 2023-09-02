// App.js
import React from 'react';
import './App.scss';
import Header from './components/Header';
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
  return (
    <div className="app">
      <Header />
      <WelcomePage />
      <Solution />
      <IOTPage />
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
