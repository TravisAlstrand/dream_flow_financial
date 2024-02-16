import { useRef } from "react";
import { useInView } from "framer-motion";

import CalendlyLink from "../CalendlyLink";

export default function Hero({ height }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const calculatedHeight = window.innerHeight - height;

  return (
    <div
      id="home"
      className="mx-auto max-w-7xl bg-hero-bg-sml bg-cover bg-fixed bg-center lg:bg-left"
    >
      <div
        className="z-10 mx-auto flex w-full items-center justify-center bg-white bg-opacity-10 px-4 wide:pb-24"
        ref={ref}
        style={{
          height: `${calculatedHeight}px`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="rounded-md bg-white bg-opacity-60 text-center backdrop-blur">
          <h1 className="rounded-t-lg p-8 font-heading text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Your Path to Financial Success Starts Here
          </h1>
          <p className="p-6 text-lg font-semibold leading-8 text-ltrGray-dark">
            Gain peace of mind and achieve your financial goals.
          </p>
          <div className="flex items-center justify-center gap-x-6 rounded-b-lg p-10">
            <CalendlyLink />
            {/* <a
              href="#contact"
              className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm transition-colors duration-300 hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Get started
            </a> */}
            <a
              href="#services"
              className="rounded-md border-2 border-primary px-3 py-2.5 font-semibold leading-6 text-primary transition-colors duration-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
