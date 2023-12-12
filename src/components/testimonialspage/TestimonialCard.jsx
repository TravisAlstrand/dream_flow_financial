import { useRef } from "react";
import { useInView } from "framer-motion";

import TestimonialQuote from "./TestimonialQuote";
import TestimonialVideo from "./TestimonialVideo";

export default function TestimonialCard({ name, src, quotes }) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      className="mt-24 px-4 pb-4 pt-8 sm:pb-12 lg:flex lg:max-h-[450px] lg:flex-row-reverse lg:odd:flex-row"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <div className="lg:basis-2/4">
        <h2 className="mb-12 border-b-2 border-secondary pb-4 font-heading text-4xl font-bold text-primary">
          {name}
        </h2>
        <div className="mb-6 flex h-full flex-col">
          {quotes.map((quote, index) => {
            return <TestimonialQuote key={index} quote={quote} />;
          })}
        </div>
      </div>
      <TestimonialVideo src={src} />
    </section>
  );
}
