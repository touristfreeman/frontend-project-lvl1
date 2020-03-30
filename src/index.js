import readlineSync from 'readline-sync';

export const totalCounter = 3;

export const runBrainGame = (rule, quest, answ) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(rule);

  for (let i = 0; i < totalCounter; i += 1) {
    console.log(`hint: ${answ[i]}`);
    console.log(`Question: ${quest[i]}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answ[i]) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${answ[i]}'. \nLet's try again, ${name}\n`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};
