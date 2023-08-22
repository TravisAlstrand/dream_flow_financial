import { testimonials as reviews } from "../../json/testimonials.json";
import { Carousel, Typography } from "@material-tailwind/react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center relative isolate overflow-hidden h-screen bg-white px-6 py-24 sm:py-32 lg:px-8"
    >
      <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Testimonials
      </h2>
      <Carousel
        autoplay={true}
        loop={true}
        autoplayDelay={15000}
        className="rounded-xl max-w-5xl h-full overflow-y-hidden"
      >
        {reviews.map((review) => {
          return (
            <div
              key={review["reviewer-name"]}
              className="relative h-full w-full"
            >
              <img
                src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
                alt="carousel background image"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography variant="lead" color="white" className="mb-12">
                    &quot;{review.review}&quot;
                  </Typography>
                  <img
                    className="mx-auto mb-6 h-20 w-20 rounded-full"
                    src={review["reviewer-image"]}
                    alt={review["reviewer-name"]}
                  />
                  <Typography
                    variant="h3"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                  >
                    {review["reviewer-name"]}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80"
                  >
                    {review["reviewer-location"]}
                  </Typography>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
