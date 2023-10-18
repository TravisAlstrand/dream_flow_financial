import { useRef } from "react";
import { useInView } from "framer-motion";

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div id="home" className="bg-white">
      <div className="max-h-[460px] overflow-hidden">
        <img
          src="images/home-img.png"
          alt="illustration of a peaceful river surrounded by trees with dreamy clouds in the sky"
          className="mx-auto"
        />
      </div>
      {/* <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-2xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2  bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          />
        </div> */}
      <div
        className="mx-auto max-w-2xl pt-10 pb-32 sm:pt-24 wide:pb-24"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-cursive font-bold tracking-tight text-primary sm:text-6xl">
            Your Path to Financial Success Starts Here
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Gain peace of mind and achieve your financial goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#contact"
              className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-300"
            >
              Get started
            </a>
            <a
              href="#services"
              className="rounded-md px-3 py-2.5 font-semibold leading-6 text-ltrGray-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-gray-100 transition-colors duration-300"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-2xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        {/* <div
            className="relative left-[calc(50%+17rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
            }}
          /> */}
      </div>
    </div>
  );
}
