import {
  mobile,
  backend,
  frontend,
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
  mooi,
  sanny,
  power,
  angels,
  recipe,
  bad,
  admin,
  threejs,
  spider,
  threads,
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
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
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
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Web Design/Developer Intern",
    company_name: "San Antonio Regional Hospital",
    icon: sanny,
    iconBg: "#383E56",
    date: "Sep 2022 - Dec 2022",
    points: [
      "Developed a web and mobile app for patient education videos to improve patient learning and compliance,resulting in a reduction of hospital readmissions",
      "Improved existing website, resulting in a 5% decrease in page bounce-rate for visitors",
      "Updated website to include ADA-compliant features for low vision and handicapped visitors",
      "Demonstrated strong communication skills by maintaining daily contact with internship supervisor while completing projects",
      "Trained in Progress Sitefinity Website CMS, including Bootstrap 4 and .NET framework",
    ],
  },
  {
    title: "IT Web Design/Developer Internship",
    company_name: "Power Changes Lives",
    icon: power,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Aug 2022",
    points: [
      "Proven success in team management, overseeing a team of 12 developers to deliver pojects on time and within budget",
      "Demonstrated strong project management skills by delivering 5 high-priority projects ahead of schedule",
      "Led the development of 10+ successful projects, consistently maintaining customer satisfaction rates above 95%",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Mooi Digital Marketing",
    icon: mooi,
    iconBg: "#383E56",
    date: "Aug 2021 - Jan 2022",
    points: [
      "Improved customer engagement by 10% through migration of many-page user experience into a singlepage app",
      "Participated in all phases of product development process, resulting in features with over 1000 users",
      "Collaborated with in-house designers to redesign website using HTML, CSS, and JavaScript, making it responsive for mobile devices and increasing customer engagement by over 8%",
      "Created marketing website for startup company, leading to a 50% increase in web traffic",
      "Developed responsive design compatible with all devices, resulting in a 5% increase in conversions",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Angels Paradise Academy",
    icon: angels,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Jun 2021",
    points: [
      "Developed frontend for daycare website using React, resulting in a 30% decrease in development time",
      "Improved user engagement by 20% through implementation of responsive design on all devices",
      "Created visually appealing interface using CSS and HTML, resulting in a 15% increase in traffic",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Angus is a great frontend developer. He worked very hard on our website and designed it exceptionally well. Everything looks clean and works perfectly.",
    name: "Kate",
    designation: "Admin Clerk",
    company: "Angels Paradise Academy",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Angus worked for our company. His intelligence, energy and loyalty struck me. He is a treasured member of the team, someone you want to keep close.",
    name: "John",
    designation: "COO",
    company: "Mooi Digital Marketing",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Can't reccomend him enough. He is a very talented and hardworking individual. He is a very responsible employee who takes the team's success personally.",
    name: "Lisa",
    designation: "CTO",
    company: "LLM Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "You're Wrong",
    description:
      "You're Wrong is a thread/twitter like app where instead of agreeing on points the aim is to disagree with the original post. The most dislikes is awarded You're the Worst Medal.",
    tags: [
      {
        name: "next.js",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: threads,
    source_code_link: "https://github.com/AMACAFELLA/you_are_wrong",
  },
  {
    name: "Portfolio-verse",
    description:
      "Imagine if Miles Morales, from the iconic Spider- Verse, dived into the world of computer science and crafted a captivating portfolio website.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: spider,
    source_code_link: "https://github.com/AMACAFELLA/Portfolio-Verse",
  },
  {
    name: "Baad Movies",
    description:
      "Baad Movies is a website that recommends movies that are so bad they're good. Discover the best terrible films and find out which ones are worth your time.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: bad,
    source_code_link: "https://github.com/AMACAFELLA/baadmovies",
  },
  {
    name: "Timed Tasks",
    description:
      "Web backend class team project using Node.js, MongDB, Express.js, Auth0, and Jest. To login and create an account use /login",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "auth0",
        color: "blue-text-gradient",
      },
      {
        name: "jest",
        color: "green-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/AMACAFELLA/recipe_app",
  },
  {
    name: "Admin dashboard",
    description:
      "Admin dashboard app using React.js and Syncfusion. This Admin Panel includes one Dashboard, Three Pages, Four Apps, and Seven fully functional charts!",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "syncfusion",
        color: "green-text-gradient",
      },
    ],
    image: admin,
    source_code_link: "https://github.com/AMACAFELLA/ecomm",
  },
];

export { services, technologies, experiences, testimonials, projects };