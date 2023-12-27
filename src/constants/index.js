const skillContent = [
  {
    title: "Language",
    links: [
      {
        image: "/skill/language/c++.png",
        name: "C/C++",
      },
      {
        image: "/skill/language/js.png",
        name: "Javascript",
      },
      {
        image: "/skill/language/php.png",
        name: "PHP",
      },
      {
        image: "/skill/language/python.png",
        name: "Python",
      },
    ],
  },
  {
    title: "Front End",
    links: [
      {
        image: "/skill/front-end/reactjs.png",
        name: "React JS",
      },
      {
        image: "/skill/front-end/nextjs.png",
        name: "Next JS",
      },
      {
        image: "/skill/front-end/tailwind.png",
        name: "Tailwind CSS",
      },
    ],
  },
  {
    title: "UI Design",
    links: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
  },
  {
    title: "Database",
    links: [
      {
        image: "/skill/database/prisma.png",
        name: "Prisma",
      },
      {
        image: "/skill/database/postgresql.png",
        name: "PostgreSQL",
      },
      {
        image: "/skill/database/mysql.png",
        name: "MySQL",
      },
    ],
  },
  {
    title: "Control System",
    links: [
      {
        image: "/skill/command-line/github.png",
        name: "Github",
      },
      {
        image: "/skill/command-line/git.png",
        name: "Git",
      },
    ],
  },
  {
    title: "Learning",
    links: [
      {
        image: "/skill/learning/typescript.png",
        name: "Typescript",
      },
      {
        image: "/skill/learning/laravel.png",
        name: "Laravel",
      },
      {
        image: "/skill/learning/go.png",
        name: "Golang",
      },
    ],
  },
];

const portfolioContent = [
  {
    src: "/portfolio/Landing ITS EXPO.png",
    title: "ITS EXPO 2023",
    technique: "UI/UX Design, Website Design, Design System",
    firstLink: "https://www.expo-its.com/",
    secondLink:
      "https://www.figma.com/file/u5NhRuBk3QtPbtPuxyZlzM/Portfolio?type=design&node-id=0%3A1&mode=design&t=kPexva31pTKH5tOz-1",
    firstButtonText: "VISIT ITS EXPO 2023",
    secondButtonText: "FIGMA ITS EXPO 2023",
  },
  {
    src: "/portfolio/Landing UKM EXPO.png",
    title: "UKM EXPO 2023",
    technique: "UI/UX Design, Website Design, Design System",
    firstLink: "https://itsukmexpo.com/",
    secondLink:
      "https://www.figma.com/file/u5NhRuBk3QtPbtPuxyZlzM/Portfolio?type=design&node-id=0%3A1&mode=design&t=kPexva31pTKH5tOz-1",
    firstButtonText: "VISIT UKM EXPO 2023",
    secondButtonText: "FIGMA UKM EXPO 2023",
  },
  {
    src: "/portfolio/Landing Schematics.png",
    title: "Schematics 2023",
    technique: "UI/UX Design, Website Design, Design System",
    firstLink: "https://schematics-its.com/",
    secondLink:
      "https://www.figma.com/file/u5NhRuBk3QtPbtPuxyZlzM/Portfolio?type=design&node-id=0%3A1&mode=design&t=kPexva31pTKH5tOz-1",
    firstButtonText: "VISIT SCHEMATICS 2023",
    secondButtonText: "FIGMA SCHEMATICS 2023",
  },
  {
    src: "/portfolio/Blender 3D Modern House.png",
    title: "3D Model: Modern House",
    technique:
      "Blender, Modelling, Material, Lighting, Rendering, Compositing, Particle System",
    firstLink: "Personal Project",
    secondLink: "https://www.blender.org",
    firstButtonText: "PERSONAL PROJECT",
    secondButtonText: "BLENDER SOFTWARE",
  },
  {
    src: "/portfolio/Hoobank Landing.png",
    title: "Hoobank Landing Page",
    technique: "Website Design, Vite, TailwindCSS, React JS, Figma",
    firstLink: "https://yaboidimsum.github.io/modern-bank-web/",
    secondLink: "https://github.com/yaboidimsum/modern-bank-web",
    firstButtonText: "VISIT DEPLOYMENT",
    secondButtonText: "VISIT GITHUB REPO",
  },
  {
    src: "/portfolio/Landing Nike.png",
    title: "Nike Store Landing Page",
    technique: "Website Design, Vite, TailwindCSS, React JS, Figma",
    firstLink: "https://yaboidimsum.github.io/nike-website/",
    secondLink: "https://github.com/yaboidimsum/nike-website",
    firstButtonText: "VISIT DEPLOYMENT",
    secondButtonText: "VISIT GITHUB REPO",
  },
];

const certificateContent = [
  {
    src: "/",
    title: "COMPFEST 14 UX Academy",
    technique:
      "UX Design, UX Research, UX Writer, Design System, Design Thinking",
    firstLink: "/",
    secondLink: "/",
    firstButtonText: "CERTIFICATE UX ACADEMY",
    secondButtonText: "COMPFEST FASILKOM UI",
  },
  {
    src: "/",
    title: "Docker Mastery Bootcamp",
    technique: "Basic Service, Build Docker App, Basic Docker Security",
    firstLink: "/",
    secondLink: "/",
    firstButtonText: "CERTIFICATE DOCKER BOOTCAMP",
    secondButtonText: "LAB AJK INFORMATIKA ITS",
  },
  {
    src: "/",
    title: "Udemy: Modern 3D House in Blender",
    technique:
      "Blender, Modelling, Material, Lighting, Rendering, Compositing, Particle System",
    firstLink: "/",
    secondLink: "/",
    firstButtonText: "CERTIFICATE BLENDER MODERN HOUSE",
    secondButtonText: "UDEMY COURSE WEBSITE",
  },
  {
    src: "/",
    title: "Hackerrank: Javascript Basic Assessment",
    technique:
      "Basic Javascript, Fundamental Javascript, Functions, Object Oriented Programming, Modules",
    firstLink: "/",
    secondLink: "/",
    firstButtonText: "CERTIFICATE BASIC JAVASCRIPT",
    secondButtonText: "HACKERRANK WEBSITE",
  },
  {
    src: "/",
    title: "Expert Staff: UI/UX Designer of ITS EXPO 2023",
    technique:
      "UI/UX Design, Website Design, Design System, Design Thinking, Staff Intelligence, Staff Management ",
    firstLink: "/",
    secondLink: "/",
    firstButtonText: "CERTIFICATE EXPERT STAFF",
    secondButtonText: "FIGMA ITS EXPO 2023",
  },
  {
    src: "/",
    title: "Ruangguru Engineering Academy: AI Mastery Bootcamp Batch 1 2023",
    technique:
      "Fundamentals of Python, Data Visualization, Linear Algebra and Calculus, Basic Machine Learning, Intro to Deep Learning, Visual Recognition with CNN, Natural Language Processing with Transformers, Langchain",
    firstLink: "/",
    secondLink: "/",
    firstButtonText: "CERTIFICATE REA BOOTCAMP",
    secondButtonText: "RUANGGURU ENGINEERING ACADEMY",
  },
];

export default {
  skillContent,
  portfolioContent,
  certificateContent,
};
