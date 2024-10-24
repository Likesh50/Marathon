import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import PriceComponent from './Pages/PriceComponent';
import Sponsors from './Pages/Sponsors';
import AboutMarathon from './Pages/AboutMarathon';
import AboutDirector from './Pages/AboutDirector';
import Footer from './Pages/Footer';
import RaceCategory from './Pages/RaceCategory';
import PriceAmount1 from './Pages/PriceAmount1';
import ChampionshipComponent from './Pages/ChampionshipComponent';
import SpiritualLeader from './Pages/SpiritualLeader';
import CountdownTimerr from './Pages/CountdownTimerr';
import Organizer from './Pages/Organizer';
import PrizeTable from './Pages/PrizeTable';
import TitleSponsor from './Pages/TitleSponsor';
import PartnerSection from './Pages/PartnerSection';
import Emblem from './Pages/Emblem';
import ResponsiveImagesComponent from './Pages/ResponsiveImagesComponent';
import AnotherLogo from './Pages/AnotherLogo';



function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" ,gap:"20px",width:"100%"}}>
        <Navbar />
        <div id="hero">
          <Hero />
        </div>
        <SpiritualLeader/>
        <div id="about-marathon">
          <AboutMarathon />
        </div>
        <div id="about-director">
          <AboutDirector />
        </div>
        <div id="race-category">
          <RaceCategory />
        </div>
        <div>
          <PriceAmount1/>
          <ResponsiveImagesComponent/>
        </div>
        
        <ChampionshipComponent/>
        <div id="price-component">
          <PriceComponent />
          
        </div>
        <div id="countdown-timer">
          <CountdownTimerr/>
        </div>
        <Emblem/>
        <div id="sponsors">
          <TitleSponsor/>
          <Sponsors/>
          <PartnerSection/>
          <AnotherLogo/>
          <Organizer/>
        </div>    

        <div id="footer">
          <Footer />
        </div>        
      </div>
    </>
  );
}

export default App;
