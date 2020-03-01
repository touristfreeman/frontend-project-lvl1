
import {
  Greet, askQuestion, getUseAnswer, getRandInt, checkUseAnswAndSayRes, sayRules, getNameSayHi,
} from '../index';

import checkNumIsEven from '../uniqueCodeEven';

const gameParityCheck = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('Answer "yes" if the number is even, otherwise answer "no".');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const RandInt = getRandInt(99);
    askQuestion(RandInt);
    const checkResult = checkUseAnswAndSayRes(checkNumIsEven(RandInt), getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameParityCheck;
