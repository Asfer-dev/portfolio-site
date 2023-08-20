import { myInfo } from "@/lib/myinfo";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer className="footer-pattern text-white pb-16 text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-600 to-transparent"></div>
      <div className="container-default flex flex-col justify-center items-center gap-12 relative">
        <BackToTop />
        <div className="font-secondary2 font-bold text-3xl">
          <Link href={"/"}>asferali</Link>
        </div>
        <div className="flex gap-8 justify-center">
          <Link
            className="duration-300 hover:text-sky-200 hover:scale-110"
            href={myInfo.github}
            target="_blank"
          >
            <FaGithub size={25} />
          </Link>
          <Link
            className="duration-300 hover:text-sky-200 hover:scale-110"
            href={myInfo.linkedin}
            target="_blank"
          >
            <FaLinkedin size={25} />
          </Link>
          <Link
            className="duration-300 hover:text-sky-200 hover:scale-110"
            href={myInfo.instagram}
            target="_blank"
          >
            <FaInstagram size={25} />
          </Link>
        </div>
        <div>
          All Rights Reserved © 2023{" "}
          <span className="font-semibold">Asfer Ali</span>
        </div>
      </div>
    </footer>
  );
}
