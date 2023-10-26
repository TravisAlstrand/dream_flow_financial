import { useRef } from "react";
import { useInView } from "framer-motion";
import { employees } from "../../json/employees.json";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="about"
      className="bg-white py-24 sm:py-32 flex items-center justify-center text-center wide:py-12"
    >
      <div
        className="mx-auto max-w-7xl px-6 lg:px-8"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
        }}
      >
        <div className="max-w-2xl">
          <h2 className="text-3xl font-heading font-bold tracking-tight text-primary sm:text-4xl">
            Meet Micheal
          </h2>
          <p className="mt-6 text-lg leading-8 text-ltrGray">
            As the visionary founder of Dream Flow Financial, Micheal combines
            her experience of financial expertise with a passion for empowering
            clients to achieve their financial dreams.
          </p>
        </div>
        <ul role="list" className="mb-8">
          {employees.map((person) => (
            <li key={person.name}>
              <div className="mt-10 flex flex-col items-center justify-center gap-x-6">
                <img
                  className="w-full max-w-md rounded-md shadow-xl aspect-auto mb-4"
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
          className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm hover:bg-secondary-light focus-styles focus-visible:outline-primary transition-colors duration-300"
        >
          Learn More About Micheal
        </a>
      </div>
    </section>
  );
}
