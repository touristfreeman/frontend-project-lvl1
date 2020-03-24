import readlineSync from 'readline-sync';

const checkUseAnswAndSayRes = (correctAnswer, useAnswer, useName) => {
  if (correctAnswer === useAnswer) { // убрать типизацию
    console.log('Correct!');
    return true;
  }
  return console.log(`\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
};

const car = (p1) => p1((x) => x);
const cdr = (p2) => p2((x, y) => y);

export const totalCounter = 3;

export const runBrainGame = (rule, arrPair) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(rule);

  const coutnToThree = (count = 0, arrCount = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    console.log(`hint: ${cdr(arrPair[arrCount])}`);
    console.log(`Question: ${car(arrPair[arrCount])}`);
    const checkResult = checkUseAnswAndSayRes(cdr(arrPair[arrCount]), readlineSync.question('Your answer: '), name);
    return checkResult ? coutnToThree(count + 1, arrCount + 1) : null;
  };
  return coutnToThree();
};
