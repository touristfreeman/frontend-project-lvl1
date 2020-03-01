import readlineSync from 'readline-sync';

export const cons = (x, y) => (f) => f(x, y);
export const car = (p1) => p1((x) => x);
export const cdr = (p2) => p2((x, y) => y);

export const Greet = () => console.log('Welcome to the Brain Games!');
export const sayRules = (rules) => console.log(rules);
export const getNameSayHi = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hi ${name} !`);
  return name;
};
export const askQuestion = (question) => console.log(`Question: ${question}`);
export const sayResult = (result) => console.log(result);
export const getUseAnswer = () => readlineSync.question('Your answer: ');

export const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const checkUseAnswAndSayRes = (correctAnswer, useAnswer, useName) => {
  if (String(correctAnswer) === useAnswer) {
    console.log('Correct!');
    return true;
  }
  return console.log(`\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
};
