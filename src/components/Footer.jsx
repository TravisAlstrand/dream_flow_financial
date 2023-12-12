export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="flex flex-col items-center justify-center p-6 lg:px-8">
        <a
          href="/"
          className="focus-styles rounded-md focus-visible:outline-primary"
        >
          <span className="sr-only">Dream Flow Financial</span>
          <img
            className="h-12 w-12"
            src="images/DFF-Logo-250.png"
            alt="business logo"
          />
        </a>
      </div>
    </footer>
  );
}
