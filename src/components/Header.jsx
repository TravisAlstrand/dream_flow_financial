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
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className="sticky top-0 z-50 bg-white font-standard shadow-xl"
      ref={ref}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center lg:flex-1">
          <a
            href="/"
            className="focus-styles -m-1.5 rounded-md p-1.5 outline-primary lg:mr-8"
          >
            <span className="sr-only">Dream Flow Financial</span>
            <img
              className="w-12"
              src="images/DFF-Logo-250.png"
              alt="business logo"
            />
          </a>
          <span className="hidden text-center font-heading text-3xl text-primary lg:block">
            Dream Flow Financial
          </span>
        </div>
        <span className="px-8 text-center font-heading text-2xl text-primary sm:text-3xl lg:hidden">
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
                  borderBottomColor: isActive ? "#000080" : "",
                };
              }}
              className="p-1 text-ltrGray transition-colors duration-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              {item.name}
            </NavLink>
          ))}
          <NavHashLink
            to="#contact"
            className="p-1 text-ltrGray transition-colors duration-300 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
              href="/"
              className="-m-1.5 rounded-md p-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary lg:mr-8"
            >
              <span className="sr-only">Dream Flow Financial</span>
              <img
                className="h-8 w-auto"
                src="images/DFF-Logo-250.png"
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
                        borderBottomColor: isActive ? "#000080" : "",
                      };
                    }}
                    className="-mx-3 block px-3 py-2 font-standard text-base leading-7 text-ltrGray hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ))}
                <NavHashLink
                  to="#contact"
                  className="-mx-3 block px-3 py-2 font-standard text-base leading-7 text-ltrGray hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
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
