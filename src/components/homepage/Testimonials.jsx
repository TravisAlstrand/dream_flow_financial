import { testimonials as reviews } from "../../json/testimonials.json";
import { Carousel, Typography } from "@material-tailwind/react";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="flex flex-col items-center relative isolate overflow-hidden h-screen bg-white px-6 py-24 sm:py-32 lg:px-8 wide:h-fit wide:py-12"
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
                src="trees.jpg"
                alt="background image of trees"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/60">
                <div className="w-3/4 text-center md:w-2/4">
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 font-standard font-bold"
                  >
                    &quot;{review.review}&quot;
                  </Typography>
                  <img
                    className="mx-auto mb-6 h-20 w-20 rounded-full font-standard"
                    src={review["reviewer-image"]}
                    alt={review["reviewer-name"]}
                  />
                  <Typography
                    variant="h3"
                    color="white"
                    className="mb-4 text-3xl md:text-4xl lg:text-5xl font-standard"
                  >
                    {review["reviewer-name"]}
                  </Typography>
                  <Typography
                    variant="lead"
                    color="white"
                    className="mb-12 opacity-80 font-standard font-bold"
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
