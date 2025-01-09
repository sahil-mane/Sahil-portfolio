import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import { RiReactjsLine,RiHtml5Fill,RiTailwindCssFill,RiJavascriptFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { DiRedis,DiCss3 } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

import image1 from "../assets/project13.jpg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project11.png";
import image4 from "../assets/project12.png";
import image5 from "../assets/project15.jpg";
import image6 from "../assets/project16 (2).jpg";

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";

// export const NAVIGATION_LINKS = [
//   { label: "About", href: "#about" },
//   { label: "Projects", href: "#projects" },
//   { label: "Skills", href: "#skills" },
//   { label: "Award", href: "#award" },
//   { label: "Testimonials", href: "#testimonials" },
//   { label: "Contact", href: "#contact" },
// ];

export const PROFILE = {
  name: "Robert Butcher",
  info: "Full-stack developer with a flair for graphic design.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Sahil Mane, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const PROJECTS = [
  {
    title: "To-do App ",
    subtitle:
      "A Multi-User and Authenticated full-stack project built with React, Node.js, and MongoDB.",
    image: image1,
    githubUrl:"https://github.com/sahil-mane/task-management",
    liveUrl:""
  }, 
  {
    title: "Landing page",
    subtitle: "A landing page built with React js and tailwind css and external packages.",
    image: image3,
    githubUrl:"https://github.com/sahil-mane/1mdm-frontend",
    liveUrl:"https://1mdm-frontend.vercel.app/"
  },
  {
    title: "Personal Portfolio",
    subtitle:
      "A personal portfolio website designed with React js and Tailwind css",
    image: image4,
    githubUrl:"https://github.com/sahil-mane/Sahil-portfolio",
    liveUrl:"https://sahil-mane.vercel.app/"
  },
  {
    title: "Weather Dashboard",
    subtitle:
      "A weather dashboard application built with Next js and external API",
    image: image5,
    githubUrl:"https://github.com/sahil-mane/wheather-app",
    liveUrl:"https://wheather-app-mauve-delta.vercel.app/"
  },
  {
    title: "Pizza Pool",
    subtitle: "Designed and implemented the front-end user interface for ordering pizzas, tracking orders,and managing user accounts. Admin add or remove categories and menu-items",
    image: image6,
    githubUrl:"",
    liveUrl:""
  }  
];

export const SKILLS = [
  
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: 6.5,
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: 6.5,
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: 6,
  },
  {
    icon: <DiRedis className="text-4xl lg:text-6xl text-red-600" />,
    name: "Redis",
    experience: 0,
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-lime-400" />,
    name: "Node.js",
    experience: 6,
  },
  {
    icon: <RiTailwindCssFill className="text-4xl lg:text-6xl text-cyan-500" />,
    name: "Tailwind css",
    experience: 7,
  },
  {
    icon: <BiLogoPostgresql className="text-4xl lg:text-6xl text-sky-700" />,
    name: "PostgreSQL",
    experience: 0,
  },
];

export const ACHIEVEMENT = {
  title: "International Hackaton - Tokyo",
  award: "Gold Medalist - 2024",
  description:
    "Winner of the 2024 Algo coding representing the University of Oxford. This achievement showcases exceptional problem-solving skills and dedication. The event provided a platform to innovate and collaborate with the brightest minds, resulting in a prestigious accolade.",
};

// export const TESTIMONIALS = [
//   {
//     name: "Emily Johnson",
//     title: "CEO, Tech Innovators",
//     quote:
//       "Working with Robert has been an incredible experience. His design sensibilities and technical expertise are top-notch, making him a valuable asset to any project.",
//     image: user1,
//   },
//   {
//     name: "Michael Lee",
//     title: "CTO, Creative Minds",
//     quote:
//       "Robert consistently delivers high-quality work, combining creativity and technical prowess. His ability to solve complex problems with elegant solutions is truly impressive.",
//     image: user2,
//   },
//   {
//     name: "Sophia Martinez",
//     title: "Lead Developer, Digital Solutions",
//     quote:
//       "Robert's dedication to his craft is evident in every project he undertakes. His innovative approach and attention to detail set him apart as a leading designer and developer.",
//     image: user3,
//   },
//   {
//     name: "Daniel Thompson",
//     title: "Project Manager, InnovateX",
//     quote:
//       "Robert's ability to understand client needs and translate them into beautiful, functional designs is remarkable. He is a true professional who always exceeds expectations.",
//     image: user4,
//   },
// ];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/sahil-mane",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/sahil-mane-180427292/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
