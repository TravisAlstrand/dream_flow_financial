import About from "./About";
import Contact from "../contactform/Contact";
import Header from "../Header";
import Hero from "./Hero";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Footer from "../Footer";

export default function HomePage() {
  return (
    <div className="font-standard">
      <Header />
      <Hero />
      <Services />
      <About />
      <Contact />
      <Testimonials />
      <Footer />
    </div>
  );
}
