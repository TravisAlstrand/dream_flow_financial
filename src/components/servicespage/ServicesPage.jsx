import { useRef } from "react";
import { useInView } from "framer-motion";

import Header2 from "../Header2";
import Contact from "../contactform/Contact";
import Footer2 from "../Footer2";

export default function ServicesPage() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <>
      <Header2 />
      <div
        className="mx-auto px-6 mt-24 max-w-2xl text-center"
        ref={ref}
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
      >
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl mb-10">
          Services
        </h1>
        <p>Welcome to DreamFlow 1 on 1 Financial Coaching Services!</p>
        <p>
          At DreamFlow Financial Coaching, we understand that everyone&apos;s
          financial situation is unique. That&apos;s why we offer personalized 1
          on 1 financial coaching services to support you so you can achieve
          your financial goals and gain control over your finances.
        </p>
        <p>
          Micheal is here to guide you through every step of your financial
          journey. Whether you&apos;re struggling with debt, want to save for a
          specific goal, or need help creating a budget, Micheal will provide
          you with the knowledge, tools, and support to thrive.
        </p>
        <h2>
          Here&apos;s what you can expect from our 1 on 1 financial coaching
          services:
        </h2>
        <ol>
          <li>
            Personalized Financial Assessment: Micheal will start with a free
            financial coaching session, discussing your goals, dreams, current
            financial situation, and financial knowledge and experience. This
            includes discussing your income, expenses, debts, assets, and
            financial goals. By understanding your unique circumstances, we can
            tailor our coaching to meet your specific needs.
          </li>
          <li>
            Goal Setting and Action Planning: After the first free session,
            Micheal works on an action plan to help align your money with goals.
            There are homework assignments to help you look at your money to
            figure out where you are now. Then we look at budgeting, putting a
            budget together that is right for you and feels easy and abundant.
            Whether you want to pay off debt, save for a down payment on a
            house, or plan for retirement, Micheal will help you create a
            step-by-step action plan to reach your goals.
          </li>
          <li>
            Budgeting and Cash Flow Management: One of the key aspects of
            financial success is effective budgeting and cash flow management.
            Micheal will help you create a personalized budget that aligns with
            your values, goals and priorities. She will teach you strategies to
            track your expenses, reduce unaligned spending, increase your
            income, maximize your savings and make progress toward your goals
            and the life of your dreams.
          </li>
          <li>
            Debt Management and Elimination: If you&apos;re burdened with debt,
            Micheal will create a personalized debt management plan and provide
            you with strategies to manage and eliminate it. She will help you
            understand different debt repayment methods, negotiate with
            creditors if necessary, and develop a plan pay off the debt that
            feels like a burden, saving you thousands of dollars in interest!
          </li>
          <li>
            Investment and Retirement Planning: If investing and retirement make
            you feel intimidated, like you&apos;re behind and want to hide under
            the covers, you are not alone! Micheal will provide you with the
            financial understanding of investing and retirement, allowing you to
            feel confident and knowledgeable in your investment decisions.
            Setting up your money to work for you and earn compounding interest
            is a crucial step toward the life of your dreams.
          </li>
          <li>
            Ongoing Support and Accountability: Micheal is committed to your
            long-term financial success. She will provide ongoing support,
            answer your questions, and hold you accountable to your financial
            goals. We will celebrate your achievements and help you overcome any
            obstacles along the way.
          </li>
        </ol>
        <p>
          Investing in 1 on 1 financial coaching is an investment in your
          future. Micheal is dedicated to empowering you with the knowledge and
          skills to take control of your finances and build the life of your
          dreams.
        </p>
        <p>
          Ready to take the first step towards financial freedom? Book your
          first free session below. If you have more questions, contact us today
          with the form below. Let&apos;s work together to transform your
          financial life and flow into the life of your dreams!
        </p>
      </div>
      <Contact />
      <Footer2 />
    </>
  );
}
