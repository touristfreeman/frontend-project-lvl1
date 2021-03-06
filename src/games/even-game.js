import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const isEven = (num) => (num % 2 === 0);

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const question = getRandInt(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';

    answers.push(answer);
    questions.push(question);
  }
  return [questions, answers];
};

const task = 'What is the result of the expression?';
export default () => runBrainGame(task, getGameData());
