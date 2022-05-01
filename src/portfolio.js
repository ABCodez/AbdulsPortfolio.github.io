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
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1i3VT_vIfRpQPQB0ae2fPFOB-bUt_SbGM/view?usp=sharing",
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
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
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
      title: "Brock University",
      subtitle: "Bachelors of Computing and Business Honours (COOP)",
      logo_path: "brocku2-modified.png",
      alt_name: "IIITDM Kurnool",
      duration: "2020 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
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
    "I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
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
          location: "Lincoln, Ontario",
          description:
            "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
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
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
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
