import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";


export const HERO_CONTENT = `I am currently a third-year student pursuing a Bachelor of Technology in Computer Science at Birla Institute of Technology, Mesra. With a CGPA of 7.2, I am passionate about exploring the realms of data structures and algorithms (DSA) and full stack development. My journey in technology has led me to complete various projects and internships in web development, providing me with hands-on experience and expertise.`;

export const ABOUT_TEXT = `As a third-year student pursuing a Bachelor of Technology in Computer Science at Birla Institute of Technology, Mesra, I am deeply engaged in exploring the realms of data structures and algorithms (DSA) and full stack development. With a CGPA of 7.2, I have honed my skills in various technologies, including React, Node.js, MongoDB, MySQL, and more. My journey in technology has been marked by hands-on experience and expertise gained through completing various projects and internships in web development. I am dedicated to continuously learning and adapting to new challenges, with a goal of leveraging my skills to contribute meaningfully to projects and make a positive impact.`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    degree:
      "Bachelor of Technology in Computer Science",
    institution: "Birla Institute of Technology, Mesra",
    description:
      "Currently a second-year student with a CGPA of 7.2. Possesses skills in Data Structures and Algorithms (DSA), Blockchain Development and full stack development. Completed various projects in web development.",
  },
  {
    year: "-----",
    degree: "Senior Secondary (12th Grade)",
    institution: "Narbheram Hansraj English School",
    description:
      "Completed senior secondary education with a specialization in Science (Physics, Chemistry, Mathematics and Computer Science). Secured 89.5% in the ICSE board exams.",
  },
  {
    year: "-----",
    degree: "Secondary (10th Grade)",
    institution:"Narbheram Hansraj English School",
    description:
      "Completed secondary education with a strong emphasis on Science and Mathematics. Achieved 89% in the ICSE board exams.",
  },
];

export const PROJECTS = [
  {
    title: "Real Estate Website",
    image: project2,
    description:
      "Real Estate website for the benefit of the consumers whom which are trying to sell and buy their house.",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Mongoose",
      "Tailwind CSS",
      "Express.js",
    ],
    // liveLink: "https://bit-web-app-24.vercel.app/",
    codeLink: "https://github.com/Satyam-kum/Real-Estate-Website",
  },
  {
    title: "The Pinnacle Project",
    image: project1,
    description:
      "Blockchain project",
    technologies: ["Solidity", "Foundry-tools","Chainlink"],
      // , "Node.js", "Firebase", "Tailwind CSS"],
    // liveLink: "https://mega-project-mu.vercel.app/",
    codeLink: "https://github.com/Cyfrin/foundry-defi-stablecoin-cu?tab=readme-ov-file",
  },

];

export const CONTACT = {
  address: "Jugsalai, Jamshedpur, Jharkhand, India",
  phoneNo: "+91 9122190339 ",
  email: "satyamkumarsharma849@gmail.com",
};