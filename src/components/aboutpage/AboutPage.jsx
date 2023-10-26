import { useRef } from "react";
import { useInView } from "framer-motion";

import Header1 from "../Header";
import Contact from "../contactform/Contact";
import Footer from "../Footer";

export default function AboutPage() {
  const ref = useRef(null);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const isInView = useInView(ref);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);
  const isInView4 = useInView(ref4);
  const isInView5 = useInView(ref5);
  return (
    <>
      <Header1 />
      <main
        className="mx-auto px-6 mt-24 max-w-4xl text-center"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all .4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <h1 className="text-4xl font-cursive font-bold tracking-tight text-primary sm:text-6xl mb-16">
          Meet Micheal
        </h1>
        <div className="flex flex-col lg:flex-row">
          <img
            ref={ref1}
            style={{
              opacity: isInView1 ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="mb-10 px-6 lg:w-1/2"
            src="images/splash.jpg"
            alt="Micheal in a river splashing the water"
          />
          <p
            ref={ref2}
            style={{
              opacity: isInView2 ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="mb-10 text-lg leading-8 text-ltrGray lg:w-1/2 lg:text-left"
          >
            Welcome to{" "}
            <strong className="font-cursive text-primary">
              Dream Flow Financial
            </strong>
            , where financial empowerment meets expertise. Founded by Micheal
            Dunsdon, a visionary in the world of finance, this company was born
            from a deep-rooted passion for helping individuals and families
            achieve their financial dreams.
          </p>
        </div>
        <p
          ref={ref3}
          style={{
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="mb-10 text-lg leading-8 text-ltrGray"
        >
          With over two decades of experience in the financial industry, Micheal
          has dedicated her career to making the complex world of finance
          accessible to everyone. Her journey began as a young professional
          eager to secure her own financial future, and that drive eventually
          led her to become a trusted advisor to countless clients.
          Micheal&apos;s unwavering commitment to providing personalized,
          actionable financial advice sets the foundation for her company&apos;s
          mission.
        </p>
        <div className="flex flex-col lg:flex-row">
          <p
            ref={ref4}
            style={{
              opacity: isInView4 ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="mb-10 text-lg leading-8 text-ltrGray lg:w-1/2 lg:text-right"
          >
            At{" "}
            <strong className="font-cursive text-primary">
              Dream Flow Financial
            </strong>
            , we believe that financial success is within reach for everyone.
            Whether you&apos;re planning for retirement, seeking investment
            opportunities, optimizing your taxes, or simply looking for
            comprehensive financial planning, our team is here to guide you
            every step of the way. Join us on your journey towards a brighter,
            more secure financial future, where your goals are our goals, and
            your success is our success.
          </p>
          <img
            ref={ref5}
            style={{
              opacity: isInView5 ? 1 : 0,
              transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            }}
            className="px-6 lg:w-1/2 lg:max-h-[275px]"
            src="images/red-coat2.jpg"
            alt="photo of Micheal raising hands freely"
          />
        </div>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
