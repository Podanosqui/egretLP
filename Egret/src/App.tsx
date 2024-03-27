import './App.css'
import About from './assets/components/about/About'
import Benefits from './assets/components/benefits/Benefits';
import Contact from './assets/components/contact/Contact';
import Footer from './assets/components/footer/Footer';
import HowWeAct from './assets/components/howWeAct/HowWeAct';
import Section1 from './assets/components/section1/Section1'
import WhatWeDo from './assets/components/whatWeDo/WhatWeDo';
import WhatWeOffer from './assets/components/whatWeOffer/WhatWeOffer';

function App() {

  return (
    <>
      <Section1 />
      <About />
      <WhatWeOffer />
      <WhatWeDo />
      <Benefits />
      <HowWeAct />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
