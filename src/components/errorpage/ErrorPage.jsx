export default function ErrorPage() {
  return (
    <div className="mx-auto px-6 mt-24 max-w-2xl text-center lg:max-w-4xl">
      <h1 className="text-4xl font-heading font-bold tracking-tight text-primary sm:text-6xl mb-16">
        Uh Oh!
      </h1>
      <p className="mb-10 text-lg leading-8 text-ltrGray">
        Sorry, the page you&apos;ve requested does not exist.
      </p>
      <a
        href="/"
        className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-300"
      >
        Back to Home <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
