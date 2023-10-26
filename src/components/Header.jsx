import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header1({ onHeightChange }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.offsetHeight);
      if (onHeightChange) {
        onHeightChange(height);
      }
    }
  }, [height, onHeightChange]);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Testimonials", href: "/testimonials" },
  ];

  return (
    <header
      className="sticky top-0 z-50 shadow-xl bg-white font-standard"
      ref={ref}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1 items-center">
          <a
            href="#"
            className="rounded-md -m-1.5 p-1.5 lg:mr-8 focus-styles outline-primary"
          >
            <span className="sr-only">Dream Flow Financial</span>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=lightBlue&shade=500"
              alt="business logo"
            />
          </a>
          <span className="hidden text-center font-heading text-primary text-3xl lg:block">
            Dream Flow Financial
          </span>
        </div>
        <span className="font-heading text-center text-2xl px-8 text-primary sm:text-3xl lg:hidden">
          Dream Flow Financial
        </span>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-ltrGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              style={({ isActive }) => {
                return {
                  borderBottomWidth: isActive ? "2px" : "0px",
                  borderBottomColor: isActive ? "#38bdf8" : "",
                };
              }}
              className="p-1 text-ltrGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-gray-100 transition-colors duration-300"
            >
              {item.name}
            </NavLink>
          ))}
          <NavHashLink
            to="#contact"
            className="p-1 text-ltrGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:bg-gray-100 transition-colors duration-300"
          >
            Contact
          </NavHashLink>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="#"
              className="rounded-md -m-1.5 p-1.5 lg:mr-8 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <span className="sr-only">Dream Flow Financial</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=lightBlue&shade=500"
                alt="business logo"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-ltrGray focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    style={({ isActive }) => {
                      return {
                        borderBottomWidth: isActive ? "2px" : "0px",
                        borderBottomColor: isActive ? "#38bdf8" : "",
                      };
                    }}
                    className="-mx-3 block px-3 py-2 text-base leading-7 text-ltrGray hover:bg-gray-50 font-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <NavHashLink
                  to="#contact"
                  className="-mx-3 block px-3 py-2 text-base leading-7 text-ltrGray hover:bg-gray-50 font-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </NavHashLink>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
