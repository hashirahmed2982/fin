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
import EcosystemWrapper from './Sections/Ecosystem/eco';
import RoadmapWrapper from './Sections/Roadmap/road';
import ContactSection from './Sections/Footer/Contact';
import EventBannerPopup from './event';

function App() {
  const [isScrollLocked, setIsScrollLocked] = useState(false);
  const [isEventPopupOpen, setIsEventPopupOpen] = useState(true);

  const openEventPopup = () => setIsEventPopupOpen(true);
  const closeEventPopup = () => setIsEventPopupOpen(false);
 
  const handleIndexChange = (index) => {
    
  };

  


  return (
    <>
      <Navbar isEventPopupOpen={isEventPopupOpen} openEventPopup={openEventPopup}/>
      <Banner id="banner" />
      <Overview id="overview" />
      <EcosystemWrapper id="ecosystem" />
      <Navigator id="navigator" onIndexChange={handleIndexChange}/>
      <Risk id="risk" />
      <FinwingAccelerator id="accelerator" />
      <FinwingFoundry id="foundry" />
      <FinwingArchitect id="architect" />
      <Map id="map" />
      <Insights id="insights" />
      {/* <RoadmapWrapper id="roadmap" /> */}
      <Concluding id="concluding" />
      <ContactSection id="contact" />
      <Footer id="footer" />
       <FloatingPopup></FloatingPopup> 
      
      
       {/* <EventBannerPopup isOpen={isEventPopupOpen} onClose={closeEventPopup}></EventBannerPopup>
        */}
    </>
  );
}


export default App;
