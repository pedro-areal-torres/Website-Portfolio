import WORDLE_GAME from '../../assets/img/wordle.gif';
import COMMING_SOON from '../../assets/img/coming-soon.gif';

const portfolioProj = [
  {
    id: 1,
    name: 'Wordle Game',
    img: WORDLE_GAME,
    descr: (
      <p className='portfolio__details-description'>
        Wordle is an online 5-letter word game. Usually each day a new word is
        released, but <b>on this version you can play as many times you want</b>
        . Players have six attempts to guess what the word of the day is. During
        the guesses, tiles will change colour to help players get the word.
      </p>
    ),
    techs: [
      {
        id: 1,
        name: 'ReactJS',
        url: 'https://reactjs.org/',
      },
      {
        id: 2,
        name: 'React Hooks',
        url: 'https://reactjs.org/docs/hooks-intro.html',
      },
      {
        id: 3,
        name: 'API Context',
        url: 'https://reactjs.org/docs/context.html',
      },
    ],
    creationUpdateDt: "Created on: April 2022 · Last Update: April 2022",
    codeUrl: "https://github.com/pedro-areal-torres/Wordle-Game",
    demoUrl: "https://gorgeous-speculoos-305690.netlify.app/",
  },
  {
    id: 2,
    name: 'Stocks Universe',
    img: COMMING_SOON,
    descr: (
      <p className='portfolio__details-description'>
        Check your favorite stocks details, news, price variation and winners and loosers from each exchange.
      </p>
    ),
    techs: [
      {
        id: 1,
        name: 'ReactJS',
        url: 'https://reactjs.org/',
      },
      {
        id: 2,
        name: 'React Router',
        url: 'https://reactrouter.com/',
      },
      {
        id: 3,
        name: 'React Redux',
        url: 'https://react-redux.js.org/',
      },
      {
        id: 4,
        name: 'Antdesign',
        url: 'https://ant.design/',
      },
      {
        id: 5,
        name: 'RTK Query',
        url: 'https://redux-toolkit.js.org/rtk-query/overview',
      },
    ],
    creationUpdateDt: "Release Date: 1st May 2022",
  },
];

export default portfolioProj;