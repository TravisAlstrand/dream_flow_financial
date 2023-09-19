import TestimonialQuote from "./TestimonialQuote";
import TestimonialVideo from "./TestimonialVideo";

export default function TestimonialCard({ name, src, quotes }) {
  return (
    <section className="mt-24 pt-8 pb-4 sm:pb-12 px-4 bg-gradient-to-r from-white to-primary rounded-md odd:bg-gradient-to-l">
      <h2 className="text-3xl mb-4 font-bold text-ltrGray">{name}</h2>
      <div className="flex flex-col mb-6">
        {quotes.map((quote, index) => {
          return <TestimonialQuote key={index} quote={quote} />;
        })}
      </div>
      <TestimonialVideo src={src} />
    </section>
  );
}
