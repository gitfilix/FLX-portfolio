// Hero
import InstagramLineIcon from 'remixicon-react/InstagramLineIcon'
import FacebookCircleLineIcon from 'remixicon-react/FacebookCircleLineIcon'
import DribbbleLineIcon from 'remixicon-react/DribbbleLineIcon'
import YoutubeLineIcon from 'remixicon-react/YoutubeLineIcon'
import GithubLineIcon from 'remixicon-react/GithubLineIcon'

/* eslint-disable react/jsx-key */
export const heroIcons = [
  <InstagramLineIcon />,
  <FacebookCircleLineIcon />,
  <DribbbleLineIcon />,
  <YoutubeLineIcon />,
  <GithubLineIcon />,
]

// About Me
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import Projector2LineIcon from 'remixicon-react/Projector2LineIcon'
import GroupLineIcon from 'remixicon-react/GroupLineIcon'
import AwardFillIcon from 'remixicon-react/AwardFillIcon'
import PulseLineIcon from 'remixicon-react/PulseLineIcon'
import BugLineIcon from 'remixicon-react/BugLineIcon'
import CupFillIcon from 'remixicon-react/CupFillIcon'

export const aboutData = [
  {
    title: 'Github Commits',
    amount: 248,
    icon: <GithubFillIcon />,
  },
  {
    title: 'Bugs fixed',
    amount: 227,
    icon: <BugLineIcon />,
  },
  {
    title: 'New Bugs deployed',
    amount: 46,
    icon: <PulseLineIcon />,
  },
  {
    title: 'Coffees during workhours',
    amount: 307,
    icon: <CupFillIcon />,
  },
]

import DownloadLineIcon from 'remixicon-react/DownloadLineIcon'
import ArrowLeftSFillIcon from 'remixicon-react/ArrowLeftSFillIcon'

export const downloadIcon = <DownloadLineIcon />
export const arrowLeftIcon = <ArrowLeftSFillIcon />

export const aboutText =
  " Hallo, ich bin Felix, ein Web Frontend Engineer, WebDude & Nerd.. Ich code HTML, CSS, JavaScript, React, NextJS, TypeScript  to build functional and responsive web applications.  Here comes more text. wahrscheinlich in Deutsch. to build functional and responsive web applications.  Here comes more text. wahrscheinlich in Deutsch. to build functional and responsive web applications. Und noch mehr text über mich wahrscheinlich in Deutsch."
// End of About Me

// Experience Work
export const experienceData = [
  {
    year: 2015,
    year2: 2025,
    title: 'Tamedia',
    education:
      'Fronend Engineer',
    experience: [
      'React Fronend für SPA, PWA, Deskop Websites: tagesanzeiger, der Bund, Berner Zeitung, TdG, 24Heures, 20min, LeMatin, usw',
      'Javascript, NodeJS, NextJS, TypeScript, ES6 - ES2017, SASS, SCSS, MongoDB, Express, APIs, Legacy Systeme',
      'Scrum Meetings in Englisch vorbereiten und durchführen',
      'Zusammenarbeit mit Product Ownern, Stakeholders, UX und Designers sowie anderen Development Teams',
      'Clean Code, Code Reviews, Unit-, & visual-, Testing, code maintainance'
    ],
  },
  {
    year: 2008,
    title: 'Linux System Administor I',
    education:
      'HSR Technische Hochschule, Rapperswil',
    experience: [
      'Linux System Administration LPIC 1 & 2: Kernel, Shells, Runlevels, RAID, LVM, DNS, Security, Webdienst',
      'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
    ],
  },
  {
    year: 2012,
    title: 'Linux System Administor II',
    education:
      'HSR Technische Hochschule, Rapperswil',
    experience: [
      'Internships: Secure internships with tech companies or design agencies.',
      'Contribute to Open Source: Collaborate on open-source projects.',
    ],
  },
  {
    year: 2008,
    title: 'Building Expertise and Expanding Skills',
    education: 'Certifications: Obtain certifications in advanced web technologies.',
    experience: [
      'Full-Time Position: Work as a junior web developer or designer.',
      'Portfolio Development: Continuously update your portfolio with professional and personal projects.',
    ],
  },
  {
    year: 2020,
    title: 'Frontend Stuff',
    education: 'Workshops and Conferences: Attend industry events to stay updated.',
    experience: [
      'Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.',
      'Freelance and Consulting: Consider starting a freelance business or consulting practice.',
    ],
  },
  {
    year: 2022,
    title: 'Frontend Stuff II',
    education: 'Workshops and Conferences: Attend industry events to stay updated.',
    experience: [
      'Senior Position: Aim for a senior web developer or lead designer role, mentoring junior colleagues.',
      'Freelance and Consulting: Consider starting a freelance business or consulting practice.',
    ],
  },
]

// Education 
export const educationData = [
  {
    year: 2001,
    year2: 2002,
    title: 'SAE',
    educationTitle:
      'School of Audio Engineering: Multimedia Producer Diploma',
    learnedSkills: [
      'Basic HTML & CSS, PHP, CD Authoring und Cinema 4D.',
      'Lingo, Macromedia- & Adobe Tools: Photoshop und Illustrator, Datenbankanbindungen',
      'Persönliche Webseiten für Private oder Blogs.',
    ],
  },
  // {
  //   year: 2006,
  //   title: 'Unix Kurse',
  //   educationTitle:
  //     'HP Unix, Sun Solaris',
  //   learnedSkills: [
  //     'Unix Kurse und Zertifikate Sytem Administration 1 & 2: Kernel, Shells, Runlevels, RAID, LVM, DNS, Security, Webdienst',
  //     'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
  //   ],
  // },
  // {
  //   year: 2008,
  //   title: 'Linux System Administor I',
  //   educationTitle:
  //     'HSR Technische Hochschule, Rapperswil',
  //   learnedSkills: [
  //     'Linux System Administration LPIC 1 & 2: Kernel, Shells, Runlevels, RAID, LVM, DNS, Security, Webdienst',
  //     'Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.',
  //   ],
  // },
  // {
  //   year: 2012,
  //   title: 'Linux System Administor II',
  //   educationTitle:
  //     'HSR Technische Hochschule, Rapperswil',
  //   learnedSkills: [
  //     'Internships: Secure internships with tech companies or design agencies.',
  //     'Contribute to Open Source: Collaborate on open-source projects.',
  //   ],
  // },
  {
    year: 2012,
    title: 'Web Entwicklung Update',
    educationTitle: 'Web-Entwicklung & Screen Design',
    learnedSkills: [
      'HTML-5, CSS, JavaScript, JQuery, Cross-Browser, Prototyping, Templating,',
      'Semantic & valid Coding, MVC, MVVM, Mobile First, responsive-& liquid Design',
    ],
  },
  {
    year: 2012,
    year2: 2014,
    title: 'Selbststudium',
    educationTitle: 'Nerd',
    learnedSkills: [
      'HTML-5, CSS-3, SASS, JQuery, Design Frameworks, Cross-Browser Testing, Prototyping, Templating, Navigationskonzeption, Grid- Systeme',
      'Semantic & valid Coding, MVC, MVVM, Mobile First, responsive- Design, ColdFusion, SQL, Libraries',
      'Kundenprojekte, Liebhaberprojekte, Schulprojekte'
    ],
  },
  {
    year: 2012,
    year2: 2014,
    title: 'eidg. dipl Techniker Visuelle Kommunikation',
    educationTitle: 'TSM: Medienwirtschaft und Medienmanagement',
    learnedSkills: [
      'Technisches Medienmanagement, Marketing, Projektmanagement, visuelle Kommunikation, Innovation, Fi-Bu Kalkulation, Social media',
      'Integration, Print- & Web Produktion, Qualitätsmanagement, Qualitätsmanagement'
    ],
  },
   {
    year: 2015,
    title: 'Training: JavaScript Update, Kerala India',
    educationTitle: 'Javascript Training',
    learnedSkills: [
      'Javascript OOP, MVC, MVVM, JS Handlebars, KnockoutJS, Databinding, AJAX',
    ],
  },
   {
    year: 2015,
    year2: 2016,
    title: 'CAS: Front End Engineering',
    educationTitle: 'Hochschule für Technik: Frontend Engineer CAS',
    learnedSkills: [
      'NodeJS, Rest Services, Software Engineering mit JS, Testing',
      'Single Page Application mit Angular, Web optimierungen, Web App User experience',
      'New Frontend Trends, Start- und Abschlussprojekt, Prüfung'
    ],
  },
  {
    year: 2016,
    title: 'Online: React Training',
    educationTitle: 'React JS for Webdevs',
    learnedSkills: [
      'Life Cycle Methods, React components in 2016',
    ],
  },
   {
    year: 2020,
    title: 'Online: MERN Fullstack',
    educationTitle: 'MERN Fullstack Guide',
    learnedSkills: [
      'React, NodeJS, MongoDB, Express, GraphQL, TypeScript',
    ],
  },
   {
    year: 2022,
    year2: 2023,
    title: 'CAS: Front End Engineering Avanced',
    educationTitle: 'Hochschule für Technik: Advance Frontend Engineer CAS',
    learnedSkills: [
      'Design Systems, CSS-Trends, Figma, NextJs, TypeScript. React Hooks, PWA, APIs, Data- & Statemanagement',
      'Cloud Dev Ops: Login & Security im Frondend, OICD, CI /CD Pipelines, Automated Testing, Cloud Function and Applications',
      'Leadership: Process Communication Model, zwischenmenschliche Kommunikation',
      'Abschlussprojekt: Twitter -Clone mit Auth, Deployment, Testing, Security & Präsentation'
    ],
  }
]

// Skills
export const skillsData = [
  {
    name: 'VS Code',
    icon: '/skills/vscode.png',
  },
  {
    name: 'HTML',
    icon: '/skills/html.png',
  },
  {
    name: 'CSS',
    icon: '/skills/css.png',
  },
  {
    name: 'ES 2017',
    icon: '/skills/js.png',
  },
  {
    name: 'TailwindCSS',
    icon: '/skills/tailwind.png',
  },
  {
    name: 'Vite',
    icon: '/skills/vite.png',
  },
  {
    name: 'ReactJS',
    icon: '/skills/react.png',
  },
  {
    name: 'TypeScript',
    icon: '/skills/ts.png',
  },
  {
    name: 'CSS Modules',
    icon: '/skills/css_modules.png'
  },
  {
    name: 'Photoshop',
    icon: '/skills/photoshop.png',
  },
  {
    name: 'Framer Motion',
    icon: '/skills/framer.png',
  },
  {
    name: 'NextJS',
    icon: '/skills/nextjs.png',
  },
  {
    name: 'Astro',
    icon: '/skills/astro.png',
  },
  {
    name: 'Node JS',
    icon: '/skills/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'MySQL (todo)',
    icon: '/skills/mongodb.png',
  },
  {
    name: 'Github',
    icon: '/skills/github.png',
  },
]

// Reviews
import StarFillIcon from 'remixicon-react/StarFillIcon'
import StarHalfLineIcon from 'remixicon-react/StarHalfLineIcon'
import ArrowLeftSLineIcon from 'remixicon-react/ArrowLeftSLineIcon'
import ArrowRightSLineIcon from 'remixicon-react/ArrowRightSLineIcon'

/* eslint-disable react/jsx-key */
export const starIcons = [<StarFillIcon />, <StarHalfLineIcon />]
export const arrowIcons = [<ArrowLeftSLineIcon />, <ArrowRightSLineIcon />]


import CheckLineIcon from 'remixicon-react/CheckLineIcon'

export const checkIcon = <CheckLineIcon />

// Q & A Section
export const questions = [
  {
    question: 'Warum arbeite ich gerne als Frontend Engineer?',
    answer:
      'It takes approximately 6-10 weeks to build a website from start to finish, providing we have all the information from you. Our full web design process is broken down here. Generally speaking, the website will only take a long time if we are still waiting for text and images from yourself.',
  },
  {
    question: 'Warum braucht es Frontend Engeneering?',
    answer:
      'Wissen in den Bereichen Architektur, Entwicklungsprozesse im Team, Design & Component Systems, Cloud Deployment und weitere Fähigkeiten, um ein Projekt erfolgreich vom Start bis zum Go-Live zu führen.',
  },
  {
    question: 'Warum hat es keine Links zu deinen Arbeiten?',
    answer:
      'In den letzten 10 Jahren habe ich für die grössten kommerziellen Newsportale der Schweiz gearbeitet. Mein Code wird also täglich auf hunderttausenden Clients ausgeführt (tagesanzeiger.ch, 20min, derbund.ch usw). Es ist aber nicht "nur mein code", jedoch unsere Codebase. Da dieser in privaten Repositories gehalten wird ist er nicht öffentlich zugänglich. Meine älteren produktive Projekte und Side-Projects sind teilweise online, aber natürlich nicht mehr state-of-the-art.',
  },
  {
    question: 'Warum ist der Look & Feel dieser Seite verspielt und visueller Effeke? Ein seriöser Fronend Engineer erstellt doch nicht ein solches Portfolio.',
    answer:
    'Das ist wortwörtlich Ansichtssache.\n\n' + 
  'Persönlich: Wenn ich in der Freizeit eine Portfolio-Webpage erstelle, dann sollte es wenigstens visuell ansprechend sein und ich möchte eine neue Technologie dazulernen. Hier "Framer-Motion".\n\n' +
  'Technische Erklärung: Lange Zeit konnte man fast keine visuellen Effekte mit ReactJS erstellen, sondern konnte nur die CSS Animationen verwenden. Nun kann man wieder mit JS / React kombinieren ohne markanten Performance-losses.\n\n' +
  'But seriously: Die anspruchsvolle Arbeit dieser Page ist TypeScript, Linter (Biome-) Setup, Deployment-Pipeline setup, tailwind und postcss-confuration. Dann darf auch ein bisschen Spass bei den Animationen sein?'
  },
  {
    question: 'Wie würde ich meine Persönlichkeit beschreiben?',
    answer:
      'Ich bin ein Nerd...  - jedoch ganz umgänglich, aber humorlos... 😊 Kann auch mit Nicht-Techies ganz gut kommunizieren und möchte am grossen ganzen mitarbeiten. Ich kann auch Kochen und Backen',
  },
  {
    question: 'Mit welchen Tools ist diese Webpage erstellt?',
    answer:
      'Diese Page: NextJS, React, TypeScript, Framer Motion (for Fun! 😎), TailwindCSS (for pain! 🤔), Render yaml-pipeline',
  },
  {
    question: 'Was habe ich in den Jahren zwischen der Multimedia Ausbildung und Webapplikation entwickeln getan?',
    answer:
      'Systeme aller Art: Ich war über Jahren System Admin und habe (fast) alle Systeme durchgespielt: von High-availability Unix, Linux, Windows, bis zu proprietäre Realtime Systems. Dannach habe ich die commandline gegen Photoshop ausgetauscht, um nach ein paar Jahren wieder auf zsh zurückzukommen... ',
  },
  {
    question: 'Ersetzt AI das Code schreiben im nächsten Jahr komplett?',
    answer:
      'Ja. ...und dann muss ich wieder den Code fixen den die AI geschrieben hat - mit Hilfe von AI. also Nein. Vielleicht sollte ich mich "Promt Engineer" nennen. Alles ist im Umbruch und das ist gut so.',
  },
  {
    question: 'Was mache ich in meiner Freizeit?',
    answer:
      'Theorie: Ich lese offline- Bücher und Graphic Novels, Backe Laugenbräzeli, Photographiere und entwickle, Bastle mit physischen Werkzeuge etwas, Wanderungen im Berner Oberland... - Praxis: Ich habe 2 Kinder, sorry - ich habe eigenlich fast keine freie "me-Time" - see you at the Playground',
  },
  {
    question: 'Wie macht man diesen coolen Aurora- Background-Effect?',
    answer:
      'In einem Satz: Das ist ein simpler radial-gradient mit einer dynamischen color-rage variable in einem Array, welcher durch ein useMotionValue Framer-MotionHook smootly ersetzt und animiert, mirrored- & infinity repeated wird und einem useMotionTemplate als css propperty im backgroundImage definiert ist. Der React -useEffect Hook mit leerem dependancy array called einmalig die animate function. Okay zwei Sätze. Easy eigentlich.'
  }
]

import ArrowDropDownLineIcon from 'remixicon-react/ArrowDropDownLineIcon'
export const questionArrow = <ArrowDropDownLineIcon />

// Navbar
import CopyrightLineIcon from 'remixicon-react/CopyrightLineIcon'

export const copyRightIcon = <CopyrightLineIcon />

import Home5LineIcon from 'remixicon-react/Home5LineIcon'
import UserLineIcon from 'remixicon-react/UserLineIcon'
import HistoryLineIcon from 'remixicon-react/HistoryLineIcon'
import BriefcaseLineIcon from 'remixicon-react/BriefcaseLineIcon'
import UserStarLineIcon from 'remixicon-react/UserStarLineIcon'
import ProjectorLineIcon from 'remixicon-react/ProjectorLineIcon'
import PriceTag3LineIcon from 'remixicon-react/PriceTag3LineIcon'
import ContactsBook2LineIcon from 'remixicon-react/ContactsBook2LineIcon'
import QuestionAnswerLineIcon from 'remixicon-react/QuestionAnswerLineIcon'

export const navbarData = [
  {
    id: 'hero',
    name: 'Home',
    icon: <Home5LineIcon />,
  },
  {
    id: 'aboutme',
    name: 'About',
    icon: <UserLineIcon />,
  },
  {
    id: 'experience',
    name: 'Erfahrung',
    icon: <HistoryLineIcon />,
  },
  {
    id: 'education',
    name: 'Ausbildung',
    icon: <UserStarLineIcon />,
  },
  {
    id: 'skills',
    name: 'Skills',
    icon: <BriefcaseLineIcon />,
  },
  {
    id: 'questions',
    name: 'Questions',
    icon: <QuestionAnswerLineIcon />,
  },
]

// Toggle
import MoonFoggyFillIcon from 'remixicon-react/MoonFoggyFillIcon'
import SunFoggyFillIcon from 'remixicon-react/SunFoggyFillIcon'

export const sunIcon = <SunFoggyFillIcon />
export const moonIcon = <MoonFoggyFillIcon />
