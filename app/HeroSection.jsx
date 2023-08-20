"use client";

import TypedText from "@/components/TypedText";
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";
import iconTwoLines from "@/public/assets/bgicons-blue-600/undraw_two-lines.svg";
import iconCloud from "@/public/assets/bgicons-blue-300/undraw_cloud.svg";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="py-32 text-neutral-700 background-pattern min-h-screen relative"
    >
      <div className="absolute inset-0 hero-pattern">
        <div className="absolute inset-0 radial-gradient"></div>
      </div>
      <div className="absolute inset-0">
        <div className="absolute top-[22%] md:top-[30%] left-[80%] md:left-[25%] opacity-[60%]">
          <Image src={iconTwoLines} height={50} width={50} />
        </div>
        <div className="svg absolute top-[15%] md:top-[20%] left-[20%] md:left-[40%] opacity-[70%]">
          <Image src={iconCloud} height={50} width={50} />
        </div>
        <div className="svg absolute top-[55%] md:top-[25%] right-[10%] opacity-[70%]">
          <Image src={iconCloud} height={50} width={50} />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4 container-default relative">
        <div className="pt-20 mb-12 flex flex-col items-center md:items-start relative">
          <div className="relative">
            <p className="font-semibold text-3xl md:text-4xl mb-4">Hello I'm</p>
            <h1 className="font-primary2 text-7xl md:text-8xl font-bold mb-4 text-sky-600">
              Asfer Ali
            </h1>
            <h2 className="font-semibold text-3xl md:text-4xl mb-8">
              A <TypedText rotationArray={["Web Developer"]} />
            </h2>
          </div>
          <div className="flex gap-4 flex-col sm:flex-row font-medium relative">
            <Link
              to="contact"
              smooth={true}
              offset={-50}
              duration={500}
              className="btn-primary cursor-pointer"
            >
              <HiOutlineMail size={20} /> Contact Me
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="group cursor-pointer px-4 py-3 text-lg justify-center items-center font-semibold flex gap-3 text-sky-600"
            >
              See My Work{" "}
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={20} />
              </span>
            </Link>
          </div>
        </div>
        <div className="photo md:pt-8 flex justify-center md:justify-start md:pl-16 items-center relative">
          <img
            className="w-[60%] max-w-[500px] rounded-[10rem]"
            src="https://asferali-portfolio.s3.eu-north-1.amazonaws.com/IMG_6298-min.jpeg"
            alt="asfer-ali"
          />
          <div className="absolute top-[-3%] md:top-2 left-[19%] md:left-10 w-[55%] h-[115%] max-h-[550px] border-[5px] border-sky-600 rounded-[12rem]"></div>
        </div>
      </div>
    </section>
  );
}
