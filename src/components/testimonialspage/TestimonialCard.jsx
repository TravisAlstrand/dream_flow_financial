import TestimonialVideo from "./TestimonialVideo";

export default function TestimonialCard({ name, src }) {
  return (
    <section className="mt-24">
      <h2 className="text-3xl my-4 font-bold tracking-tight text-ltrGray">
        {name}
      </h2>
      <TestimonialVideo src={src} />
    </section>
  );
}
