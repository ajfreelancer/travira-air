import "./App.css";
import Clients from "./landingPage/Clients";
import Header from "./landingPage/Header";
import HeroSection from "./landingPage/HeroSection";
import Services from "./landingPage/Services";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Clients />
      <Services />
    </div>
  );
}

export default App;
