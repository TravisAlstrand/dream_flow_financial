// import { useRef } from "react";
// import { useInView } from "framer-motion";
import { employees } from "../../json/employees.json";

export default function About() {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <section
      id="about"
      className="mx-auto flex max-w-7xl items-center justify-center bg-white py-24 text-center wide:py-12"
    >
      <div
        className="px-6 lg:px-8"
        // ref={ref}
        style={
          {
            // opacity: isInView ? 1 : 0,
            // transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }
        }
      >
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Meet Micheal
          </h2>
          <p className="mt-6 text-lg leading-8 text-ltrGray">
            Hello and welcome! I&apos;m Micheal Dunsdon, CPA, (pronounced
            Michelle) a dedicated financial coach committed to empowering
            individuals to take charge of their finances and use that money on
            the things that <strong>truly matter to them in life</strong>. If
            you struggle with money, budgeting, debt, savings and everything
            related, I would <strong>LOVE</strong> to support you to get money
            to start working for you to help you create the{" "}
            <strong>life of your dreams</strong>!
          </p>
        </div>
        <ul role="list" className="mb-8">
          {employees.map((person) => (
            <li key={person.name}>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                <img
                  className="mb-4 aspect-auto w-full max-w-md rounded-md shadow-xl"
                  src={person.imageUrl}
                  alt={person.alt}
                />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-ltrGray-dark">
                    {person.name}
                  </h3>
                  <p className="font-semibold leading-6 text-primary">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a
          href="/about"
          className="focus-styles rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm transition-colors duration-300 hover:bg-secondary-light focus-visible:outline-primary"
        >
          Learn More About Micheal
        </a>
      </div>
    </section>
  );
}
