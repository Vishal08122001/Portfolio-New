import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Almabetter Edutech Pvt Ltd",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Mar 2022 - June 2023",
    points: [
      "Gained practical experience in front-end and back-end programming languages andtools such as NodeJS and using databases such as MongoDB.",
      "Studied best practices for developing and deploying high-quality and secure web applications, which involved implementing user authentication and data encryption.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "ZingHR",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jul 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "ShopBuddy E-Commerce",
    description:
      "Developed a ecommerce platform that allows users to login, signup, sort and filter the products with cart functionality.. Utilized ReactJS and Tailwind CSS for responsive frontend creation and Google Firebase for user authentication.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "contextAPI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/Vishal08122001/ShopBuddy",
  },
  {
    name: "Resume Builder",
    description:
      "Established an intuitive user interface that allows users to input their information and generate visually appealing resumes. Applied Bootstrap for responsive designing, ReactJS is used for the front-end UI/UX Design, and Redux used for state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "Material UI",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Vishal08122001/Resume-Builder",
  },
  {
    name: "Netflix Clone",
    description:
      "Created a Netflix Clone that allows users to login, search and watch desired movies on netflix clone with real time data fetching from TMDB API. Implemented ReactJS for front-end development, Firebase for user authentication and Redux-Toolkit for state management.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name:"Firebase",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Vishal08122001/Netflix-Full-Stack",
  },
];

export { services, technologies, experiences, testimonials, projects };
