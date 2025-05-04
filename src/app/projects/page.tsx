import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import surveyHub from "@/../public/surveyHub.png";
import portfolio from "@/../public/surveyHub.png";
import upCycleImage from "@/../public/upCycle.png";
import Image from "next/image";
import Link from "next/link";
const projects = [
  {
    id: "1",
    title: "Meal Planning & Delivery App",
    description:
      "A full-stack web application where users can personalize meal plans, manage preferences, and schedule deliveries. Providers can create menus, manage orders, and track deliveries.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Express.js",
      "JWT",
      "Bcrypt",
    ],
    features: [
      "User and provider authentication (JWT)",
      "Personalized meal planning and preferences",
      "Role-based dashboards",
      "Order tracking and response system",
    ],
    challenges:
      "Managing role-based access and secure data communication was complex. Solved by custom middleware, JWT validation, and conditional route handling in the frontend.",
    image: ["https://cdn.dribbble.com/userupload/25362862/file/original-b898685d3a183fc9787b855b3242d7df.png?resize=1504x1128&vertical=center",
      "https://cdn.dribbble.com/userupload/25313623/file/original-af86fd22afa971ede64452c4e6c84fff.png?resize=1504x1128&vertical=center"
    ],
    liveUrl: "https://meal-app.vercel.app",
    clientRepo: "https://github.com/username/meal-app-client",
    serverRepo: "https://github.com/username/meal-app-server",
  },
  {
    id: "2",
    title: "SurveyHub",
    description:
      "SurveyHub is a dynamic web platform where users can participate in surveys, leave feedback, and explore trending polls. It supports real-time voting, commenting, and reporting mechanisms, while surveyors and admins manage the content lifecycle.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "React Router",
      "React Hook Form",
    ],
    features: [
      "Role-based access for Users, ProUsers, Surveyors, and Admins",
      "Survey creation, voting, commenting, and reporting",
      "Payment gateway with Stripe for ProUser subscription",
      "Authentication with Firebase",
      "Admin controls for publishing and managing surveys",
    ],
    challenges:
      "Managing four distinct user roles with dynamic behavior required carefully structured routing and conditional rendering. Solved with reusable layouts, protected routes, and Firebase Auth state listeners.",
    image: [
      "https://cdn.dribbble.com/userupload/20069170/file/original-8d685d20baf0ab7bd78dcd7ccf68962c.jpg?resize=752x564&vertical=center",
      "https://cdn.dribbble.com/userupload/20644906/file/original-25afadf64e65242d47540d9af26c3b0a.png?resize=752x564&vertical=center"
    ],
    liveUrl: "https://assignment-12-33727.web.app/",
    clientRepo: "https://github.com/robiul093/assignment-12-client",
    serverRepo: "", // Not used if everything is client-side
  },
  {
    id: "3",
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio website to showcase my projects, technical skills, and contact information. It's fully responsive and built with a minimal yet modern UI.",
    techStack: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
    features: [
      "Project showcase with dynamic routing",
      "Responsive and mobile-friendly design",
      "Animated transitions using Framer Motion",
      "Skills section with visual icons",
      "Contact form with EmailJS integration",
    ],
    challenges:
      "Creating smooth UI transitions and layout consistency across screen sizes took multiple iterations. Solved using utility-first Tailwind styling and animated route handling.",
    image: ["https://cdn.dribbble.com/userupload/29686350/file/original-7f7dc022914389b26328df81a792e0c8.png?resize=1504x1128&vertical=center"],
    liveUrl: "https://robiul-portfolio.vercel.app/",
    clientRepo: "https://github.com/robiul093/portfolio",
    serverRepo: "",
  },
];

export default function Projects() {
  return (
    <div
      style={{
        background:
          "linear-gradient(to right, #000000 0%, #272727 50%, #494949 100%)",
      }}
      className="min-h-screen mt-[2px] px-6 md:px-12"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300"
          >
            <Link href={`/projects/${project?.id}`}>
              <Image
                src={project?.image[0]}
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
                {project?.techStack.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}

                {project?.techStack.length > 3 && (
                  <span className="px-2 py-1 bg-blue-100 text-black text-xs rounded-full">
                    +{project.techStack.length - 3} more
                  </span>
                )}
              </div>
              <div className="flex items-center justify-between ">
                <a
                  href={project?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-2 border-blue-700 mt-3  text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-2 border-blue-700 mt-3  text-gray-600 hover:text-gray-800 flex items-center space-x-1"
                >
                  <FaGithub size={18} />
                  <span>Source Code</span>
                </a>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
