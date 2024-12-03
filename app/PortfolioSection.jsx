import SectionHeading from "@/components/SectionHeading";
import { IconArrowUpRight, IconPlus } from "@/lib/icons";
import { projects } from "@/lib/portfolio";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight, FaArrowUp } from "react-icons/fa";

export default function PortfolioSection() {
  return (
    <section
      name="projects"
      className="py-20 section-gradient text-white min-h-screen"
    >
      <div className="container-default flex flex-col gap-8 justify-center items-center">
        <SectionHeading
          heading={"My Work"}
          subheading={"Portfolio"}
          inverted={true}
        />
        {projects.map((project) => (
          <div className="flex md:flex-row gap-8 mb-12" key={project.id}>
            <div
              className={
                project.id % 2 == 0
                  ? "flex flex-col md:flex-row-reverse gap-8"
                  : "flex flex-col md:flex-row gap-8"
              }
            >
              <div className="rounded-lg ring-2 overflow-hidden aspect-[1] shadow-lg relative">
                <img className="card-img" src={project.image} alt="" />
                <div className="card-hover absolute inset-0 bg-sky-300 bg-opacity-0 hover:bg-opacity-60 transition duration-300 group">
                  <Link
                    className="absolute top-[45%] left-[41%] p-3 border-2 border-white text-lg font-medium text-sky-600 rounded-full bg-white transition duration-300 hidden group-hover:block shadow-md"
                    href={project.liveSite}
                    target="_blank"
                  >
                    <IconPlus />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-4 text-center md:text-left">
                <h2
                  className={
                    project.id % 2 == 0
                      ? "text-3xl font-semibold text-center md:text-right"
                      : "text-3xl font-semibold"
                  }
                >
                  {project.title}
                </h2>
                <p className={"font-medium text-lg text-justify"}>
                  {project.description}
                </p>
                <p
                  className={
                    project.id % 2 == 0
                      ? "font-semibold text-xl text-center md:text-right"
                      : "font-semibold text-xl"
                  }
                >
                  <span className="font-medium text-lg border-b-4 border-sky-300 mr-2">
                    Tech Stack:
                  </span>
                  {"  "}
                  {project.toolsUsed.map((tool, index) => {
                    if (index !== project.toolsUsed.length - 1) {
                      return <span className="">{tool} | </span>;
                    } else {
                      return <span>{tool}</span>;
                    }
                  })}
                </p>
                <div
                  className={
                    project.id % 2 == 0
                      ? "flex flex-col md:flex-row gap-4 justify-end"
                      : "flex flex-col md:flex-row gap-4"
                  }
                >
                  <Link
                    className="btn-inverted"
                    href={project.liveSite}
                    target="_blank"
                  >
                    Live Site
                    <span className="w-6 h-6 mb-1 -ml-1">
                      <IconArrowUpRight />
                    </span>
                  </Link>
                  <Link
                    className="btn-inverted"
                    href={project.githubLink}
                    target="_blank"
                  >
                    GitHub Repository
                    <span>
                      <FaArrowRight size={20} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
