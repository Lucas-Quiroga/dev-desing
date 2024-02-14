"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import React from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Inicio", href: "#home-section", current: false },
  { name: "Servicios", href: "#services", current: false },
  { name: "Preguntas", href: "#faqs", current: false },
  { name: "Sobre nosotros", href: "#about", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mx-auto w-full p-3 md:p-4 lg:px-8">
      <div className="relative flex h-8 sm:h-20 items-center">
        <div className="flex flex-1 items-center sm:justify-between">
          {/* LOGO */}

          {/* <div className="flex flex-shrink-0 items-center">
            <img
              className="block h-10 w-20px lg:hidden"
              src="https://res.cloudinary.com/dncmrwppr/image/upload/v1707502577/Elem18_zt5o2v.png"
              alt="Crypto-Logo"
            />
            <img
              className="hidden h-48px w-44 lg:block pt-12"
              src="https://res.cloudinary.com/dncmrwppr/image/upload/v1707502577/Elem18_zt5o2v.png"
              alt="Crypto-Logo"
            />
          </div> */}

          {/* LINKS */}

          <div className="hidden lg:flex items-center border-right flex-1">
            <div className="flex justify-end flex-1 space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900"
                      : "navlinks text-white hover:text-offwhite hover-underline",
                    "px-3 py-4 rounded-md text-lg font-normal cursor-pointer block"
                  )}
                  aria-current={item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* DRAWER FOR MOBILE VIEW */}

        {/* DRAWER ICON */}

        <div className="block lg:hidden">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
              style={{ color: "white" }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <Bars3Icon
              className="block h-10 w-10 text-white "
              aria-hidden="true"
              onClick={() => setIsOpen(!isOpen)}
            />
          )}
        </div>
      </div>
      <div className="block lg:hidden">
        {isOpen ? (
          <div className="w-full flex flex-col">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900"
                    : "navlinks text-white items-center justify-center flex",
                  "px-3 py-4 rounded-md text-lg font-normal cursor-pointer block hover:bg-white hover:text-black"
                )}
                aria-current={item.href ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Navbar;
