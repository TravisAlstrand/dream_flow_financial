import Header2 from "../Header2";
import Contact from "../contactform/Contact";
import Footer2 from "../Footer2";

export default function AboutPage() {
  return (
    <>
      <Header2 />
      <div className="mx-auto px-6 mt-24 max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
          Meet Micheal
        </h1>
        <img
          className="aspect-auto my-6 px-6"
          src="micheal-full.jpeg"
          alt="photo of Micheal Dunsdon"
        />
        <p className="mt-6 text-lg leading-8 text-ltrGray">
          Welcome to Dream Flow Financial, where financial empowerment meets
          expertise. Founded by Micheal Dunsdon, a visionary in the world of
          finance, this company was born from a deep-rooted passion for helping
          individuals and families achieve their financial dreams.
        </p>
        <p className="mt-6 text-lg leading-8 text-ltrGray">
          With over two decades of experience in the financial industry, Micheal
          has dedicated her career to making the complex world of finance
          accessible to everyone. Her journey began as a young professional
          eager to secure her own financial future, and that drive eventually
          led her to become a trusted advisor to countless clients. Jane&apos;s
          unwavering commitment to providing personalized, actionable financial
          advice sets the foundation for our company&apos;s mission.
        </p>
        <p className="mt-6 text-lg leading-8 text-ltrGray">
          At Dream Flow Financial, we believe that financial success is within
          reach for everyone. Whether you&apos;re planning for retirement,
          seeking investment opportunities, optimizing your taxes, or simply
          looking for comprehensive financial planning, our team is here to
          guide you every step of the way. Join us on your journey towards a
          brighter, more secure financial future, where your goals are our
          goals, and your success is our success.
        </p>
        <img
          className="aspect-auto my-6 px-6"
          src="micheal-and-ryan.jpeg"
          alt="photo of Micheal and husband Ryan"
        />
      </div>
      <Contact />
      <Footer2 />
    </>
  );
}
