import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero({ height }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const calculatedHeight = window.innerHeight - height;

  return (
    <div
      id="home"
      className="max-w-7xl bg-hero-bg-sml mx-auto bg-center lg:bg-left bg-cover bg-fixed"
    >
      <div
        className="flex justify-center items-center mx-auto w-full px-4 wide:pb-24 z-10 bg-white bg-opacity-10"
        ref={ref}
        style={{
          height: `${calculatedHeight}px`,
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="text-center bg-white bg-opacity-60 rounded-md backdrop-blur">
          <h1 className="text-4xl p-8 rounded-t-lg font-heading font-bold tracking-tight text-primary sm:text-6xl">
            Your Path to Financial Success Starts Here
          </h1>
          <p className="p-6 font-semibold text-lg leading-8 text-ltrGray-dark">
            Gain peace of mind and achieve your financial goals.
          </p>
          <div className="p-10 rounded-b-lg flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-300"
            >
              Get started
            </a>
            <a
              href="#services"
              className="rounded-md px-3 py-2.5 font-semibold border-2 border-primary leading-6 text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-gray-100 transition-colors duration-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
