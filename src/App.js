import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Browsers from "./scenes/browsers";
import Contact from "./scenes/contact";
import Faq from "./scenes/faq";
import Features from "./scenes/features";
import Intro from "./scenes/intro";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />

      <Intro />
      <Features />
      <Browsers />
      <Faq />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
