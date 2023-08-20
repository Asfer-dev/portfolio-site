import SectionHeading from "@/components/SectionHeading";
import { myInfo } from "@/lib/myinfo";
import iconCircledArrow from "@/public/assets/bgicons-blue-300/undraw_circled-arrow.svg";
import iconFunArrow from "@/public/assets/bgicons-blue-300/undraw_fun-arrow.svg";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      name="about"
      className="py-20 section-gradient text-white min-h-screen"
    >
      <div className="container-default flex flex-col gap-8 justify-center items-center relative">
        <div className="absolute inset-0">
          <div className="svg absolute top-[-10%] md:top-[-23%] right-[10%]">
            <Image
              className="rotate-180"
              src={iconCircledArrow}
              height={60}
              width={60}
            />
          </div>
          <div className="svg absolute bottom-[-10%] md:bottom-[-48%] left-[10%]">
            <Image
              className="rotate-180"
              src={iconFunArrow}
              height={60}
              width={60}
            />
          </div>
        </div>
        <SectionHeading
          heading={"About Me"}
          subheading={"My background"}
          inverted={true}
        />
        <p className="text-xl font-medium text-center md:text-left relative">
          I am a creative developer specialized in Web Development and excited
          about creating stunning websites. My expertise lies in translating
          designs into fully funcional websites while utilizing my development
          skills enhance and customize their features. My goal is to craft
          visually appealing, user-friendly and optimized websites that will
          help you grow your business.
        </p>
        <div className="font-medium text-xl grid md:grid-cols-2 gap-8 w-full items-start text-center md:text-left relative">
          <div>
            <h3 className="font-bold border-b-4 border-sky-300 mb-2 text-lg uppercase w-fit mx-auto md:mx-0">
              Full Name
            </h3>
            <p>Asfer Ali</p>
          </div>
          <div>
            <h3 className="font-bold border-b-4 border-sky-300 mb-2 text-lg uppercase w-fit mx-auto md:mx-0">
              Phone
            </h3>
            <p>{myInfo.phone}</p>
          </div>
          <div>
            <h3 className="font-bold border-b-4 border-sky-300 mb-2 text-lg uppercase w-fit mx-auto md:mx-0">
              Email
            </h3>
            <p>{myInfo.email}</p>
          </div>
          <div>
            <h3 className="font-bold border-b-4 border-sky-300 mb-2 text-lg uppercase w-fit mx-auto md:mx-0">
              Education
            </h3>
            <p>{myInfo.education}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
