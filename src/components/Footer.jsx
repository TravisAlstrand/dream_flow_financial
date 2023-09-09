import { navigation, navigation2 } from "../json/navigation.json";

export default function Footer() {
  return (
    <footer className="border-t-2">
      <nav
        className="flex flex-col items-center justify-center p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center mb-4">
          <a
            href="#"
            className="rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue-600"
          >
            <span className="sr-only">Dream Flow Financial</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=lightBlue&shade=600"
              alt="business logo"
            />
          </a>
        </div>

        <div className="hidden text-center md:flex">
          <div className="flex gap-x-8 border-r-2 border-gray-900 pr-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md p-1 font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue-600 hover:bg-gray-100 transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>
          <div className="flex gap-x-8 pl-6">
            {navigation2.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-md p-1 font-semibold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-blue-600 hover:bg-gray-100 transition-colors duration-300"
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
