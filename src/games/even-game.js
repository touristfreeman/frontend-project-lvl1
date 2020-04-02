import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const isEven = (num) => (num % 2 === 0);

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const number = getRandInt(99);
    questions.push(number);
    answers.push(isEven(number) ? 'yes' : 'no');
  }
  const data = [questions, answers];
  return data;
};

const rule = 'What is the result of the expression?';
export default () => runBrainGame(rule, getGameData());
