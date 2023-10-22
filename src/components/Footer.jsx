export default function Footer() {
  return (
    <footer className="border-t-2">
      <div className="flex flex-col items-center justify-center p-6 lg:px-8">
        <a
          href="#"
          className="rounded-md focus-styles focus-visible:outline-primary"
        >
          <span className="sr-only">Dream Flow Financial</span>
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=lightBlue&shade=500"
            alt="business logo"
          />
        </a>
      </div>
    </footer>
  );
}
