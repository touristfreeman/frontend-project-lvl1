import {
  runBrainGame,
  numberRounds,
} from '../index';
import getRandInt from '../utils';

const progressionLength = 10;

const makeProgression = (firstItem, step) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstItem + i * step);
  }
  return progression;
};


const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const firstMember = getRandInt(1, 15);
    const difference = getRandInt(1, 10);
    const hiddenMemberIndex = getRandInt(0, 9);
    console.log(` hiddenMemberIndex/${hiddenMemberIndex}`);
    const progression = makeProgression(firstMember, difference);

    console.log(` progression/${progression}`);
    const answer = String(progression[hiddenMemberIndex]);
    progression[hiddenMemberIndex] = '..';
    const question = progression.join(' ');

    answers.push(answer);
    questions.push(question);
  }
  return [questions, answers];
};

const task = 'What number is missing in the progression?';
export default () => runBrainGame(task, getGameData());
