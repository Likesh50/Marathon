import Navbar from './Pages/Navbar';
import Hero from './Pages/Hero';
import PriceComponent from './Pages/PriceComponent';
import Sponsors from './Pages/Sponsors';
import AboutMarathon from './Pages/AboutMarathon';
import AboutDirector from './Pages/AboutDirector';
import Footer from './Pages/Footer';
import CountdownTimer from './Pages/CountdownTimer';
import RaceCategory from './Pages/RaceCategory';
import B from './Pages/PriceAmount1';
import PriceAmount1 from './Pages/PriceAmount1';
import ChampionshipComponent from './Pages/ChampionshipComponent';
import PriceAmount2 from './Pages/PriceAmount2';
import SpiritualLeader from './Pages/SpiritualLeader';


function App() {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
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
        <div id="countdown-timer">
          <CountdownTimer />
        </div>
        <div id="price-component">
          <PriceComponent />
        </div>
        <div id="race-category">
          <RaceCategory />
        </div>
        <div id="sponsors">
          <Sponsors />
        </div>
        <PriceAmount1/>
        <PriceAmount2/>
        
        <ChampionshipComponent/>
        <Footer />
      </div>
    </>
  );
}

export default App;
