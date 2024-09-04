import React, { useState, useEffect } from 'react';
import './App.css';
import Banner from './Sections/Banner/banner';
import Community from './Sections/Community/Community';
import Ecosystem from './Sections/Ecosystem/ecosystem';
import Footer from './Sections/Footer/Footer';
import Insights from './Sections/Insights/insights';
import Navbar from './Sections/Navbar/navbar';
import Navigator from './Sections/Navigator/navigator';
import Overview from './Sections/Overview/overview';
import Roadmap from './Sections/Roadmap/Roadmap';
import Map from './Sections/Map/map';

function App() {
  const [isScrollLocked, setIsScrollLocked] = useState(false);

  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const unlockScroll = () => {
    document.body.style.overflow = 'auto';
  };

  const handleIndexChange = (index) => {
    if (index < 2 && index > 0) {
      setIsScrollLocked(true);
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
      <Banner />
      <Overview />
      <Ecosystem />
      <Navigator onIndexChange={handleIndexChange} />
      <Map></Map>
      <Insights />
      {/* <Community /> */}
      <Roadmap />
      <Footer />
    </>
  );
}

export default App;
