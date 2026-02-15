import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreServices from "./components/CoreServices";
import AISolutions from "./components/AISolutions";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";

import AboutUs  from "./components/AboutUs";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      { <Navbar /> }
      <CoreServices />
      <Hero />
      
      <AISolutions />
      <Contact />

      <AboutUs/>
      <ChatBot />
      <Footer/>
    </div>
  );
}

export default App;