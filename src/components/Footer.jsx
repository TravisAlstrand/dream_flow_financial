import { navigation } from "../json/navigation.json";

export default function Footer() {
  return (
    <footer className="border-t-2">
      <nav
        className="flex flex-col items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center mb-6">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Dream Flow Financial</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="business logo"
            />
          </a>
        </div>

        <div className="hidden text-center sm:flex sm:gap-x-12 sm:flex-row">
          {navigation.map((item, index) =>
            index !== navigation.length - 1 ? (
              <a
                key={item.name}
                href={item.href}
                className="mb-3 font-semibold leading-6 text-gray-900 sm:mb-0"
              >
                {item.name}
              </a>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="col-span-2 mb-3 font-semibold leading-6 text-gray-900 sm:mb-0"
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </nav>
    </footer>
  );
}
