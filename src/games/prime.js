
import {
  Greet, getNameSayHi, sayRules, askQuestion, getUseAnswer,
  getRandInt, checkPrimInt, checkUseAnswAndSayRes,
} from '../index';


const gameBrainPrime = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('Answer "yes" if given number is prime. Otherwise answer "no".');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const randInt = getRandInt(9) + getRandInt(9);
    askQuestion(randInt);
    const resCheckPrimtIn = checkPrimInt(randInt);
    const checkResult = checkUseAnswAndSayRes(resCheckPrimtIn, getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameBrainPrime;
