import { testimonials as reviews } from "../json/testimonials.json";
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
      {/* <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Check out what our happy customers have to say!
        </p>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      {reviews.map((review, index) => {
        return (
          <div key={index}>
            {/* <div className="mx-auto max-w-2xl lg:max-w-4xl">
              <img
                className="mx-auto h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg"
                alt="business logo"
              /> 
            <figure className="mt-10">
              <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                <p>{review.review}</p>
              </blockquote>
              <figcaption className="mt-6">
                <img
                  className="mx-auto h-10 w-10 rounded-full"
                  src={review["reviewer-image"]}
                  alt={review["reviewer-name"]}
                />
                <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                  <div className="font-semibold text-gray-900">
                    {review["reviewer-name"]}
                  </div>
                  <svg
                    viewBox="0 0 2 2"
                    width={3}
                    height={3}
                    aria-hidden="true"
                    className="fill-gray-900"
                  >
                    <circle cx={1} cy={1} r={1} />
                  </svg>
                  <div className="text-gray-600">
                    {review["reviewer-location"]}
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
          // </div>
        );
      })} */}
      <Carousel
        autoplay={true}
        loop={true}
        autoplayDelay={10000}
        className="rounded-xl max-w-5xl"
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
                    - {review["reviewer-location"]}
                  </Typography>
                  {/* <div className="flex justify-center gap-2">
                <Button size="lg" color="white">
                  Explore
                </Button>
                <Button size="lg" color="white" variant="text">
                  Gallery
                </Button>
              </div> */}
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </section>
  );
}
