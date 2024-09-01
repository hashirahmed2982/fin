
import './App.css'
import Banner from './Sections/Banner/banner'
import Community from './Sections/Community/Community'

import Ecosystem from './Sections/Ecosystem/ecosystem'
import Footer from './Sections/Footer/Footer'
import Insights from './Sections/Insights/insights'
import Navbar from './Sections/Navbar/navbar'
import Navigator from './Sections/Navigator/navigator'
import Overview from './Sections/Overview/overview'
import Roadmap from './Sections/Roadmap/Roadmap'



function App() {


  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Overview></Overview>
    <Ecosystem></Ecosystem>
    <Navigator></Navigator>
    <Insights></Insights>
    <Community></Community>
    <Roadmap></Roadmap>
    <Footer></Footer>
    </>
  )
}

export default App
