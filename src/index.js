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
export const askQuestionNew = (question) => console.log(`Question: ${car(question)} ${cdr(question)}`); // не проверено еще, но должно работать)
export const sayResult = (result) => console.log(result);
export const getUseAnswer = () => readlineSync.question('Your answer: ');

export const getRandInt = (max) => Math.floor(Math.random() * Math.floor(max));

export const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[getRandInt(2)];
};

export const getResArithOperatAndAskUs = (num1, num2, operator) => {
  let operationResult = num1 * num2;

  if (operator === '-') {
    operationResult = num1 - num2;
  } else if (operator === '+') {
    operationResult = num1 + num2;
  } else {
    operationResult = num1 * num2;
  }
  askQuestion(`${num1} ${operator} ${num2}`);
  return operationResult;
};

export const checkNumIsEven = (randInt) => (randInt % 2 === 0 ? 'yes' : 'no');
export const checkValAndAnswUse = (correctAnswer, useAnswer, useName) => (String(correctAnswer) === useAnswer ? 'Correct!' : `\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
