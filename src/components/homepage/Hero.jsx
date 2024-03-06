// import { useRef } from "react";
// import { useInView } from "framer-motion";

import CalendlyLink from "../CalendlyLink";

export default function Hero({ height }) {
  // const ref = useRef(null);
  // const isInView = useInView(ref);
  const calculatedHeight = window.innerHeight - height;

  return (
    <div
      id="home"
      className="mx-auto max-w-7xl bg-hero-bg-xs bg-cover bg-center sm:bg-hero-bg-sm md:bg-hero-bg-md lg:bg-hero-bg-lg lg:bg-left"
    >
      <div
        className="z-10 mx-auto flex w-full items-end justify-center bg-white bg-opacity-10 px-4 pb-40 sm:pb-24 md:pb-32 lg:pb-48 wide:pb-24"
        // ref={ref}
        style={{
          height: `${calculatedHeight}px`,
          // opacity: isInView ? 1 : 0,
          // transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="rounded-md bg-white bg-opacity-30 text-center backdrop-blur">
          <h1 className="rounded-t-lg p-8 pb-4 font-heading text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:hidden">
            Your Path to<br></br>Financial Success<br></br>Starts Here
          </h1>
          <h1 className="hidden rounded-t-lg p-8 pb-4 font-heading text-4xl font-bold tracking-tight text-primary sm:text-6xl lg:block">
            Your Path to Financial Success<br></br>Starts Here
          </h1>
          <p className="p-4 text-lg font-semibold leading-8 text-ltrGray-dark lg:hidden">
            Gain peace of mind and<br></br>achieve your financial goals.
          </p>
          <p className="hidden p-4 text-lg font-semibold leading-8 text-ltrGray-dark lg:block">
            Gain peace of mind and achieve your financial goals.
          </p>
          <div className="flex items-center justify-center gap-x-6 rounded-b-lg p-8 pt-4">
            <CalendlyLink />
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
