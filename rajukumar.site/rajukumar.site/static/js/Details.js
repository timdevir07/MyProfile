// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
    logogradient: logogradient,
    logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
    name: "Raju Kumar",
    tagline: "Creating beautiful and responsive Web interfaces in React Js.",
    img: profile,
    about: `Hello, I'm Raju Kumar, a 4th-year B.Tech student at J.C. Bose University with a passion for web development. As a React.js developer, I specialize in creating dynamic and responsive web applications. I've worked on several projects that have honed my skills in building efficient, user-friendly interfaces. My commitment to continuous learning and my ability to adapt to new technologies enable me to deliver high-quality digital solutions. I'm excited about the potential of web development and eager to contribute to innovative projects.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
    linkdein: "https://www.linkedin.com/in/raju-kumar-44755830b/",
    github: "https://github.com/timdevir07/",
    twitter: "https://x.com/rajukr_07",
};

// Enter your Work Experience here
export const workDetails = [{
    Position: "Frontend Web Developer",
    Company: `CYPHERASH ENTERPRISES`,
    Location: "Remote(India)",
    Type: "Internship",
    Duration: "Mar 2024 - May 2024",
}, ];

// Enter your Education Details here
export const eduDetails = [{
        Position: "J.C.Bose University of Science & Technology",
        Company: "",
        Location: "Faridabad, Haryana (121004)",
        Type: "B.Tech CSE",
        Duration: "Oct 2022 - Present",
    },
    {
        Position: "Govt. Polytechnic Barauni Begusarai",
        Company: ``,
        Location: "Bihar",
        Type: "Diploma in Computer Science & Engineering",
        Duration: "Aug 2018 - Dec 2021",
    },
    {
        Position: "M.R.J.D College Begusarai",
        Company: ``,
        Location: "Bihar",
        Type: "Till 10th Standard",
        Duration: "Mar 2008 - June 2018",
    },
];

// Tech Stack and Tools
export const techStackDetails = {
    html: html,
    css: css,
    js: js,
    react: react,
    redux: redux,
    sass: sass,
    tailwind: tailwind,
    bootstrap: bootstrap,
    vscode: vscode,
    postman: postman,
    npm: npm,
    git: git,
    github: github,
    figma: figma,
};

// Enter your Project Details here
export const projectDetails = [{
        title: "Ecommerce Web",
        image: projectImage3,
        description: `This is a comprehensive ecommerce website built with React JS. It features user authentication, product listings, shopping cart functionality, and payment processing. The project utilizes state management and integrates various APIs to handle dynamic content and transactions.`,
        techstack: "React JS, HTML/CSS, JavaScript",
        previewLink: "https://github.com/timdevir07",
        githubLink: "https://github.com/timdevir07/E-commerce-Website",
    },
    {
        title: "Social Media - Video Call, Personal Chats",
        image: projectImage2,
        description: `This project is a social media platform that supports video calls and personal chats. Built with React JS, it offers real-time communication through WebRTC for video calls and uses state management for seamless chat functionality. The project also integrates multiple APIs for user authentication and data handling.`,
        techstack: "React JS, HTML/CSS, JavaScript",
        previewLink: "https://github.com/timdevir07",
        githubLink: "https://github.com/timdevir07/Social-media-with-video-call-and-personal-chat",
    },
];

// Enter your Contact Details here
export const contactDetails = {
    email: "rajukumarsdr95@gmail.com",
    phone: "+91 7667030776",
};