import { useRef } from "react";
import { useInView } from "framer-motion";

import Header1 from "../Header";
import VideoTestimonialCard from "./VideoTestimonialCard";
import Footer from "../Footer";
import Contact from "../contactform/Contact";

import {
  videoTestimonials,
  noVideoTestimonials,
} from "../../json/testimonials.json";
import NoVideoTestimonialCard from "./NoVideoTestimonialCard";

export default function TestimonialsPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <>
      <Header1 />
      <div
        className="mx-auto mb-16 mt-24 max-w-7xl px-6 text-center font-standard"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h1 className="mb-16 font-heading text-4xl font-bold tracking-tight text-primary underline decoration-secondary sm:text-6xl">
          Testimonials
        </h1>
        {videoTestimonials.map((testimonial, index) => {
          return (
            <VideoTestimonialCard
              name={testimonial.name}
              src={testimonial.src}
              quotes={testimonial.quotes}
              fullQuote={testimonial.fullQuote}
              key={index}
            />
          );
        })}
        {noVideoTestimonials.map((testimonial, index) => {
          return (
            <NoVideoTestimonialCard
              name={testimonial.name}
              fullQuote={testimonial.fullQuote}
              key={index}
            />
          );
        })}
      </div>
      <Contact />
      <Footer />
    </>
  );
}
