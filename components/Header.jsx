"use client";

import { Link } from "react-scroll";

import { useEffect, useState } from "react";
import { Turn as Hamburger } from "hamburger-react";

export default function Header() {
  const [nav, setNav] = useState(false);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 75) {
        setAtTop(false);
      } else {
        setAtTop(true);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth >= 800) {
        setNav(true);
      }
    });
    if (window.innerWidth >= 800) {
      setNav(true);
    }
  }, []);

  const navLinks = [
    { name: "Home", offset: 0 },
    { name: "About", offset: 0 },
    { name: "Skills", offset: 0 },
    { name: "Projects", offset: 0 },
    { name: "Contact", offset: 0 },
  ];

  const navStyles = atTop
    ? "absolute z-20 left-0 right-0 h-screen md:h-auto duration-500 md:duration-0 mt-8 md:mt-0 p-8 md:p-0 items-center md:static flex flex-col md:flex-row md:bg-transparent gap-12 text-xl md:text-lg font-medium tracking-wide bg-white"
    : "absolute z-20 left-0 right-0 h-screen md:h-auto duration-500 md:duration-0 mt-8 md:mt-0 p-8 md:p-0 items-center md:static flex flex-col md:flex-row md:bg-transparent gap-12 text-xl md:text-lg font-medium tracking-wide bg-gradient-to-b from-sky-600 from-40% to-blue-600 to-90% md:from-transparent md:to-transparent";

  return (
    <header
      className={
        atTop
          ? "fixed right-0 left-0 top-0 py-3 md:py-5 text-sky-600 transition duration-200 z-[1000]"
          : "fixed right-0 left-0 top-0 py-3 md:py-5 bg-sky-600 text-white transition duration-200 z-[1000]"
      }
    >
      <div className="container-default flex justify-between items-center">
        <div className="font-secondary2 font-bold text-3xl z-40">
          <a href={"/"}>asferali</a>
        </div>
        <nav className="z-20">
          <ul
            className={
              !nav
                ? navStyles + " translate-x-full "
                : navStyles + " translate-x-0 opacity-100"
            }
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  onClick={() => {
                    if (window.innerWidth < 800) {
                      setNav(false);
                    }
                  }}
                  className="cursor-pointer hover:text-sky-300 duration-300"
                  to={link.name.toLowerCase()}
                  smooth={true}
                  offset={link.offset}
                  duration={500}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="block md:hidden">
          <Hamburger
            size={22}
            direction="right"
            toggled={nav}
            toggle={setNav}
          />
        </div>
      </div>
    </header>
  );
}
