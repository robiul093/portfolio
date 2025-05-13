import { notFound } from "next/navigation";
import ProjectSlider from "@/components/project/ProjectSlider";
import Link from "next/link";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

const projects = [
  {
    id: "1",
    title: "UpCycle - Secondhand Marketplace",
    description:
      "A full-stack secondhand product marketplace where users can buy and sell used items. Includes role-based access, product listings, and admin controls.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "ShadCN",
      "MongoDB",
      "Express.js",
      "JWT",
      "Bcrypt",
    ],
    features: [
      "Role-based authentication for admin, seller, and buyer",
      "Product listing, booking, and reporting",
      "Admin dashboard for user and product management",
      "Secure login system with hashed passwords and JWT",
      "Server-side rendering and protected routes",
    ],
    challenges:
      "Implementing secure role-based routing and dynamic product filtering logic across SSR pages while maintaining performance and data protection.",
    image: [
      "https://i.postimg.cc/FsnThrsq/Screenshot-2025-05-10-213336.png",
      "https://i.postimg.cc/0yj2Jfvj/Screenshot-2025-05-14-023423.png",
      "https://i.postimg.cc/Pq8XS5Pk/Screenshot-2025-05-14-023345.png",
      "https://i.postimg.cc/mDfbJWH1/Screenshot-2025-05-14-023044.png",
    ],
    liveUrl: "https://upcycle-marketplace.vercel.app",
    clientRepo: "https://github.com/yourusername/upcycle-client",
    serverRepo: "https://github.com/yourusername/upcycle-server",
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
      "https://i.postimg.cc/YCGb95vS/Screenshot-2025-05-13-185143.png",
      // "https://cdn.dribbble.com/userupload/20644906/file/original-25afadf64e65242d47540d9af26c3b0a.png?resize=752x564&vertical=center",
    ],
    liveUrl: "https://assignment-12-33727.web.app/",
    clientRepo: "https://github.com/robiul093/assignment-12-client",
    serverRepo: "https://github.com/robiul093/assignment-12-serverv ",
  },
  {
    id: "3",
    title: "Car Store",
    description:
      "A full-stack car marketplace platform with role-based authentication, product management, and a secure payment system. Admins can manage listings, and users can browse and purchase vehicles.",
    techStack: ["React", "DaisyUI", "Express.js", "MongoDB", "JWT", "Stripe"],
    features: [
      "Role-based access control for admin and users",
      "Product listing, editing, and order management",
      "Secure user authentication with JWT",
      "Stripe integration for handling payments",
      "Multi-page site with route-based navigation",
    ],
    challenges:
      "Implementing secure payment and authentication flows, and managing different user roles with access restrictions across multiple routes.",
    image: [
      "https://i.postimg.cc/13kMNvFr/Screenshot-2025-05-13-184703.png",
    ],
    liveUrl: "https://car-store-clint.vercel.app/",
    clientRepo: "https://github.com/robiul093/car-store",
    serverRepo: "https://github.com/robiul093/car-store-node",
  },
//   {
//     id: "4",
//     title: "Portfolio Website",
//     description:
//       "A sleek personal portfolio website to showcase my projects, technical skills, and contact information. It's fully responsive and built with a minimal yet modern UI.",
//     techStack: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
//     features: [
//       "Project showcase with dynamic routing",
//       "Responsive and mobile-friendly design",
//       "Animated transitions using Framer Motion",
//       "Skills section with visual icons",
//       "Contact form with EmailJS integration",
//     ],
//     challenges:
//       "Creating smooth UI transitions and layout consistency across screen sizes took multiple iterations. Solved using utility-first Tailwind styling and animated route handling.",
//     image: [
//       "https://cdn.dribbble.com/userupload/29686350/file/original-7f7dc022914389b26328df81a792e0c8.png?resize=1504x1128&vertical=center",
//     ],
//     liveUrl: "https://robiul-portfolio.vercel.app/",
//     clientRepo: "https://github.com/robiul093/portfolio",
//     serverRepo: "",
//   },
//   {
//   id: "5",
//   title: "UpCycle - Secondhand Marketplace",
//   description:
//     "A full-stack secondhand product marketplace where users can buy and sell used items. Includes role-based access, product listings, and admin controls.",
//   techStack: [
//     "Next.js",
//     "TypeScript",
//     "Tailwind CSS",
//     "ShadCN",
//     "MongoDB",
//     "Express.js",
//     "JWT",
//     "Bcrypt"
//   ],
//   features: [
//     "Role-based authentication for admin, seller, and buyer",
//     "Product listing, booking, and reporting",
//     "Admin dashboard for user and product management",
//     "Secure login system with hashed passwords and JWT",
//     "Server-side rendering and protected routes"
//   ],
//   challenges:
//     "Implementing secure role-based routing and dynamic product filtering logic across SSR pages while maintaining performance and data protection.",
//   image: [
//     "https://cdn.dribbble.com/userupload/25362862/file/original-b898685d3a183fc9787b855b3242d7df.png?resize=1504x1128&vertical=center",
//     "https://cdn.dribbble.com/userupload/25313623/file/original-af86fd22afa971ede64452c4e6c84fff.png?resize=1504x1128&vertical=center"
//   ],
//   liveUrl: "https://upcycle-marketplace.vercel.app",
//   clientRepo: "https://github.com/yourusername/upcycle-client",
//   serverRepo: "https://github.com/yourusername/upcycle-server"
// },

];

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailsPage({ params }: ProjectPageProps) {
  const { id } = await params; // Use await to resolve params
  const project = projects?.find((project) => project.id == id);

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
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Live Site
          </Link>
        )}
        {project.clientRepo && (
          <Link
            href={project.clientRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub (Client)
          </Link>
        )}
        {project.serverRepo && (
          <Link
            href={project.serverRepo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition"
          >
            GitHub (Server)
          </Link>
        )}
      </div>
    </div>
  );
}
