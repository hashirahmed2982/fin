import { useMediaQuery } from "@mui/material";


import Ecosystem from "./ecosystem";
import EcosystemMobile from "./ecosystemmobile";

const EcosystemWrapper = ({ id }) => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return isMobile ? <EcosystemMobile id={id} /> : <Ecosystem id={id} />;
};

export default EcosystemWrapper;
