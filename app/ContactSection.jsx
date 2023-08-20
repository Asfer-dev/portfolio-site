import SectionHeading from "@/components/SectionHeading";
import iconTwoLines from "@/public/assets/bgicons-blue-300/undraw_party-hat.svg";
import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      name="contact"
      className="py-20 container-default flex flex-col gap-8 items-center relative"
    >
      <div className="absolute inset-0">
        <div className="svg absolute bottom-[5%] md:bottom-[10%] right-[10%] opacity-[70%]">
          <Image
            className="rotate-[270%]"
            src={iconTwoLines}
            height={50}
            width={50}
          />
        </div>
        <div className="svg absolute top-[2%] md:top-[10%] left-[5%] md:left-[10%] opacity-[70%]">
          <Image
            className="rotate-4"
            src={iconTwoLines}
            height={50}
            width={50}
          />
        </div>
      </div>
      <SectionHeading heading={"Contact Me"} subheading={"Get In Touch"} />
      <form
        action="https://getform.io/f/8c4ec6ff-913b-4987-8486-dc136e400208"
        method="POST"
        className="flex flex-col gap-4 w-full max-w-[500px] relative"
      >
        <input placeholder="Your Name" type="text" name="name" />
        <input placeholder="Your Email" type="email" name="email" id="" />
        <textarea
          placeholder="Your Message"
          name="message"
          id=""
          cols="30"
          rows="10"
        />
        <div className="flex justify-center">
          <button className="btn-primary" type="submit">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
