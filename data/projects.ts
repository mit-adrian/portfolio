export type ProjectStatus = "completed" | "in-progress" | "planned";

export const projects = [
  {
    title: "Task Manager",
    description:
      "A secure CRUD task management application with user authentication and persistent storage.",
    tech: ["Next.js", "Express", "PostgreSQL", "JWT"],
    status: "completed" as ProjectStatus,
    image: "/projects/task-manager.webp",
    demo: "#",
    repo: "#",

    package: "MVP Web App",
    priceRange: "$1.5k–$2.5k",
    optimization: "Speed & Cost",
  },
  {
    title: "Role-Based Inventory System",
    description:
      "Inventory management system with role-based access control, audit logs, and secure authentication.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "RBAC"],
    status: "in-progress" as ProjectStatus,
    image: "/projects/inventory.webp",
    demo: "#",
    repo: "#",

    package: "Business Dashboard",
    priceRange: "$2.5k–$4k",
    optimization: "Quality & Cost",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "Admin dashboard for managing products, orders, and users with analytics and reporting features.",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    status: "planned" as ProjectStatus,
    image: "/projects/dashboard.webp",
    demo: "#",
    repo: "#",

    package: "Production System",
    priceRange: "$5k+",
    optimization: "Quality & Scale",
  },
  {
    title: "Authentication Service",
    description:
      "Standalone authentication service implementing JWT-based login, refresh tokens, and access control.",
    tech: ["Node.js", "Express", "JWT", "bcrypt"],
    status: "completed" as ProjectStatus,
    image: "/projects/auth-service.webp",
    demo: "#",
    repo: "#",

    package: "Security Module",
    priceRange: "$2k–$3.5k",
    optimization: "Quality & Security",
  },
  {
    title: "Secure File Upload System",
    description:
      "Web application for uploading and managing files with validation, access control, and audit trails.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Cloud Storage"],
    status: "in-progress" as ProjectStatus,
    image: "/projects/file-upload.webp",
    demo: "#",
    repo: "#",

    package: "Internal Tool",
    priceRange: "$2k–$3.5k",
    optimization: "Security & Reliability",
  },
  {
    title: "API Rate Limiter",
    description:
      "Middleware service that protects APIs against abuse using rate limiting and request tracking.",
    tech: ["Node.js", "Redis", "Express"],
    status: "planned" as ProjectStatus,
    image: "/projects/rate-limiter.webp",
    demo: "#",
    repo: "#",

    package: "Infrastructure Component",
    priceRange: "$1.5k–$3k",
    optimization: "Performance & Reliability",
  },
];
