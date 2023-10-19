import { useState } from "react";

import About from "./About";
import Contact from "../contactform/Contact";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "./Footer";

export default function HomePage() {
  const [headerHeight, setHeaderHeight] = useState(0);

  return (
    <div className="font-standard">
      <Header onHeightChange={(height) => setHeaderHeight(height)} />
      <Hero height={headerHeight} />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
