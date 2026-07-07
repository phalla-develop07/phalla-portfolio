export const projects = [
  {
    id: "proj-1",
    title: "E-Commerce System",
    category: "Full-Stack",
    description:
      "A full-stack online store with separate admin and customer roles, a designed database schema, and a complete ordering flow — built solo in 11 days.",
    image: "/assets/images/projects/ecommerce.jpg",
    tech: ["Laravel", "Vue.js", "MySQL", "Bootstrap"],
    github: "https://github.com/phalla-develop07",
    demo: "",
    featured: true,
  },
  {
    id: "proj-2",
    title: "Mr.Fixer — Service Booking App",
    category: "Full-Stack",
    description:
      "A service-booking platform that lets users request urgent home and technical services. Handled backend logic, JWT authentication, and QA testing across a 6-week team sprint.",
    image: "/assets/images/projects/mrfixer.jpg",
    tech: ["Node.js", "React.js", "JWT", "MySQL"],
    github: "https://github.com/phalla-develop07",
    demo: "",
    featured: true,
  },
  {
    id: "proj-3",
    title: "Note Taker",
    category: "Frontend",
    description:
      "A lightweight task and note-taking app with local storage persistence, deployed to production on a custom domain. Led the project as PM and frontend developer.",
    image: "/assets/images/projects/notetaker.jpg",
    tech: ["HTML", "CSS", "JavaScript", "Vercel"],
    github: "https://github.com/phalla-develop07",
    demo: "",
    featured: false,
  },
];

export const projectFilters = ["All", "Full-Stack", "Frontend", "Backend"];
