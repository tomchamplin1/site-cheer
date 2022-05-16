import './index.css';
import Navbar from "./components/Navbar";
// import Showcase from "./components/Showcase";
import Offerings from "./components/Offerings";
import Pricing from "./components/Pricing";
import Portfolio from "./components/Portfolio";
import Why from "./components/Why";
import CTA from "./components/CTA";
// import Break from "./components/Break";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
    <Navbar />
    {/* <Showcase /> */}
    <Offerings />
    <Portfolio />
    <Why />
    <Pricing />
    <CTA />
    {/* <Break /> */}
    <Footer />

    </div>
  );
}

export default App;