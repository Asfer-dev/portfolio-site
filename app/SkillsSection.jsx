import SectionHeading from "@/components/SectionHeading";
import htmlLogo from "@/public/assets/technical-tools/html_logo.png";
import cssLogo from "@/public/assets/technical-tools/css_logo.png";
import javascriptLogo from "@/public/assets/technical-tools/javascript_logo.png";
import reactLogo from "@/public/assets/technical-tools/react_logo.png";
import nextLogo from "@/public/assets/technical-tools/next_logo.png";
import tailwindLogo from "@/public/assets/technical-tools/tailwind_logo.png";
import bootstrapLogo from "@/public/assets/technical-tools/bootstrap_logo.png";
import mongodbLogo from "@/public/assets/technical-tools/mongodb_logo.png";
import typescriptLogo from "@/public/assets/technical-tools/typescript-logo.png";
import nodejsLogo from "@/public/assets/technical-tools/nodejs-logo.png";
import gitLogo from "@/public/assets/technical-tools/git-logo.png";
import awsLogo from "@/public/assets/technical-tools/aws-logo.png";
import apiIntegrationLogo from "@/public/assets/technical-tools/api-integration-logo.png";
import Image from "next/image";

import iconTwoLines from "@/public/assets/bgicons-blue-600/undraw_two-lines.svg";

export default function SkillsSection() {
  const tools = [
    { name: "HTML", image: htmlLogo },
    { name: "CSS", image: cssLogo },
    { name: "Javascript", image: javascriptLogo },
    { name: "React.js", image: reactLogo },
    { name: "Next.js", image: nextLogo },
    { name: "Typescript", image: typescriptLogo },
    { name: "Node.js", image: nodejsLogo },
    { name: "Tailwind CSS", image: tailwindLogo },
    { name: "MongoDB", image: mongodbLogo },
    { name: "Git & Github", image: gitLogo },
    { name: "AWS", image: awsLogo },
    { name: "API Integration", image: apiIntegrationLogo },
    { name: "Bootstrap", image: bootstrapLogo },
  ];

  return (
    <section
      name="skills"
      className="py-20 container-default flex flex-col items-center justify-center gap-8 relative"
    >
      <div className="absolute inset-0">
        <div className="absolute bottom-[1%] md:bottom-[10%] right-[10%] opacity-[65%]">
          <Image
            className="rotate-[270%]"
            src={iconTwoLines}
            height={60}
            width={60}
          />
        </div>
        <div className="absolute top-[1%] md:top-[10%] left-[20%] md:left-[30%] opacity-[65%]">
          <Image
            className="rotate-4"
            src={iconTwoLines}
            height={60}
            width={60}
          />
        </div>
      </div>
      <SectionHeading heading={"Skills"} subheading={"Experience"} />
      <div className="flex flex-wrap gap-4 md:gap-8 justify-center relative">
        {tools.map((tool) => (
          <div className="rounded-lg tool-shadow px-6 md:px-8 py-6 flex flex-col justify-between gap-4 hover:bg-neutral-50 hover:scale-105 duration-300 border border-sky-100">
            <div className="h-full w-full flex justify-center items-center">
              <Image src={tool.image} width={100} height={100} />
            </div>
            <p className="text-lg font-medium text-neutral-700 text-center w-[100px]">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
