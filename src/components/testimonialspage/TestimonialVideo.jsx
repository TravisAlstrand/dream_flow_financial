export default function TestimonialVideo({ src }) {
  return (
    <div className="relative pt-[56.25%] flex justify-center items-center aspect-w-16 aspect-h-9 max-h-12 sm:ml-8 sm:mr-8 lg:basis-2/4">
      <iframe
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full lg:h-[50%]"
      ></iframe>
    </div>
  );
}
