import React from 'react';
import { useMediaQuery } from '@mui/material';
import MobileRoadmap from './RoadmapMobile';
import Roadmap from './Roadmap';


const RoadmapWrapper = ({ id }) => {
  const isMobile = useMediaQuery('(max-width:768px)');

  return (
    <>
      {isMobile ? <MobileRoadmap id={id} /> : <Roadmap id={id} />}
    </>
  );
};

export default RoadmapWrapper;
