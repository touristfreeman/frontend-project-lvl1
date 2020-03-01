
import {
  Greet, getNameSayHi, sayRules, cons, car, cdr, askQuestion, getUseAnswer,
  getRandInt, checkUseAnswAndSayRes,
} from '../index';

import { getSimpleFact, getCommonFact } from '../uniqueCodeGcd';

const gameGcd = () => {
  Greet();
  const name = getNameSayHi();
  sayRules('Find the greatest common divisor of given numbers.');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    const twoRandIn = cons(getRandInt(999), getRandInt(999));
    const corrAnsw = getCommonFact(getSimpleFact(car(twoRandIn)), getSimpleFact(cdr(twoRandIn)));
    console.log(`hint ${corrAnsw}`);
    askQuestion(`${car(twoRandIn)} ${cdr(twoRandIn)}`);
    const checkResult = checkUseAnswAndSayRes(corrAnsw, getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };
  return coutnToThree();
};
export default gameGcd;
