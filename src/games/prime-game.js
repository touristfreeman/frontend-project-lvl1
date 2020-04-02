import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return true;
  }
  return num % count === 0 ? false : checkPrimInt(num, count + 1);
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const randomInt = getRandInt(9);
    questions.push(randomInt);
    answers.push(checkPrimInt(randomInt) ? 'yes' : 'no');
  }
  const data = [questions, answers];
  return data;
};

const rule = 'Find the greatest common divisor of given numbers.';
export default () => runBrainGame(rule, getGameData());
