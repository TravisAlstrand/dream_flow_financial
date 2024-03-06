// import { useRef } from "react";
// import { useInView } from "framer-motion";

import Header1 from "../Header";
import Contact from "../contactform/Contact";
import Footer from "../Footer";

import { faqs } from "../../json/faqs.json";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";

export default function FAQPage() {
  // const ref = useRef(null);

  // const isInView = useInView(ref);

  return (
    <>
      <Header1 />
      <main
        className="mx-auto mt-24 max-w-4xl px-6 text-center font-standard"
        // ref={ref}
        style={
          {
            // opacity: isInView ? 1 : 0,
            // transition: "all .4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }
        }
      >
        <h1 className="mb-24 font-heading text-4xl font-bold tracking-tight text-primary underline decoration-secondary sm:text-6xl">
          Frequently Asked Questions
        </h1>
        <section className="lg:text-left">
          {faqs.map((faq, index) => {
            return (
              <article
                key={index}
                className="relative mb-10 flex flex-col border-b-2  border-primary pb-10 last:mb-0"
              >
                <div className="mb-4 flex flex-col items-center gap-y-4 lg:flex-row lg:gap-x-4 lg:gap-y-0">
                  <div className="left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                    <QuestionMarkCircleIcon
                      className="h-6 w-6 text-primary"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="w-full font-heading text-2xl text-primary">
                    {faq.question}
                  </h2>
                </div>
                <p className="leading-8 text-ltrGray lg:ml-14">{faq.answer}</p>
              </article>
            );
          })}
        </section>
      </main>
      <Contact />
      <Footer />
    </>
  );
}
