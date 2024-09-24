import { myInfo } from "@/lib/myinfo";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Socialicons() {
  return (
    <div className="hidden md:block fixed top-[35%] left-0 z-[1000]">
      <ul>
        <li className="px-4 w-[160px] h-[60px] flex justify-between items-center bg-blue-500 text-white ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full"
            href="https://www.linkedin.com/in/asfer-ali/"
            target="_blank"
          >
            LinkedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="px-4 w-[160px] h-[60px] flex justify-between items-center bg-[#333333] text-white ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full"
            href="https://github.com/Asfer-dev"
            target="_blank"
          >
            GitHub <FaGithub size={30} />
          </a>
        </li>
        <li className="px-4 w-[160px] h-[60px] flex justify-between items-center bg-[#6fc2b0] text-white ml-[-100px] hover:ml-[-10px] duration-300">
          <a
            className="flex justify-between items-center w-full"
            href={"mailto:" + myInfo.email}
          >
            Email <HiOutlineMail size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}
