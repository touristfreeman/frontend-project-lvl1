import readlineSync from 'readline-sync';

const getNameAndGreet = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName} !`);
  return userName;
};
const name = getNameAndGreet();

const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

const askUseEvenOrNot = () => readlineSync.question('Your answer: ');

const checkNumAndAnswUse = (RandomInt, answerUse) => {
  const RandomIntresult = RandomInt % 2 === 0 ? 'yes' : 'no';
  return RandomIntresult === answerUse ? 'Correct!' : `'${answerUse}' is wrong answer ;(. Correct answer was '${RandomIntresult}'. \nLet's try again, ${name}`;
};

const gameParityCheck = () => {
  console.log('Welcome to the Brain Games! \nAnswer "yes" if the number is even, otherwise answer "no".');
  console.log('');

  let i = 0;
  while (i !== 3) {
    const curRandInt = getRandomInt(99);
    console.log(`Question: ${curRandInt}`);
    const curAnswUse = checkNumAndAnswUse(curRandInt, askUseEvenOrNot());
    console.log(curAnswUse);
    i = curAnswUse === 'Correct!' ? i += 1 : i = 0;
  }
  return console.log(`Congratulations, ${name}`);
};
export default gameParityCheck;
