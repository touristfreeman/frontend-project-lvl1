import { runBrainGame, numberRounds } from '../index';
import getRandInt from '../utils';

const progressionLength = 10;

const getArProgression = (firstMember, difference) => {
  const progression = [firstMember];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + difference);
  }
  return progression;
};

const getGameData = () => {
  const questions = [];
  const answers = [];

  for (let i = 0; i < numberRounds; i += 1) {
    const firstMember = getRandInt(1, 15);
    const difference = getRandInt(1, progressionLength);
    const hiddenMemberIndex = getRandInt(1, progressionLength);
    const arithProgression = getArProgression(firstMember, difference);

    answers.push(String(arithProgression[hiddenMemberIndex]));
    arithProgression[hiddenMemberIndex] = '..';
    questions.push(arithProgression.join(' '));
    
  }
  return [questions, answers];
};

const task = 'What number is missing in the progression?';
export default () => runBrainGame(task, getGameData());
