
import {
  Greet, askQuestion, sayResult, getUseAnswer,
  getRandInt, checkNumIsEven, checkValAndAnswUse, sayRules, getNameSayHi,
} from '../index';

const gameParityCheck = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('Answer "yes" if the number is even, otherwise answer "no".');

  let i = 0;
  while (i !== 3) {
    const RandInt = getRandInt(99);
    askQuestion(RandInt);
    const resultOfChecking = checkValAndAnswUse(checkNumIsEven(RandInt), getUseAnswer(), name);
    sayResult(resultOfChecking);
    i = resultOfChecking === 'Correct!' ? i += 1 : i = 0;
  }
  return console.log(`Congratulations, ${name}`);
};
export default gameParityCheck;
