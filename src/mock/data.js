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
  paragraphOne: 'My name is Manjaka Randrianirina. I am a front-end developer. I am from Madagascar. I was selected by Onja which is an organization teaches young people about tech and English. I could not speak English and I have not use computer before I joined Onja. We learn English only a year but I can speak and understand English now. What is more, we also learn about communication and professionalism.',
  paragraphTwo: 'We study six days a week which includes Saturday. We learn markdown at the begining so that we would be able to write a good readme file. We moved on learning HTML and CSS after that because they are base of whole website. When we have learn more about that, we started to leanr Javascript and React. We have done more than eighty projects in a year. Some of our project are built with React and some are built with Vanilla Javascript. We also learn about Redux and Typescript and the end of the year of studying. We have done at least two projects as well.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'country-quiz-small.png',
    title: 'Country Quiz',
    info: 'Country Quiz is a website that allows users to view country information, and features quizzes on capitals names and flags for different parts of the globe. It was built using Create React App and utilizes the Rest Countries API and components from Semantic-UI-React.',
    info2: '',
    url: 'https://country-quiz-manjaka.netlify.app/',
    repo: 'https://github.com/moro-patana/country-quiz', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'birthday-app-small.png',
    title: 'Birthday App',
    info: 'The Birthday App is a website that lists the upcoming birthdays of registered users. It uses register functionalities. In each list, there is a custom birthday field for each user. So, each user can see the upcoming birthdays of all the people that have registered and inserted their birthday',
    info2: '',
    url: 'https://birthday-app-manjaka.netlify.app/',
    repo: 'https://github.com/moro-patana/birthday-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'photograph-small.png',
    title: 'Photograph',
    info: 'This project is built with HTML and Sass. There are some functionalities which built by Vanilla Javascript such as the menu and the image slider. It is a single page app. In this website, users can sroll to see all the images and find the owner of the photograph.',
    info2: '',
    url: 'https://front-end-final-manjaka.netlify.app/',
    repo: 'https://github.com/moro-patana/front-end-finals', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
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
