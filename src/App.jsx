import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Sections/Banner/banner';
import Community from './Sections/Community/Community';
import Ecosystem from './Sections/Ecosystem/ecosystem';

import Insights from './Sections/Insights/insights';
import Navbar from './Sections/Navbar/navbar';
import Navigator from './Sections/Navigator/navigator';
import Overview from './Sections/Overview/overview';
import Roadmap from './Sections/Roadmap/Roadmap';
import Map from './Sections/Map/map';
import Footer from './Sections/Footer/Footer';
import Concluding from './Sections/Footer/Concluding';
import Risk from './Sections/Navigator/risk';
import FinwingAccelerator from './Sections/accelarator/accelarator';
import FinwingFoundry from './Sections/foundry/foundry';
import FinwingArchitect from './Architect/architect';
import ContactForm from './Sections/Footer/ContactForm';
import FloatingPopup from './popup';

function App() {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = 'auto';
  };

  const handleIndexChange = (index) => {
    if (index < 1 && index > 0) {
      setIsScrollLocked(false);
      lockScroll();
    } else {
      setIsScrollLocked(false);
      unlockScroll();
    }
  };

  useEffect(() => {
    return () => {
      unlockScroll(); // Ensure scroll is unlocked when the component unmounts
    };
  }, []);



  return (
    <>
      <Navbar />
      <Banner id="banner" />
      <Overview id="overview" />
      <Ecosystem id="ecosystem" />
      <Navigator id="navigator" onIndexChange={handleIndexChange}/>
      <Risk id="risk" />
      <FinwingAccelerator id="accelerator" />
      <FinwingFoundry id="foundry" />
      <FinwingArchitect id="architect" />
      <Map id="map" />
      <Insights id="insights" />
      <Roadmap id="roadmap" />
      <Concluding id="concluding" />
      <ContactForm id="contact" />
      <Footer id="footer" />
      <FloatingPopup></FloatingPopup>
    </>
  );
}


export default App;
