// import { getProjectById } from "@/lib/projectsData";
import { notFound } from "next/navigation";
import img1 from "../../../../public/upCycle.png";
import img2 from "../../../../public/profileImg.png";
import img3 from "../../../../public/surveyHub.png";
import ProjectSlider from "@/components/project/ProjectSlider";

interface ProjectPageProps {
  params: { id: string };
}

export const projects = [
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

export default function ProjectDetailsPage({ params }: ProjectPageProps) {
  const project = projects?.find((project) => project.id == params.id);

  if (!project) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold text-white mb-8">{project.title}</h1>
      <ProjectSlider
        images={project?.image}
        totalSliderImage={project.image.length}
      />

      <p className="text-lg text-gray-300 my-6">{project.description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-white mb-2">
          Technologies Used
        </h2>
        <div className="flex flex-wrap gap-3">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-indigo-100 text-indigo-500 px-3 py-1 rounded-full text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {project.features && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Key Features
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-300">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {project.challenges && (
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-white mb-2">
            Challenges & Solutions
          </h2>
          <p className="text-gray-300">{project.challenges}</p>
        </div>
      )}

      <div className="flex gap-4 mt-8">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Live Site
          </a>
        )}
        {project.clientRepo && (
          <a
            href={project.clientRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub (Client)
          </a>
        )}
        {project.serverRepo && (
          <a
            href={project.serverRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub (Server)
          </a>
        )}
      </div>
    </div>
  );
}
