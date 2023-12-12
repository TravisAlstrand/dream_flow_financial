export default function TestimonialVideo({ src }) {
  return (
    <div className="aspect-w-16 aspect-h-9 relative flex max-h-12 items-center justify-center pt-[56.25%] sm:ml-8 sm:mr-8 lg:basis-2/4">
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full lg:h-[50%]"
      ></iframe>
    </div>
  );
}
