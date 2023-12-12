export default function ErrorPage() {
  return (
    <div className="mx-auto mt-24 max-w-2xl px-6 text-center lg:max-w-4xl">
      <h1 className="mb-16 font-heading text-4xl font-bold tracking-tight text-primary sm:text-6xl">
        Uh Oh!
      </h1>
      <p className="mb-10 text-lg leading-8 text-ltrGray">
        Sorry, the page you&apos;ve requested does not exist.
      </p>
      <a
        href="/"
        className="rounded-md bg-secondary px-3.5 py-2.5 font-semibold text-ltrGray-dark shadow-sm transition-colors duration-300 hover:bg-secondary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Back to Home <span aria-hidden="true">→</span>
      </a>
    </div>
  );
}
