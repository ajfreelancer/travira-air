import { useRef } from "react";
import "./App.css";
import Clients from "./landingPage/Clients";
import Contact from "./landingPage/Contact";
import ContactLightBox from "./landingPage/ContactLightBox";
import Fleet from "./landingPage/Fleet";
import Footer from "./landingPage/Footer";
import Header from "./landingPage/Header";
import HeroSection from "./landingPage/HeroSection";
import Safety from "./landingPage/Safety";
import Services2 from "./landingPage/Services2";
import Testimonial from "./landingPage/Testimonial";

function App() {
  const contactLightBox = useRef(null);

  const showContactForm = () => {
    contactLightBox.current.className =
      contactLightBox.current.className.replace("hidden", "");
  };
  const hideContactForm = () => {
    contactLightBox.current.className += "hidden";
  }

  return (
    <div>
      <Header showContactForm={showContactForm} />
      <HeroSection showContactForm={showContactForm} />
      <Clients />
      <Services2 />
      <Safety />
      <Fleet />
      <Testimonial />
      <Contact showContactForm={showContactForm} />
      <Footer />
      <div ref={contactLightBox} className="hidden">
        <ContactLightBox hideContactForm={hideContactForm}/>
      </div>
    </div>
  );
}

export default App;
