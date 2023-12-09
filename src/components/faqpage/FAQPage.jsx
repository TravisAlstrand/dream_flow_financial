import { useRef } from "react";
import { useInView } from "framer-motion";

import Header1 from "../Header";
import Contact from "../contactform/Contact";
import Footer from "../Footer";

export default function FAQPage() {
  const ref = useRef(null);

  const isInView = useInView(ref);

  return (
    <>
      <Header1 />
      <main
        className="mx-auto px-6 mt-24 max-w-4xl text-center font-standard"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all .4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h1 className="text-4xl font-heading font-bold tracking-tight text-primary underline decoration-secondary sm:text-6xl mb-16">
          Frequently Asked Questions
        </h1>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
