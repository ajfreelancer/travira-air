import "./App.css";
import Clients from "./landingPage/Clients";
import Fleet from "./landingPage/Fleet";
import Header from "./landingPage/Header";
import HeroSection from "./landingPage/HeroSection";
import Safety from "./landingPage/Safety";
import Services2 from "./landingPage/Services2";
import Testimonial from "./landingPage/Testimonial";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Clients />
      <Services2 />
      <Safety />
      <Fleet />
      <Testimonial />
    </div>
    
  );
}

export default App;

