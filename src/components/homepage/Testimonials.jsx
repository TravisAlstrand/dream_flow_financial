import { useRef } from "react";
import { useInView } from "framer-motion";
import { carouselTestimonials as reviews } from "../../json/testimonials.json";
import { Carousel, Typography } from "@material-tailwind/react";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      id="testimonials"
      className="relative isolate mx-auto flex h-screen max-w-7xl flex-col items-center overflow-hidden bg-white py-24 sm:px-6 sm:py-32 lg:px-8 wide:h-fit wide:py-12"
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transition: "all 0.4s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
      }}
    >
      <h2 className="mb-6 px-6 text-center font-heading text-3xl font-bold tracking-tight text-primary sm:px-0 sm:text-4xl">
        What People are Saying...
      </h2>
      <Carousel
        autoplay={true}
        loop={true}
        autoplayDelay={15000}
        className="mb-8 h-full max-h-[800px] max-w-5xl overflow-y-hidden rounded-xl"
      >
        {reviews.map((review) => {
          return (
            <div
              key={review["reviewer-name"]}
              className="relative h-full w-full"
            >
              <img
                src="/images/river-ripple.jpg"
                alt="serene river with a ripple in the water"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="lead"
                    color="white"
                    className="text-md mb-12 font-standard sm:text-xl"
                  >
                    &quot;{review.review}&quot;
                  </Typography>
                  {/* <img
                    className="mx-auto mb-6 h-20 w-20 rounded-full font-standard"
                    src={review["reviewer-image"]}
                    alt={review["reviewer-name"]}
                  /> */}
                  <Typography
                    variant="h3"
                    color="white"
                    className="mb-4 font-standard text-lg sm:text-3xl md:text-4xl lg:text-5xl"
                  >
                    {review["reviewer-name"]}
                  </Typography>
                  {/* <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 font-standard font-bold"
                  >
                    {review["reviewer-location"]}
                  </Typography> */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
      <a
        href="/testimonials"
        className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm transition-colors duration-300 hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        See More Reviews <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}
