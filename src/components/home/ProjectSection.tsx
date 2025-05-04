import {
  FaAngleDoubleRight,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";
import surveyHub from "@/../public/surveyHub.png";
import portfolio from "@/../public/surveyHub.png";
import upCycleImage from "@/../public/upCycle.png";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "upCycle",
    description:
      "A SecondHand Marketplace platform where users can buy and sell used products. Features include product listing, filtering, and secure authentication. Built with Next.js, Express.js, MongoDB, and Tailwind CSS.",
    technologies: [
      "Next.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "bcrypt",
    ],
    image: upCycleImage, // make sure to import or define `upCycleImage` at the top
    demoLink: "https://up-cycle-client.vercel.app/",
    codeLink: "https://github.com/robiul093/secondhand-marketplace-client",
  },
  {
    id: 2,
    title: "SurveyHub",
    description:
      "A dynamic survey platform where users can create, vote, and comment on surveys. Built with React, Tailwind CSS, Firebase, and Stripe.",
    technologies: ["React", "Tailwind CSS", "Firebase", "Stripe"],
    image: surveyHub,
    demoLink: "https://assignment-12-33727.web.app/",
    codeLink: "https://github.com/robiul093/assignment-12-client",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my projects and skills, developed using React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS"],
    image: portfolio,
    demoLink: "https://portfolio-robiul.netlify.app/",
    codeLink: "https://github.com/robiul093/portfolio",
  },
  // Add more projects as needed
];

export default function ProjectSection() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #000000 0%, #272727 50%, #494949 100%)",
      }}
      className="px-6 md:px-12 py-10"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-[#70FF00] mb-4">Projects()</h2>
        <button className="text-[#70FF00] hover:border-b-2 py-[2px] border-b-[#70FF00]">
          <Link href={"/projects"} className="flex items-center gap-3">
            All projects <FaAngleDoubleRight />
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/projects/${project?.id}`}>
              <Image
                src={project?.image}
                alt={project?.title}
                width={100}
                height={100}
                className="w-full h-36 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {project?.title}
              </h3>
              <p className="text-gray-700 mb-4">{`${project?.description.slice(
                0,
                80
              )}...`}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project?.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}

                {project?.technologies.length > 3 && (
                  <span className="px-2 py-1 bg-blue-100 text-black text-sm rounded-full">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>
            </Link>
            <div className="flex items-center justify-between ">
              <Link
                href={project?.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-blue-700 mt-3  text-blue-500 hover:text-blue-700 flex items-center space-x-1"
              >
                <FaExternalLinkAlt size={18} />
                <span>Live Demo</span>
              </Link>
              <Link
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border-2 border-blue-700 mt-3  text-gray-600 hover:text-gray-800 flex items-center space-x-1"
              >
                <FaGithub size={18} />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
