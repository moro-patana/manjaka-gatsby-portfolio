import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Manjaka',
  subtitle: 'I am a front-end developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'My name is Manjaka Randrianirina and I am a Front-End developer from Madagascar.',
  paragraphTwo:
    'In 2019 I was selected by Onja, an organization that teaches English and software development and to young people who do not have the opportunity to go to University. At that time I could barely speak English or use a computer but after a lot of hard work, great teachers and a couple of years I picked up the skills I needed to become a software developer.',
  paragraphThree:
    'Since May I have been a Front-End web developer for Eskwelabs, a online data science school. During my time I have published more than 20 pull requests to add styling, React components and CRUD functionality to their web platform. I have also writing tests with Cypress and Jest. Our tech stack included React, TypeScript, TailwindCSS, and GraphQL. From time to time I also contributed a little to our NodeJS MongoDB PostgreSQL backend.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'country-quiz-small.png',
    title: 'Country Quiz',
    info:
      'Country Quiz is a website that allows users to view country information and features quizzes on the flags and names of capital cities around the world. It was built using Create React App and utilizes the Rest Countries API and components from Semantic-UI-React.',
    info2: '',
    url: 'https://country-quiz-manjaka.netlify.app/',
    repo: 'https://github.com/moro-patana/country-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'birthday-app-small.png',
    title: 'Birthday App',
    info:
      'The Birthday App is a website that lists the upcoming birthdays of registered users. It uses register functionalities. In each list, there is a custom birthday field for each user. So, each user can see the upcoming birthdays of all the people that have registered and inserted their birthday',
    info2: '',
    url: 'https://birthday-app-manjaka.netlify.app/',
    repo: 'https://github.com/moro-patana/birthday-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'photograph-small.png',
    title: 'Photograph',
    info:
      'Photograph was built with HTML and Sass. There are some functionalities which are built with Vanilla Javascript such as the menu and the image slider. It is a single-page app. In this website, users can scroll to see all the images and find the owner of each photograph.',
    info2: '',
    url: 'https://front-end-final-manjaka.netlify.app/',
    repo: 'https://github.com/moro-patana/front-end-finals', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'mailto:manjaka.ran@onja.org',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/moro-patana',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
