import readlineSync from 'readline-sync';

const Greet = () => console.log('Welcome to the Brain Games!');
const sayRules = (rules) => console.log(rules);
const getNameSayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name} !`);
  return name;
};
const askQuestion = (question) => console.log(`Question: ${question}`);
const getUseAnswer = () => readlineSync.question('Your answer: ');

const checkUseAnswAndSayRes = (correctAnswer, useAnswer, useName) => {
  if (String(correctAnswer) === useAnswer) {
    console.log('Correct!');
    return true;
  }
  return console.log(`\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
};

export default (rule, questionOfuse, correctАnswerArr) => {
  Greet();
  const name = getNameSayHi();
  sayRules(rule);
  console.log(correctАnswerArr);

  const coutnToThree = (count = 0, countArr = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }
    askQuestion(questionOfuse[countArr]);
    const checkResult = checkUseAnswAndSayRes(correctАnswerArr[countArr], getUseAnswer(), name);
    return checkResult ? coutnToThree(count + 1, countArr + 1) : null;
  };
  return coutnToThree();
};
