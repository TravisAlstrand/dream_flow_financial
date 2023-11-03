import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  BanknotesIcon,
  ChartBarIcon,
  UsersIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

import Header from "../Header";
import Contact from "../contactform/Contact";
import Footer from "../Footer";

const services = [
  {
    name: "Personalized Financial Assessment",
    description:
      "After the first free session, Micheal works on an action plan to help align your money with goals. There are homework assignments to help you look at your money to figure out where you are now. Then we look at budgeting, putting a budget together that is right for you and feels easy and abundant. Whether you want to pay off debt, save for a down payment on a house, or plan for retirement, Micheal will help you create a step-by-step action plan to reach your goals.",
    icon: UsersIcon,
  },
  {
    name: "Goal Setting and Action Planning",
    description:
      "After the first free session, Micheal works on an action plan to help align your money with goals. There are homework assignments to help you look at your money to figure out where you are now. Then we look at budgeting, putting a budget together that is right for you and feels easy and abundant. Whether you want to pay off debt, save for a down payment on a house, or plan for retirement, Micheal will help you create a step-by-step action plan to reach your goals.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Budgeting and Cash Flow Management",
    description:
      "One of the key aspects of financial success is effective budgeting and cash flow management. Micheal will help you create a personalized budget that aligns with your values, goals and priorities. She will teach you strategies to track your expenses, reduce unaligned spending, increase your income, maximize your savings and make progress toward your goals and the life of your dreams.",
    icon: ChartBarIcon,
  },
  {
    name: "Debt Management and Elimination",
    description:
      "If you're burdened with debt, Micheal will create a personalized debt management plan and provide you with strategies to manage and eliminate it. She will help you understand different debt repayment methods, negotiate with creditors if necessary, and develop a plan pay off the debt that feels like a burden, saving you thousands of dollars in interest!",
    icon: BanknotesIcon,
  },
  {
    name: "Investment and Retirement Planning",
    description:
      "If investing and retirement make you feel intimidated, like you're behind and want to hide under the covers, you are not alone! Micheal will provide you with the financial understanding of investing and retirement, allowing you to feel confident and knowledgeable in your investment decisions. Setting up your money to work for you and earn compounding interest is a crucial step toward the life of your dreams.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Ongoing Support and Accountability",
    description:
      "Micheal is committed to your long-term financial success. She will provide ongoing support, answer your questions, and hold you accountable to your financial goals. We will celebrate your achievements and help you overcome any obstacles along the way.",
    icon: RocketLaunchIcon,
  },
];

export default function ServicesPage() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1);
  const isInView2 = useInView(ref2);
  const isInView3 = useInView(ref3);

  return (
    <>
      <Header />
      <main className="mx-auto px-6 mt-24 max-w-2xl font-standard text-center lg:max-w-4xl 2xl:max-w-7xl">
        <section
          ref={ref1}
          style={{
            opacity: isInView1 ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="pb-16 border-b-2 border-secondary"
        >
          <h1 className="text-4xl font-heading font-bold tracking-tight text-primary sm:text-6xl mb-16">
            Services
          </h1>
          <h2 className="mb-10 font-heading font-semibold leading-7 text-primary text-2xl">
            Welcome to Dream Flow 1 on 1 Financial Coaching Services!
          </h2>
          <p className="mb-10 text-lg leading-8 text-ltrGray">
            At Dream Flow Financial Coaching, we understand that everyone&apos;s
            financial situation is unique. That&apos;s why we offer personalized
            1 on 1 financial coaching services to support you so you can achieve
            your financial goals and gain control over your finances.
          </p>
          <p className="text-lg leading-8 text-ltrGray">
            Micheal is here to guide you through every step of your financial
            journey. Whether you&apos;re struggling with debt, want to save for
            a specific goal, or need help creating a budget, Micheal will
            provide you with the knowledge, tools, and support to thrive.
          </p>
        </section>
        <section
          ref={ref2}
          style={{
            opacity: isInView2 ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="py-16 border-b-2 border-secondary"
        >
          <h2 className="font-semibold font-heading leading-7 text-primary text-2xl">
            Here&apos;s what you can expect from our 1 on 1 financial coaching
            services:
          </h2>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-left">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {services.map((service) => (
                <div key={service.name} className="relative pl-16">
                  <dt className="text-lg font-semibold leading-7 tracking-wide text-primary">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                      <service.icon
                        className="h-6 w-6 text-ltrGray-dark"
                        aria-hidden="true"
                      />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-ltrGray">
                    {service.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
        <section
          ref={ref3}
          style={{
            opacity: isInView3 ? 1 : 0,
            transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
          className="pt-16"
        >
          <p className="mb-10 text-lg leading-8 text-ltrGray">
            Investing in 1 on 1 financial coaching is an investment in your
            future. Micheal is dedicated to empowering you with the knowledge
            and skills to take control of your finances and build the life of
            your dreams.
          </p>
          <p className="mb-10 text-lg leading-8 text-ltrGray">
            Ready to take the first step towards financial freedom? Book your
            first free session below. If you have more questions, contact us
            today with the form below. Let&apos;s work together to transform
            your financial life and flow into the life of your dreams!
          </p>
        </section>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
