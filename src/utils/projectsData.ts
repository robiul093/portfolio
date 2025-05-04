export const projects = [
    {
    //   id: "meal-delivery-app",
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
      image: "/images/projects/meal-app.png",
      liveUrl: "https://meal-app.vercel.app",
      clientRepo: "https://github.com/username/meal-app-client",
      serverRepo: "https://github.com/username/meal-app-server",
    },
  ];
  