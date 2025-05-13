import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
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
    serverRepo: "", // Not used if everything is client-side
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
    image: ["https://i.postimg.cc/13kMNvFr/Screenshot-2025-05-13-184703.png"],
    liveUrl: "https://car-store-clint.vercel.app/",
    clientRepo: "https://github.com/robiul093/car-store",
    serverRepo: "https://github.com/robiul093/car-store-node",
  },
  // {
  //   id: "4",
  //   title: "Portfolio Website",
  //   description:
  //     "A sleek personal portfolio website to showcase my projects, technical skills, and contact information. It's fully responsive and built with a minimal yet modern UI.",
  //   techStack: ["React", "Tailwind CSS", "React Router", "Framer Motion"],
  //   features: [
  //     "Project showcase with dynamic routing",
  //     "Responsive and mobile-friendly design",
  //     "Animated transitions using Framer Motion",
  //     "Skills section with visual icons",
  //     "Contact form with EmailJS integration",
  //   ],
  //   challenges:
  //     "Creating smooth UI transitions and layout consistency across screen sizes took multiple iterations. Solved using utility-first Tailwind styling and animated route handling.",
  //   image: [
  //     "https://cdn.dribbble.com/userupload/29686350/file/original-7f7dc022914389b26328df81a792e0c8.png?resize=1504x1128&vertical=center",
  //   ],
  //   liveUrl: "https://robiul-portfolio.vercel.app/",
  //   clientRepo: "https://github.com/robiul093/portfolio",
  //   serverRepo: "",
  // },
  {
    id: "4",
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
    image: [
      "https://cdn.dribbble.com/userupload/25362862/file/original-b898685d3a183fc9787b855b3242d7df.png?resize=1504x1128&vertical=center",
      "https://cdn.dribbble.com/userupload/25313623/file/original-af86fd22afa971ede64452c4e6c84fff.png?resize=1504x1128&vertical=center",
    ],
    liveUrl: "https://meal-app.vercel.app",
    clientRepo: "https://github.com/username/meal-app-client",
    serverRepo: "https://github.com/username/meal-app-server",
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
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
                unoptimized
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
                <Link
                  href={project?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-2 border-blue-700 mt-3  text-blue-500 hover:text-blue-700 flex items-center space-x-1"
                >
                  <FaExternalLinkAlt size={18} />
                  <span>Live Demo</span>
                </Link>
                <Link
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border-2 border-blue-700 mt-3  text-gray-600 hover:text-gray-800 flex items-center space-x-1"
                >
                  <FaGithub size={18} />
                  <span>Source Code</span>
                </Link>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
