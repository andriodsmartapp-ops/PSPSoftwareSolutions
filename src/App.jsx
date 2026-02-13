import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreServices from "./components/CoreServices";
import AISolutions from "./components/AISolutions";
import Contact from "./components/Contact";
import ChatBot from "./components/ChatBot";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <CoreServices />
      <AISolutions />
      <Contact />
      <ChatBot />
    </div>
  );
}

export default App;