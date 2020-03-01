
import {
  Greet, getUseAnswer, getRandInt, checkUseAnswAndSayRes, sayRules, getNameSayHi, askQuestion,
  car, cdr,
} from '../index';

import { getResArithOperat, getRandomOperator } from '../uniqueCodeCalc';

const gameBrainCalc = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('What is the result of the expression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const ResultArithOper = getResArithOperat(getRandInt(99), getRandInt(99), getRandomOperator());
    askQuestion(cdr(ResultArithOper));
    const checkResult = checkUseAnswAndSayRes((car(ResultArithOper)), getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameBrainCalc;
