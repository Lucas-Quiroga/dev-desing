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
  { name: "Incio", href: "#home-section", current: false },
  { name: "Servicios", href: "#exchange-section", current: false },
  { name: "Informacion", href: "#features-section", current: false },
  { name: "Sobre nosotros", href: "#faq-section", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
      <div className="relative flex h-8 sm:h-20 items-center">
        <div className="flex flex-1 items-center sm:justify-between">
          {/* LOGO */}

          <div className="flex flex-shrink-0 items-center">
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
          </div>

          {/* LINKS */}

          <div className="hidden lg:flex items-center border-right ">
            <div className="flex justify-end space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900"
                      : "navlinks text-white hover:text-offwhite hover-underline",
                    "px-3 py-4 rounded-md text-lg font-normal"
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
          <Bars3Icon
            className="block h-6 w-6 text-white"
            aria-hidden="true"
            onClick={() => setIsOpen(true)}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
