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
  paragraphOne:
    'My name is Manjaka Randrianirina and I am from Madagascar. I am a front-end developer. I was selected by Onja, an organization that teaches technology and English to young people who do not have opportunities to go to University.',
  paragraphTwo:
    'Before joining Onja, I was not fluent in English and had not even used a computer. After only a year in the organization, I can now speak and understand English and am continuing to learn about communication and professionalism.',
  paragraphThree:
    'We study for six days a week, from Mondays to Saturdays. We began by learning markdown to understand how to write a good readme file. From there, we moved on to learning HTML and CSS, the base of the whole website. We then learned Javascript and React, and at the end of the year, we studied Redux and Typescript.',
  paragraphFour:
    'We have completed some projects with Redux and Typescript, we have finished more than eighty projects with React and Vanilla Javascript. ',
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
