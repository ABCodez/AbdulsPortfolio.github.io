/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abdul Basit's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Abdul Basit's Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Abdul Basit",
  logo_name: "Abdul Basit  ",
  nickname: "ABCodez",
  subTitle:
    "A passionate individual that thrives on developing end-to-end solutions that generate sustainable and scalable social and technological systems to make an impact.",
  resumeLink:
    "https://drive.google.com/file/d/144VIWX1I2Kbl5Y9ra_6EQUlJLyTrBw6S/view?usp=sharing",
  portfolio_repository: "https://github.com/ABCodez/abdulsPortfolio",
  githubProfile: "https://github.com/ABCodez",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ABCodez",
  // linkedin: "https://www.linkedin.com/in/abdulbasit27/",
  // gmail: "abdul.b0227@gmail.com",
  // gitlab: "",
  // facebook: "",
  // twitter: "",
  // instagram: ""

  {
    name: "Github",
    link: "https://github.com/ABCodez",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abdulbasit27/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:abdul.b0227@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Machine Learning & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and researching models for various deeplearning use cases",
        "⚡ Experience of working with Computer Vision projects",
        "⚡ Strengthening Machine Learning Related Skills through Hackathons and personal projects!",
      ],
      softwareSkills: [
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos:opencv", // https://icon-sets.iconify.design/?query=python
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end for clients using HTML, CSS, and JavaScript",
        "⚡ Developing mobile applications using Android Studio, and React Native",
        "⚡ Creating application backend for clients using Django, Node, and PostgreSQL",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "logos:django",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Certified Cloud Practitioner through Amazon Web Services",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Great knowledge about Amazon's Cloud Infrastructure alongside best cloud architecture practices",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Oracle VirtualBox",
          fontAwesomeClassname: "simple-icons:virtualbox",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Miro",
          fontAwesomeClassname: "simple-icons:miro",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "mdi:android-studio",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Webflow",
          fontAwesomeClassname: "logos:webflow",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Draw.io",
          fontAwesomeClassname: "vscode-icons:file-type-drawio",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Linkedin",
      iconifyClassname: "logos:linkedin",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.linkedin.com/in/abdulbasit27/details/skills/",
    },
    {
      siteName: "AWS",
      iconifyClassname: "logos:aws",
      style: {
        color: "#2EC866",
      },
      profileLink:
        "https://www.credly.com/badges/def6d382-f127-4445-a217-1e639c615b2a/public_url",
    },
    {
      siteName: "Hackerrank",
      iconifyClassname: "fa6-brands:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/abdul_b0227?hr_r=1",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Wilfred Laurier University",
      subtitle: "Honours Bachelors of Science in Computer Science",
      logo_path: "wlu.png",
      alt_name: "wlu",
      duration: "2022 - Present",
      descriptions: [
        "⚡ I have studied software engineering courses such as Data Structures, OOP, Discrete Mathematics, Computer Architecture, etc.",
        "⚡ Apart from this, I have done courses on Service Design, Cloud Computing and Full Stack Development.",
        "⚡ Coming soon ...",
      ],
      website_link: "https://www.wlu.ca/",
    },
    {
      title: "Brock University",
      subtitle: "Honours Bachelors of Computing & Business, COOP ",
      logo_path: "brocku2-modified.png",
      alt_name: "brock",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ I studied software engineering courses alongside business courses such as Accounting, Microeconomics, Accounting Law, etc.",
        "⚡ Received the Brock Scholars Award (2021 & 2022), awarded to those with a GPA of 3.7+.",
        "⚡ Coming soon ...",
      ],
      website_link: "https://brocku.ca/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "AWS",
      logo_path: "AWSCloud.png",
      certificate_link:
        "https://drive.google.com/file/d/1G0tY5j1wkOk2KwOaFcCxrkGaPgDwAS6D/view?usp=sharing",
      alt_name: "AWS",
      color_code: "#303B4B",
    },
    {
      title: "AWS Cloud Practitioner Exam Simulator Course",
      subtitle: "Neal Davis",
      logo_path: "DCT.png",
      certificate_link:
        "https://drive.google.com/file/d/1c1m4jDR8qIyo4YefrhCLSWIb89jwI66X/view?usp=sharing",
      alt_name: "Digital Cloud Training",
      color_code: "#F0FFFF",
    },
    {
      title: "AWS Cloud Practitioner Course",
      subtitle: "Neal Davis",
      logo_path: "DCT.png",
      certificate_link:
        "https://drive.google.com/file/d/1598WpmGd0KmDRiqY-AtZtdz1rhOyWyue/view?usp=sharing",
      alt_name: "Digital Cloud Training",
      color_code: "#F0FFFF",
    },
    {
      title: "Python Django Dev to Deployment",
      subtitle: "Brad Traversy",
      logo_path: "django.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-433a044f-ca81-48cc-912b-667ea17e840c/",
      alt_name: "Udemy",
      color_code: "#0F3E2E",
    },
    {
      title: "Automate the Boring Stuff with Python Programming",
      subtitle: "Al Sweigart",
      logo_path: "python.jpg",
      certificate_link:
        "https://www.udemy.com/certificate/UC-c08195dc-b5dc-44f5-9671-17d5b9c86115/",
      alt_name: "Udemy",
      color_code: "#000000",
    },

    {
      title: "Service Design Course - Case Study Winner",
      subtitle: "Information and Communications Technology Council ",
      logo_path: "ictc.png",
      certificate_link:
        "https://drive.google.com/file/d/16B-45l-tctmcq4Ejoys7q8okoEAS94y3/view",
      alt_name: "ICTC",
      color_code: "#D53D58",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteering",
  description:
    "Working with evolving startups as a System Administrator allows me to expand my knowledge and experiences within the tech industry ." +
    " I love involving my peers in hackathons, working on technical projects, and documenting my software engineering journey through github in order to reach those interested in " +
    "pursuing a life in tech.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Systems Administrator",
          company: "Civiconnect",
          company_url: "https://www.civiconnect.ca/",
          logo_path: "civi.jpg",
          duration: "January 2022 - April 2022",
          location: "Beamsville, Ontario",
          description:
            " I led a team to interconnect businesses as part of the City of Lincoln's Tourism Plan by developing back-end functionalities for client websites with the use of AWS, Python, Django, SQL database, and SSL.\n" +
            "I minimized the time to setup the Django framework for the System Admin department by 60% with the use of automated static folder setups, replacing run commands with user-friendly interface, etc.\n" +
            "I worked with the Web Development Department Head to debug current Civiconnect website using Node.js, Heroku, and previous software testing abilities.\n",
          color: "#0879bf",
        },
      ],
    },
    {
      title: "Volunteering/Events",
      experiences: [
        {
          title: "Hackathon Competitor",
          company: "LightHouseLabs",
          company_url: "https://coding-challenge.lighthouselabs.ca/start",
          logo_path: "lab.jpg",
          duration: "Dec 2021",
          location: "From Home",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
        {
          title: "Hackathon Competitor",
          company: "ULHacks",
          company_url: "https://ulhacks.com/",
          logo_path: "ul.png",
          duration: "August 2021",
          location: "From Home",
          description:
            "I Attended the 2020 ULHacks Hackathon with over 200+ participants and 10+ sponsors (Linode, Huawei, Wolfram Language, ELAGOO, etc.)." +
            " I led a team of three with the SDLC method in building an app to allow students to track study methods/build" +
            "motivation by growing a specific asset every time students stay on task/correctly answer a question.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Work",
      experiences: [
        {
          title: "Quality Control Inspector",
          company: "MAGNA",
          company_url: "https://www.magna.com/",
          logo_path: "magna.png",
          duration: "June 2020 - September 2020",
          location: "Hyderabad, Telangana",
          description:
            "Increased manufacturing proficiency by evaluating and repairing welding robots as well as developing an\n" +
            "organized and communicative workstation with fellow staff.\n" +
            "Implemented process of debugging robotics thus amplifying production by almost 50 more parts per shift.\n" +
            "Conceptualized and implemented strategies to greatly increase production of parts as well as build a safe\n" +
            "work environment with crew.",
          color: "#4285F4",
        },
        {
          title: "Retail Sales Representative",
          company: "OSL",
          company_url: "https://oslrs.com/",
          logo_path: "osl.png",
          duration: "February 2020 - August 2020",
          location: "Brampton, Ontario",
          description:
            "Amplified sales and employee disposition by overhauling organizational weakness to establish a better\n" +
            "working environment.\n" +
            "Augmented interpersonal skills by ensuring customer questions/inquires were handled right away.\n" +
            "Impacted bike manufacturing by evaluating sale records of previous week and applying it to current week.",
          color: "#D83B01",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Coming Soon!",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "bpl.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle: "...",
    link: "#",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "#",
    subtitle: "#",
    avatar_image_path: "",
    location_map_link: "#",
  },
  phoneSection: {
    title: "#",
    subtitle: "#",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
