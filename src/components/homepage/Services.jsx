import {
  HomeModernIcon,
  BanknotesIcon,
  RocketLaunchIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Financial Planning",
    description:
      "Craft a roadmap to your financial future with our comprehensive planning services, including budgeting, goal setting, and risk assessment.",
    icon: BanknotesIcon,
  },
  {
    name: "Investment Advisory",
    description:
      "Maximize your investment potential with our expert guidance, tailored portfolio management, and continuous performance monitoring.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "Retirement Planning",
    description:
      "Secure a worry-free retirement with our specialized strategies, ensuring you'll have the funds you need to enjoy life after work.",
    icon: HomeModernIcon,
  },
  {
    name: "Tax Optimization",
    description:
      "Minimize tax liabilities and keep more of your hard-earned money through our tax planning and optimization services.",
    icon: RocketLaunchIcon,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32 text-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Save Faster
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
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
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
