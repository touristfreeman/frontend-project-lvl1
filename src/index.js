import readlineSync from 'readline-sync';

export const numberRounds = 3;

export const runBrainGame = (task, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello ${name}`);

  for (let i = 0; i < numberRounds; i += 1) {
    const [question, answer] = gameData[i];
    console.log(`Question: ${question}`);
    console.log(`hint: ${answer}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      return console.log(`\n'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${name}\n`);
    }
  }
  return console.log(`Congratulations, ${name}`);
};

// hint уберу после завершения проекта =)
