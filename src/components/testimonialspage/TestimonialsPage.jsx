import { useRef } from "react";
import { useInView } from "framer-motion";

import Header2 from "../Header2";
import TestimonialCard from "./TestimonialCard";
import Footer2 from "../Footer2";
import Contact from "../contactform/Contact";

import { fullTestimonials } from "../../json/testimonials.json";

export default function TestimonialsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Header2 />
      <div
        className="mx-auto px-6 mt-24 mb-16 max-w-5xl text-center"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Testimonials
        </h1>
        {fullTestimonials.map((testimonial, index) => {
          return (
            <TestimonialCard
              name={testimonial.name}
              src={testimonial.src}
              quotes={testimonial.quotes}
              key={index}
            />
          );
        })}
      </div>
      <Contact />
      <Footer2 />
    </>
  );
}