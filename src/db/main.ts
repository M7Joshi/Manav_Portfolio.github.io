import qaroraImg from "../../public/images/qarora.png";
import bookieImg from "../../public/images/bookie.png";
import myImage from "../../public/images/Manav.png";
import mutahItImg from "../../public/images/mutah-it.png";
import randQuoteImg from "../../public/images/randquote.png";
import redditCloneImg from "../../public/images/reddit-clone.png";
import theDojoImg from "../../public/images/the-dojo.png";
import shawerrImg from "../../public/images/shawerr.png";
import arabicPoetryImg from "../../public/images/arabic-poetry.png";

export const heroData = {
  img: myImage,
  hi: "Hello! I am",
  name: "Manav Joshi",
  expertise: ["Software Engineer", "Full Stack Developer"],
  about:
    "I'm Manav Joshi, a passionate full stack developer based in New Jersey. I have over 3 years of experience building scalable Java and React-based applications. Currently, I'm pursuing my Master's in Computer Science at Pace University while actively exploring full-time software engineering opportunities. I enjoy creating high-performance web applications and continuously expanding my knowledge in cloud computing, system design, and modern frameworks.",
  btnText: "Get my resume",
};

export const aboutData = {
  title: "About Me",
  cards: [
    {
      title: "Past",
      text: "After completing my Bachelor’s in Computer Applications in India, I worked for over 2 years at Zeel Infotect where I contributed to large-scale Java applications using Spring Boot and React. I led backend development, optimized APIs, and introduced authentication and CI/CD improvements.",
    },
    {
      title: "Present",
      text: "I'm currently pursuing my MS in Computer Science at Pace University in NYC. My focus areas include cloud services (AWS, GCP), Spring frameworks, and building responsive full-stack systems. I’ve also led capstone projects like CustomThreads and contributed to multiple real-world platforms.",
    },
    {
      title: "Future",
      text: "My goal is to join a mission-driven team where I can contribute to impactful software solutions and grow into a lead engineer role. I'm passionate about solving real-world problems with technology and continuously improving user experiences.",
    },
  ],
};

export const SkillsData = {
  title: "Skills",
  categories: [
    {
      title: "Front End",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "AngularJS",
        "Bootstrap",
        "Thymeleaf",
      ],
    },
    {
      title: "Back End & Frameworks",
      skills: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Node.js",
        "Django",
        "REST APIs",
        "JWT",
      ],
    },
    {
      title: "Databases & Tools",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Git",
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Azure",
      ],
    },
  ],
};

export const contactData = {
  title: "Want To",
  cards: [
    {
      title: "offer job opportunity?",
      text: "I'm actively looking for full-time software engineering roles where I can apply my Java, React, and cloud development skills. If you're hiring or want to collaborate, feel free to reach out!",
    },
    {
      title: "Connect?",
      text: "I love connecting with fellow developers, recruiters, and mentors. Whether it's for knowledge-sharing or a virtual coffee chat, I’m open to connecting and growing together!",
    },
    {
      title: "Build something?",
      text: "I enjoy building real-world apps with meaningful impact. If you're starting a project or looking for a teammate, I’d love to hear more about it!",
    },
  ],
  links: [
    {
      label: "Email",
      url: "mailto:joshimanav0717@gmail.com",
    },
    {
      label: "GitHub",
      url: "https://github.com/M7Joshi",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/manav-joshisde/",
    },
    {
      label: "Resume",
      url: "/Docs/resume.pdf", // Replace with actual resume path if needed
    },
  ],
};

export const ProjectsData = {
  title: "Projects",
  Projects: [
    {
      name: "CustomThreads",
      image: bookieImg,
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
        "Cloudinary",
        "Stripe API",
      ],
      description:
        "A full-stack personalized clothing platform that lets users design, preview, and order custom outfits. Built using the MERN stack with secure authentication, image uploads, and Stripe integration.",
      demoUrl: "",
      codeUrl: "",
    },
    {
      name: "Rig Builder Module",
      image: shawerrImg,
      technologies: [
        "React",
        "Node.js",
        "MySQL",
        "Tailwind CSS",
        "JWT",
        "Jest",
        "Supertest",
      ],
      description:
        "Built a custom PC configuration tool that checks compatibility in real-time, integrates secure authentication, and achieved 90%+ unit test coverage. Enhanced navigation speed and reduced errors by 40%.",
      demoUrl: "",
      codeUrl: "",
    },
    {
      name: "Weather Application",
      image: randQuoteImg,
      technologies: [
        "Java",
        "Spring Boot",
        "Vaadin",
        "OpenWeatherMap API",
        "OkHttp",
      ],
      description:
        "Developed a real-time weather dashboard with location-based forecasts, API integration, and improved data retrieval performance by 50%.",
      demoUrl: "",
      codeUrl: "",
    },
    {
      name: "Employment Management System",
      image: redditCloneImg,
      technologies: [
        "Java",
        "Spring Boot",
        "Spring MVC",
        "Spring Data JPA",
        "Thymeleaf",
        "MySQL",
      ],
      description:
        "Built an employee record management system with intuitive CRUD operations, secure data handling, and Thymeleaf templating. Reduced dev time by 20%.",
      demoUrl: "",
      codeUrl: "",
    },
  ],
};
