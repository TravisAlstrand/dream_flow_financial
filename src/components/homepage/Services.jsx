import {
  BanknotesIcon,
  ChartBarIcon,
  UsersIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    name: "Debt Management Strategies",
    description:
      "If you are struggling with debt, Micheal will help you develop effective strategies to manage and reduce your debt. She will provide guidance on prioritizing debt payments, negotiating with creditors, and exploring debt consolidation options. Debt does not have to be something that weighs you down or holds you back!",
    icon: BanknotesIcon,
  },
  {
    name: "Personalized Budgeting Plans",
    description:
      "Micheal will work closely with you to create a personalized budgeting plan tailored to your specific financial situation and goals. She will analyze your income, expenses, and financial obligations to develop a realistic and effective budget that aligns with your needs and feels effortless. She believes budgets should not feel restricting or like a chore and that each person needs different pillars in their budget.",
    icon: PresentationChartLineIcon,
  },
  {
    name: "Goal Progression",
    description:
      "Micheal will help you take actionable steps toward your goals, helping you live the life of your dreams! Whether it's saving for a down payment on a house, paying off student loans, or planning for retirement. Micheal will guide you through the goal-progression process and provide strategies to help you reach your objectives holding you accountable every step of the way.",
    icon: ChartBarIcon,
  },
  {
    name: "Ongoing Support and Accountability",
    description:
      "Micheal is committed to your long-term financial success. She provides ongoing support and accountability to ensure you stay on track with your goals. Regular check-ins and progress updates will help you stay motivated and accountable to taking action moving you toward the life of your dreams.",
    icon: UsersIcon,
  },
  {
    name: "Tax Support and Guidance",
    description:
      "As a Certified Public Accountant, CPA, Micheal also offers tax support and guidance to help you navigate the complexities of tax planning and preparation. Micheal will review your tax situation, help you identify potential deductions and credits, and guide you through the tax filing process. She will work with you to ensure that you are maximizing your tax savings and minimizing any potential liabilities. Her goal is to help you optimize your tax situation and keep more money in your pocket.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "And so much more!",
    description:
      "In addition to the above specialties, Micheal offers unique financial coaching designed to support you to break through any ingrained blocks that are holding you back from creating financial success and the life of your dreams. From workbooks, financial education, money and net worth tracking tools, investment information, retirement planning, and more you will be held and supported throughout your entire financial journey flowing into the life of your dreams with ease!",
    icon: RocketLaunchIcon,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-24 sm:py-32 text-center wide:py-12"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="font-semibold leading-7 text-green-600 text-xl">
            Save Faster
          </h2>
          <p className="mt-2 text-3xl font-bold text-light-blue-600 sm:text-4xl">
            Comprehensive Financial Solutions Tailored to You
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our services are designed to empower you with financial clarity and
            peace of mind. From personalized investment strategies to retirement
            planning, we&apos;re here to help you secure your financial future
            and achieve your goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl text-left">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {services.map((service) => (
              <div key={service.name} className="relative pl-16">
                <dt className="text-lg font-semibold leading-7 tracking-wide text-light-blue-600">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-600">
                    <service.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {service.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}