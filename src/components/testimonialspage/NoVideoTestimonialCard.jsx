// import { useRef } from "react";
// import { useInView } from "framer-motion";

export default function NoVideoTestimonialCard({ name, fullQuote }) {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <section
      className="mx-auto mt-24 max-w-3xl flex-col px-4 pb-4 pt-8 sm:pb-12 lg:flex lg:max-h-[450px]"
      // ref={ref}
      style={
        {
          // opacity: isInView ? 1 : 0,
          // transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }
      }
    >
      <h2 className="mb-12 border-b-2 border-secondary pb-4 font-heading text-4xl font-bold text-primary">
        {name}
      </h2>
      <q className="text-ltrGray">{fullQuote}</q>
    </section>
  );
}
