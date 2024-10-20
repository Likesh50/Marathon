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
import PriceAmount2 from './Pages/PriceAmount2';
import SpiritualLeader from './Pages/SpiritualLeader';
import CountdownTimerr from './Pages/CountdownTimerr';



function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" ,gap:"20px"}}>
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
          <PriceAmount2/>
        </div>
        
        <ChampionshipComponent/>
        <div id="price-component">
          <PriceComponent />
        </div>
        <div id="countdown-timer">
          <CountdownTimerr/>
        </div>
        
        <div id="sponsors">
          <Sponsors />
        </div>        
        
        <Footer />
        
      </div>
    </>
  );
}

export default App;
