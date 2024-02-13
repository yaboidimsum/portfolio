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

const experienceContent = [
  {
    client: "COMPFEST 14",
    category: [
      "UX Design",
      "UX Research",
      "UX Writer",
      "Design System",
      "Design Thinking",
      "Project Management",
      "Project Based Learning",
    ],
    location: "DKI Jakarta, South Jakarta Administration",
    title: "User Experience Academy Participant",
    year: "August 2022 - September 2022",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
      {
        image: "/skill/front-end/tailwind.png",
        name: "Tailwind CSS",
      },
    ],
    description: [
      "Trained and worked as a team at User Experience Academy, learned about UX research, writing, design, and usability testing for three weeks. Followed by solving a case study as a final project at the end of the training.",
      "Collaborated and worked with Data Science, Software Engineering, and Startup teams to solve the final case study at the last event of COMPFEST 14.",
    ],
  },
  {
    client: "HMTC Election Committee 2023",
    category: [
      "Media Design",
      "Social Media Management",
      "Media Analysis",
      "Media Planning",
    ],
    location: "East Java, Surabaya",
    title: "Media Designer",
    year: "November 2022 - January 2023",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    description: [
      "Designed contents for KPU HMTC to engage its social media",
      "Designed poster, flyer, and banner for ongoing event of KPU HMTC",
    ],
  },
  {
    client: "ITS EXPO 2023",
    category: [
      "UI Design",
      "Website Design",
      "Mobile Design",
      "Design System",
      "Design Thinking",
      "Project Management",
      "Staff Intelligence",
      "Staff Management",
    ],
    location: "East Java, Surabaya",
    title: "Expert Staff of UI/UX Designer",
    year: "December 2022 - June 2023",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    description: [
      "Responsible for the web design of the ITS Expo website",
      "Designing the flow and user experience of the ITS Expo website",
      "Working on Low Fidelity, High Fidelity, and Prototype of the ITS Expo website",
      "Conducting staff intelligence in the form of material presentations and direct simulations",
      "Coordinating with other expert staff and team in working on the ITS Expo website",
      "Coordinating with other staff in working on the ITS Expo website flow",
    ],
  },
  {
    client: "UKM EXPO 2023",
    category: [
      "UI Design",
      "Website Design",
      "Mobile Design",
      "Design System",
      "Design Thinking",
      "Project Management",
      "Staff Intelligence",
      "Staff Management",
    ],
    location: "East Java, Surabaya",
    title: "Expert Staff of UI/UX Designer",
    year: "March 2023 - August 2023",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    description: [
      "Responsible for the web design of the UKM Expo website",
      "Designing the flow and user experience of the UKM Expo website",
      "Working on Low Fidelity, High Fidelity, and Prototype of the UKM Expo website",
      "Conducting staff intelligence in the form of material presentations and direct simulations",
      "Coordinating with other expert staff and team in working on the UKM Expo website",
    ],
  },
  {
    client: "REA AI Mastery Bootcamp Batch 1",
    category: [
      "Python Programming",
      "Data Wrangling",
      "Data Visualization",
      "Linear Algebra",
      "Calculus",
      "Deep Learning",
      "Computer Vision",
      "Natural Language Processing",
      "AI Trend",
      "Realworld NLP App",
    ],
    location: "West Java, Bekasi",
    title: "Participant",
    year: "August 2023 - October 2023",
    techstack: [
      {
        image: "/skill/language/python.png",
        name: "Python",
      },
    ],
    description: [
      "Learned fundamentals of Python for Machine and Deep Learning",
      "Learned how to work with data such as data wrangling with Pandas, data cleansing, and visualizing data",
      "Acquired a solid grasp of the fundamental concepts of Linear Algebra and Calculus, and gained the essential knowledge needed for Machine and Deep Learning",
      "Implemented Deep Learning with Pytorch. Learned to construct, train, and fine-tune neural networks effectively, transforming my understanding of key concepts into hands-on experience for real-world applications",
      "Explored the realm of visual recognition by learning about Convolutional Neural Networks (CNNs) and their applications in Computer Vision. Discover how to utilize CNNs for image classification, object detection, and more, elevating my skills in processing and interpreting complex visual data",
      "Natural Language Processing with Transformers. Learned to create powerful models that can perform tasks like translation, summarization, and sentiment analysis, and unlock the potential of conversational AI",
      "Explored the latest AI Trend such as GPT-4 and Stable Diffusion",
      "Built Realworld NLP app with LangChain/Semantic Kernel",
    ],
  },
  {
    client: "Schematics ITS 2023",
    category: [
      "UI Design",
      "Website Design",
      "Mobile Design",
      "Design System",
      "Design Thinking",
      "Project Management",
      "Staff Intelligence",
      "Staff Management",
    ],
    location: "East Java, Surabaya",
    title: "Expert Staff of UI/UX Designer",
    year: "February 2023 - November 2023",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    description: [
      "Responsible for the web design of the Schematics ITS website",
      "Designing the flow and user experience of the Schematics ITS website",
      "Working on Low Fidelity, High Fidelity, and Prototype of the Schematics ITS website",
      "Conducting staff intelligence in the form of material presentations and direct simulations",
      "Coordinating with other expert staff and team in working on the Schematics ITS website",
    ],
  },
  {
    client: "Alpha Academy",
    category: [
      "UI Design",
      "Website Design",
      "Mobile Design",
      "Design System",
      "Design Thinking",
      "Project Management",
      "Team Collaboration",
    ],
    location: "East Java, Surabaya",
    title: "UI/UX Designer",
    year: "October 2022 - January 2024",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    description: [
      "Designed flow and main features of Alpha Academy website",
      "Improved ongoing features from Alpha Academy",
      "Discussed and worked together with IT team about the development of Alpha Academy website",
    ],
  },
  {
    client: "HMTC Election Committee 2024",
    category: [
      "Media Design",
      "Social Media Management",
      "Social Media Strategist",
      "Media Analysis",
      "Media Planning",
      "Staff Management",
    ],
    location: "East Java, Surabaya",
    title: "Lead Media",
    year: "November 2023 - January 2024",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    description: [
      "Designed contents for KPU HMTC to engage its social media",
      "Designed poster, flyer, and banner for ongoing event of KPU HMTC",
      "Analyzed media coverage and social media analytics",
      "Planned on to improve KPU HMTC Social Media to engage more people",
    ],
  },
  {
    client: "Alpha Academy",
    category: [
      "Frontend",
      "Next JS Framework",
      "React JS",
      "UI Slicing",
      "CSS Styling",
    ],
    location: "East Java, Surabaya",
    title: "Frontend Developer",
    year: "January 2024 - Present",
    techstack: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
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
    description: [
      "Implemented frontend of Alpha Academy website from design to code",
      "Create certain logic and features of Alpha Academy website",
      "Communicate and discuss with CTO, UI/UX Designer, and Backend Developer about the development of Alpha Academy website",
      "Learn from other team members about frontend development especially using Next JS and Tailwind CSS",
    ],
  },
];

const portfolioContent = [
  {
    src: "/portfolio/Landing ITS EXPO.png",
    title: "ITS EXPO 2023",
    technique: "UI/UX Design, Website Design, Design System",
    tech: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
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
    tech: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    firstLink: "https://itsukmexpo.com/",
    secondLink:
      "https://www.figma.com/file/u5NhRuBk3QtPbtPuxyZlzM/Portfolio?type=design&node-id=0%3A1&mode=design&t=kPexva31pTKH5tOz-1",
    firstButtonText: "VISIT UKM EXPO 2023",
    secondButtonText: "FIGMA UKM EXPO 2023",
  },
  {
    src: "/portfolio/Alpha-Academy.png",
    title: "Alpha Academy",
    technique: "UI/UX Design, Website Design, Design System",
    tech: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
    firstLink: "https://www.alpha-academy.id",
    secondLink: "/nonexistence",
    firstButtonText: "VISIT ALPHA ACADEMY",
    secondButtonText: "FIGMA ALPHA ACADEMY",
  },
  {
    src: "/portfolio/Landing Schematics.png",
    title: "Schematics 2023",
    technique: "UI/UX Design, Website Design, Design System",
    tech: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
    ],
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
    tech: [
      {
        image: "/skill/3d-design/blender.png",
        name: "Blender 3D",
      },
    ],
    firstLink: "Personal Project",
    secondLink: "https://www.blender.org",
    firstButtonText: "PERSONAL PROJECT",
    secondButtonText: "BLENDER SOFTWARE",
  },
  {
    src: "/portfolio/Hoobank Landing.png",
    title: "Hoobank Landing Page",
    technique: "Website Design, Vite, TailwindCSS, React JS, Figma",
    tech: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
      {
        image: "/skill/front-end/reactjs.png",
        name: "React JS",
      },
      {
        image: "/skill/front-end/vitejs.png",
        name: "Vite JS",
      },
      {
        image: "/skill/front-end/tailwind.png",
        name: "Tailwind CSS",
      },
    ],
    firstLink: "https://yaboidimsum.github.io/modern-bank-web/",
    secondLink: "https://github.com/yaboidimsum/modern-bank-web",
    firstButtonText: "VISIT DEPLOYMENT",
    secondButtonText: "VISIT GITHUB REPO",
  },
  {
    src: "/portfolio/Landing Nike.png",
    title: "Nike Store Landing Page",
    technique: "Website Design, Vite, TailwindCSS, React JS, Figma",
    tech: [
      {
        image: "/skill/ui-design/figma.png",
        name: "Figma",
      },
      {
        image: "/skill/front-end/reactjs.png",
        name: "React JS",
      },
      {
        image: "/skill/front-end/vitejs.png",
        name: "Vite JS",
      },
      {
        image: "/skill/front-end/tailwind.png",
        name: "Tailwind CSS",
      },
    ],
    firstLink: "https://yaboidimsum.github.io/nike-website/",
    secondLink: "https://github.com/yaboidimsum/nike-website",
    firstButtonText: "VISIT DEPLOYMENT",
    secondButtonText: "VISIT GITHUB REPO",
  },
  // ... (Repeat the structure for other portfolio items)
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
    src: "/certificate/min/Hackerrank Basic JS-min.png",
    title: "Hackerrank: Javascript Basic Assessment",
    technique:
      "Basic Javascript, Fundamental Javascript, Functions, Object Oriented Programming, Modules",
    firstLink: "https://www.hackerrank.com/certificates/1d16d8c4ff30",
    secondLink: "https://www.hackerrank.com/",
    firstButtonText: "CERTIFICATE BASIC JAVASCRIPT",
    secondButtonText: "HACKERRANK WEBSITE",
  },
  {
    src: "/certificate/min/Certificate-ITS-EXPO.jpg",
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
    src: "/certificate/min/Ruangguru Mastery Bootcamp.jpg",
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
    src: "/certificate/min/Schematics-ITDEV.jpg",
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
  {
    src: "/certificate/min/STAFF-OF-LKMM-TD.jpg",
    title: "Staff of LKMM-TD (Avatar) XXIX HMTC ITS 2023",
    technique:
      "Event Managerial, Teamwork, Communication, Management, Leadership, Role Management",
    firstLink:
      "https://drive.google.com/file/d/1Ur0lm1GyPdcfR7gargWPM3DSoyY2CrmQ/view?usp=sharing",
    secondLink:
      "https://www.its.ac.id/news/2005/03/15/menggali-potensi-diri-melalui-lkmm-td-hmtc/",
    firstButtonText: "CERTIFICATE STAFF",
    secondButtonText: "LKMM-TD HMTC ITS",
  },
  {
    src: "/certificate/min/Kickstart-Webdev.jpg",
    title: "Frontend & Backend Web Development Kickstart",
    technique: "Next JS, React JS, Tailwind CSS, Layouting, Golang, API",
    firstLink: "/",
    secondLink: "https://github.com/Lab-RPL-ITS",
    firstButtonText: "CERTIFICATE OF COMPLETION",
    secondButtonText: "GITHUB SOFTWARE ENGINEER LABORATORY ITS",
  },
  {
    src: "/certificate/min/dicoding/dicoding_softwaredev.png",
    title: "Dicoding: Starting Basics of Programming to Become a Software Developer",
    technique: "Software Development, User Requirement Specification, Software Requirement Specification, Flowchart, HTML, CSS, Javascript, Version Control System",
    firstLink: "https://www.dicoding.com/certificates/0LZ02YERKX65",
    secondLink: "https://www.dicoding.com",
    firstButtonText: "CERTIFICATE OF COMPLETION",
    secondButtonText: "DICODING WEBSITE",
  },
];

const blogContent = [
  {
    image: "/photo/IISMA.png",
    title: "Awan 2021 Retrospetive Tech-Journey",
    genre: ["Slice of Life", "Tech"],
    date: "January 1st, 2023",
    readtime: "~12 min read",
    paragpraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    image: "/photo/IISMA.png",
    title: "Awan 2022 Retrospetive Tech-Journey",
    genre: ["Slice of Life", "Tech"],
    date: "January 1st, 2023",
    readtime: "~12 min read",
    paragpraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
  {
    image: "/photo/IISMA.png",
    title: "Awan 2023 Retrospetive Tech-Journey",
    genre: ["Slice of Life", "Tech"],
    date: "January 1th, 2023",
    readtime: "~12 min read",
    paragpraph:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
  },
];

export default {
  skillContent,
  experienceContent,
  portfolioContent,
  certificateContent,
  blogContent,
};
