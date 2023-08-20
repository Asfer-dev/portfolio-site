"use client";

import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";

export default function BackToTop() {
  return (
    <Link
      to="home"
      smooth={true}
      duration={500}
      className="rounded-full -mb-6 p-4 bg-sky-400 hover:bg-sky-300 shadow-lg relative -top-8 transition duration-300 cursor-pointer"
    >
      <FaArrowUp size={25} />
    </Link>
  );
}
