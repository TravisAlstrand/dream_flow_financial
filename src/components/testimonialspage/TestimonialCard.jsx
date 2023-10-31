import { useRef } from "react";
import { useInView } from "framer-motion";

import TestimonialQuote from "./TestimonialQuote";
import TestimonialVideo from "./TestimonialVideo";

export default function TestimonialCard({ name, src, quotes }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="mt-24 pt-8 pb-4 sm:pb-12 px-4 bg-gradient-to-r from-white to-secondary-light rounded-md odd:bg-gradient-to-l"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <h2 className="text-4xl font-heading mb-4 font-bold text-primary">
        {name}
      </h2>
      <div className="flex flex-col mb-6">
        {quotes.map((quote, index) => {
          return <TestimonialQuote key={index} quote={quote} />;
        })}
      </div>
      <TestimonialVideo src={src} />
    </section>
  );
}
