
import {
  GreetAndSayRuls, askName, sayHi, askQuestion, sayResult, getUseAnswer,
  getRandInt, checkNumIsEven, checkValAndAnswUse,
} from '../index';

const gameParityCheck = () => {
  GreetAndSayRuls('Answer "yes" if the number is even, otherwise answer "no".');
  const name = askName();
  sayHi(name);

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
