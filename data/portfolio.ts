export type PortfolioConfig = {
  site: { title: string; description: string; accent: string };
  person: { name: string; initials: string; role: string; headline: string; profileImage: string; location: string; availability: string; intro: string; email: string; resumeUrl: string; socials: { github: string; linkedin: string } };
  sections: Record<"about" | "experience" | "projects" | "skills" | "education" | "contact", boolean>;
  about: { eyebrow: string; title: string; cards: { icon: string; title: string; items: { text: string; date?: string }[] }[] };
  experience: { company: string; role: string; period: string; location: string; summary: string; achievements: string[]; technologies: string[] }[];
  projects: { title: string; category: string; image: string; description: string; technologies: string[]; github: string; demo: string; demoLabel?: string; featured?: boolean }[];
  projectsNote: string;
  skills: { group: string; items: string[] }[];
  education: { school: string; qualification: string; period: string; note: string }[];
  contact: { title: string; description: string; showForm: boolean; formEndpoint: string };
};

// EDIT THIS FILE to make the portfolio yours. Components do not need changing.
// Empty URLs are handled gracefully; set a section to false to hide it entirely.
export const portfolio: PortfolioConfig = {
  site: { title: "Nik Mohammad Syahir — Software Developer & QA", description: "Nik Mohammad Syahir's software development and QA portfolio: web applications, backend APIs, Android, and intelligent job matching.", accent: "#d6ad68" },
  person: {
    name: "Nik Mohammad Syahir", initials: "NS", role: "Software Developer & QA", headline: "Software Developer & QA Intern · IT Student", profileImage: "/profile.jpg", location: "Kajang, Selangor",
    availability: "Open to software development & QA opportunities",
    intro: "I build web and backend applications, test APIs, and debug software with a focus on reliable user experiences. Currently working with Next.js, Java, Spring Boot, and PostgreSQL at ReadHero.",
    email: "nikmohammadsyahir18@gmail.com", resumeUrl: "", // Add a public PDF only if you want to share your full CV.
    socials: { github: "https://github.com/nmsyahir", linkedin: "https://www.linkedin.com/in/nikmohdsyahir" },
  },
  sections: { about: true, experience: false, projects: true, skills: true, education: false, contact: true },
  about: {
    eyebrow: "Get to know me", title: "About Me",
    cards: [
      { icon: "🎓", title: "Education", items: [
        { text: "Bachelor of Information Technology (Hons.), Creative IT — UiTM Arau · CGPA 3.77", date: "2024–Present" },
        { text: "Diploma in Computer Science — UiTM Arau · CGPA 3.59 · Vice Chancellor Award", date: "2022–2024" },
      ] },
      { icon: "💼", title: "Work Experience", items: [
        { text: "Software Developer & QA Intern — AM ETERNA (ReadHero)", date: "2026–Present" },
        { text: "Web and backend development, REST API integration, automated and regression testing." },
        { text: "Software Developer Intern — Ejoe Solutions", date: "Mar–Aug 2024" },
        { text: "Built the KSEWA car rental website and documented the SISEMAS system." },
      ] },
      { icon: "🏆", title: "Highlights", items: [
        { text: "Best Poster Award (Gold Medal), REMACS 9.0 FYP Research Exhibition", date: "2026" },
        { text: "Dean's List in every completed Bachelor's semester and five Diploma semesters." },
        { text: "Presented the job recommendation portal at SIC 2026." },
      ] },
    ],
  },
  experience: [
    {
      company: "AM ETERNA SDN. BHD. (ReadHero)", role: "Software Developer & QA Intern", period: "Sep 2026–Present", location: "Malaysia",
      summary: "Contributing across web, backend, and QA workflows for ReadHero.",
      achievements: ["Developed with Next.js, React, Java, Spring Boot, and Spring Data JPA; supported testing and debugging for a Flutter Android app.", "Integrated and tested REST APIs backed by PostgreSQL and microservices.", "Used JUnit 5 and H2 integration tests, Sentry breadcrumbs, logging, and regression testing to investigate reliability issues."],
      technologies: ["Next.js", "React", "Java", "Spring Boot", "PostgreSQL", "JUnit 5"],
    },
    {
      company: "Ejoe Solutions", role: "Software Developer Intern", period: "Mar–Aug 2024", location: "Malaysia",
      summary: "Supported customer-facing web development and product documentation.",
      achievements: ["Customized a Bootstrap-based PHP template for the KSEWA car rental website.", "Wrote an end-user manual for SISEMAS, a WordPress-based gold sales and management system."],
      technologies: ["PHP", "Bootstrap", "WordPress"],
    },
  ],
  projects: [
    { title: "Job Recommendation Portal", category: "Final year project", image: "", description: "Built a Django portal that extracts PDF resumes and uses NLP, TF-IDF, and cosine similarity to match candidates with relevant job listings.", technologies: ["Python", "Django", "NLP", "TF-IDF"], github: "", demo: "", featured: true },
    { title: "MYHazard", category: "Team mobile project", image: "", description: "Co-developed an Android app for reporting floods, accidents, potholes, and roadblocks. Its real-time GPS location tracking helps show nearby hazards on Google Maps, supported by a Node/Express API and MongoDB.", technologies: ["Android", "Java", "Node.js", "MongoDB", "Google Maps"], github: "", demo: "" },
    { title: "Event Planning System", category: "Web application", image: "", description: "Developed an event planner with map-based locations, route guidance, and live weather forecasts using Google Maps and OpenWeatherMap APIs.", technologies: ["React", "Node.js", "Express", "MongoDB"], github: "", demo: "" },
  ],
  projectsNote: "Details available on request",
  skills: [
    { group: "Languages", items: ["Java", "Python", "JavaScript", "PHP", "SQL", "HTML", "CSS"] },
    { group: "Frameworks & platforms", items: ["Next.js", "React", "Spring Boot", "Django", "Flutter", "Android"] },
    { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "H2"] },
    { group: "Testing & Tools", items: ["JUnit 5", "Jest", "Postman", "API Testing", "Software Testing", "Sentry", "Git", "GitHub", "Figma"] },
    { group: "Development Skills", items: ["REST APIs"] },
  ],
  education: [
    { school: "Universiti Teknologi MARA (UiTM), Arau", qualification: "Bachelor of Information Technology (Hons.) — Creative IT", period: "Oct 2024–Present", note: "CGPA 3.77/4.0; Dean's List every completed semester. Direct entry into Semester 3 via the Diploma pathway." },
    { school: "Universiti Teknologi MARA (UiTM), Arau", qualification: "Diploma in Computer Science", period: "Mar 2022–Aug 2024", note: "CGPA 3.59/4.0; Dean's List for five semesters and Vice Chancellor Award." },
  ],
  contact: { title: "Let’s connect.", description: "Looking for a developer or QA engineer who can work across implementation and testing? I'd be glad to hear from you.", showForm: true, formEndpoint: "" },
};
