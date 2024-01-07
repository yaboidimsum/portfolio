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
    src: "/certificate/compfest.png",
    title: "COMPFEST 14 UX Academy",
    technique:
      "UX Design, UX Research, UX Writer, Design System, Design Thinking",
    firstLink:
      "https://verify.compfest.id/cf-2022-3d1182be-eb92-447e-bb53-cca1b2e19cd0",
    secondLink: "https://www.compfest.id/",
    firstButtonText: "CERTIFICATE UX ACADEMY",
    secondButtonText: "COMPFEST FASILKOM UI",
  },
  {
    src: "/certificate/Docker Bootcamp AJK.png",
    title: "Docker Mastery Bootcamp",
    technique: "Basic Service, Build Docker App, Basic Docker Security",
    firstLink:
      "https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=cc5ce1a8e7&attid=0.1&permmsgid=msg-f:1766873112069344506&th=188531bbf0150cfa&view=att&disp=inline&saddbat=ANGjdJ_muM16VLwq5K8XketZnLAbbUq8gJARY-zyn2aLE5GyHP2VT-JzAQQk0K2WGZjnQwVk7r2YRiIGz86EB2jQEArlDQswXEh34Hzo187r4ShEtOrwHStswDkaJOPUdXUAz3DOibkOBKpEJ60Ot5JqMTmk1aIvCQZtDxnTYIIb3YMelPO-BaBus5yK3qX_Kr1BhvVq0eBqkZEEVe08FcCHgRpJLv7bZ-__rfWHTae3l2KUQHQ3btvx84We350vnaagfFcEr9_tuCW70hb6simzcgEQkTc4MrQFNVTS-3U_o_lRsnfrMx_SlK2uTz07kWzgkevyP9DJ_CDWHU_pFGp5hpvCZyx-99FNT8NAiRabFSNB6_5x_bhLgBWG5Ksjgm9igkmC4T2xtU8YevQ7GJRT3MISPr-yxZqM-Zt930z9HPwj8llYgJgzcNiYE4C-iK_9hMuUhybXE1rBCZHLQtTIl0jPBg8VWHl7PtYGWyfO1DI2CLmu5eYdB_1ZZi-xhj3OLLD5xXDP-CchCawZbJmOPzkX28a8NC1b4W6J-5ciFkg_jRYuu26ay8yoSllkXocBGeh-SIUX-0nBKG0fxWx0h4clNH4sLEeKA_9-huMlbLyHxP8i_AnuRKx0XWAIyD-M63yKD3YdrR0dNBOeMWjNH0k8EFAq4wTj2j3KbzP7KkqY2JvszkCDlyYfiYEbYzchuBNHopQ0RFUGpNI0SDOzqcVGtOHa5PUXQ8mcCR29dU5PuAMXiqSNc05O_yUbBB0c-5EKUZWkHcUXQwWP9jrKLRJkHpM3VctE7MxhKV55DFeBuSLVGzqesjwfvs1avt1PErGqA9ZfAcZD2yzYQeOvchk28WSTqU_X8ixyhNS3LmEMauxpQB-F7w4Fojk01-LlrL5iu5NHJKDYuwKPVeplq5N-bFwNI-uUOfB9qVShprsvK-GEg433PO6k3o4WPIIhC28qhmbzKfNGA7l0G_1_FmW9OIsZrPcd22C_xsK7XpyCuK4tfoJBclKEsZPJ9Rl_1wil4ronc9LsM5fRGF8w0aW9Nd-0cGQ6B67Efg",
    secondLink: "https://github.com/arsitektur-jaringan-komputer",
    firstButtonText: "CERTIFICATE DOCKER BOOTCAMP",
    secondButtonText: "LAB AJK INFORMATIKA ITS",
  },
  {
    src: "/certificate/Udemy Blender 3D.png",
    title: "Udemy: Modern 3D House in Blender",
    technique:
      "Blender, Modelling, Material, Lighting, Rendering, Compositing, Particle System",
    firstLink:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-c8d0d0cd-40ec-4678-a842-4641d1e4c5fa.jpg",
    secondLink: "https://www.udemy.com/course/blendermadeeasy-modernhouse/",
    firstButtonText: "CERTIFICATE BLENDER MODERN HOUSE",
    secondButtonText: "UDEMY COURSE WEBSITE",
  },
  {
    src: "/certificate/Hackerrank Basic JS.png",
    title: "Hackerrank: Javascript Basic Assessment",
    technique:
      "Basic Javascript, Fundamental Javascript, Functions, Object Oriented Programming, Modules",
    firstLink: "https://www.hackerrank.com/certificates/1d16d8c4ff30",
    secondLink: "https://www.hackerrank.com/",
    firstButtonText: "CERTIFICATE BASIC JAVASCRIPT",
    secondButtonText: "HACKERRANK WEBSITE",
  },
  {
    src: "/certificate/ITS-EXPO.png",
    title: "Expert Staff: UI/UX Designer of ITS EXPO 2023",
    technique:
      "UI/UX Design, Website Design, Design System, Design Thinking, Staff Intelligence, Staff Management ",
    firstLink:
      "https://drive.google.com/file/d/1DBE4xdCtyz0qOVoxnTzheuIHcapPn4b-/view?usp=sharing",
    secondLink:
      "https://www.figma.com/file/u5NhRuBk3QtPbtPuxyZlzM/Portfolio?type=design&node-id=0%3A1&mode=design&t=kPexva31pTKH5tOz-1",
    firstButtonText: "CERTIFICATE EXPERT STAFF",
    secondButtonText: "FIGMA ITS EXPO 2023",
  },
  {
    src: "/certificate/Ruangguru Mastery Bootcamp.png",
    title: "Ruangguru Engineering Academy: AI Mastery Bootcamp Batch 1 2023",
    technique:
      "Fundamentals of Python, Data Visualization, Linear Algebra and Calculus, Basic Machine Learning, Intro to Deep Learning, Visual Recognition with CNN, Natural Language Processing with Transformers, Langchain",
    firstLink:
      "https://drive.google.com/file/d/1m71De3uZmHAK8WQSwOt82PQ6oh0lBfuD/view",
    secondLink:
      "https://drive.google.com/file/d/1H0vgNXfiYhFUFQkOXy72AQwtSO2QKNA2/view",
    firstButtonText: "CERTIFICATE REA BOOTCAMP",
    secondButtonText: "PERFORMANCE REPORT",
  },
  {
    src: "/certificate/Schematics-ITDEV.png",
    title: "Expert Staff: UI/UX Designer of Schematics ITS 2023",
    technique:
      "UI/UX Design, Website Design, Design System, Design Thinking, Staff Intelligence, Staff Management ",
    firstLink:
      "https://drive.google.com/file/d/1Ur0lm1GyPdcfR7gargWPM3DSoyY2CrmQ/view?usp=sharing",
    secondLink:
      "https://www.figma.com/file/u5NhRuBk3QtPbtPuxyZlzM/Portfolio?type=design&node-id=0%3A1&mode=design&t=kPexva31pTKH5tOz-1",
    firstButtonText: "CERTIFICATE EXPERT STAFF",
    secondButtonText: "FIGMA SCHEMATICS ITS 2023",
  },
];

export default {
  skillContent,
  portfolioContent,
  certificateContent,
};
