import { otherNavigation } from "../json/navigation.json";

export default function Footer2() {
  return (
    <footer className="border-t-2">
      <nav
        className="flex flex-col items-center justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center mb-4">
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

        <div className="hidden text-center md:flex">
          <div className="flex gap-x-8">
            {otherNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md p-1 font-semibold text-ltrGray focus-styles focus-visible:outline-primary hover:bg-gray-100 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </footer>
  );
}
