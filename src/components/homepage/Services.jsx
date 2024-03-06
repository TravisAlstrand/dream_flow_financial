// import { useRef } from "react";
// import { useInView } from "framer-motion";
// import {
//   BanknotesIcon,
//   ChartBarIcon,
//   UsersIcon,
//   PresentationChartLineIcon,
//   RocketLaunchIcon,
//   CurrencyDollarIcon,
// } from "@heroicons/react/24/outline";

// const services = [
//   {
//     name: "Debt Management Strategies",
//     description:
//       "If you are struggling with debt, Micheal will help you develop effective strategies to manage and reduce your debt. She will provide guidance on prioritizing debt payments, negotiating with creditors, and exploring debt consolidation options. Debt does not have to be something that weighs you down or holds you back!",
//     icon: BanknotesIcon,
//   },
//   {
//     name: "Personalized Budgeting Plans",
//     description:
//       "Micheal will work closely with you to create a personalized budgeting plan tailored to your specific financial situation and goals. She will analyze your income, expenses, and financial obligations to develop a realistic and effective budget that aligns with your needs and feels effortless. She believes budgets should not feel restricting or like a chore and that each person needs different pillars in their budget.",
//     icon: PresentationChartLineIcon,
//   },
//   {
//     name: "Goal Progression",
//     description:
//       "Micheal will help you take actionable steps toward your goals, helping you live the life of your dreams! Whether it's saving for a down payment on a house, paying off student loans, or planning for retirement. Micheal will guide you through the goal-progression process and provide strategies to help you reach your objectives holding you accountable every step of the way.",
//     icon: ChartBarIcon,
//   },
//   {
//     name: "Ongoing Support and Accountability",
//     description:
//       "Micheal is committed to your long-term financial success. She provides ongoing support and accountability to ensure you stay on track with your goals. Regular check-ins and progress updates will help you stay motivated and accountable to taking action moving you toward the life of your dreams.",
//     icon: UsersIcon,
//   },
//   {
//     name: "Tax Support and Guidance",
//     description:
//       "As a Certified Public Accountant, CPA, Micheal also offers tax support and guidance to help you navigate the complexities of tax planning and preparation. Micheal will review your tax situation, help you identify potential deductions and credits, and guide you through the tax filing process. She will work with you to ensure that you are maximizing your tax savings and minimizing any potential liabilities. Her goal is to help you optimize your tax situation and keep more money in your pocket.",
//     icon: CurrencyDollarIcon,
//   },
//   {
//     name: "And so much more!",
//     description:
//       "In addition to the above specialties, Micheal offers unique financial coaching designed to support you to break through any ingrained blocks that are holding you back from creating financial success and the life of your dreams. From workbooks, financial education, money and net worth tracking tools, investment information, retirement planning, and more you will be held and supported throughout your entire financial journey flowing into the life of your dreams with ease!",
//     icon: RocketLaunchIcon,
//   },
// ];

export default function Services() {
  // const ref = useRef(null);
  // const isInView = useInView(ref);

  return (
    <section
      id="services"
      className="mx-auto max-w-7xl bg-white py-24 text-center sm:py-32 wide:py-12"
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
        <div className="mx-auto mb-8 max-w-2xl lg:text-center">
          <h2 className="text-xl font-semibold leading-7 text-secondary">
            Save Faster
          </h2>
          <p className="mt-2 font-heading text-3xl font-bold text-primary sm:text-4xl">
            Comprehensive Financial Solutions Tailored to You
          </p>
          <p className="mt-6 text-lg leading-8 text-ltrGray">
            Micheal&apos;s services are designed to empower you with financial
            clarity and peace of mind. From personalized budgets, debt
            management plans, and savings for your goals, she&apos;s here to
            support your financial future and help you experience the life of
            your dreams.
          </p>
        </div>
        <a
          href="/services"
          className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm transition-colors duration-300 hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          See All Services <span aria-hidden="true">→</span>
        </a>
        {/* <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-left">
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
        </div> */}
      </div>
    </section>
  );
}
