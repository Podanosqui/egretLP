import './App.css'
import About from './assets/components/about/About'
import Benefits from './assets/components/benefits/Benefits';
import BPO from './assets/components/bpo/BPO';
import Contact from './assets/components/contact/Contact';
import Footer from './assets/components/footer/Footer';
import HowWeAct from './assets/components/howWeAct/HowWeAct';
import Section1 from './assets/components/section1/Section1'
import WhatWeDo from './assets/components/whatWeDo/WhatWeDo';

function App() {

  return (
    <>
      <Section1 />
      <BPO />
      <WhatWeDo />
      <Benefits />
      <About />
      <HowWeAct />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
