import readlineSync from 'readline-sync';

export const getNameAndGreet = () => {
	const userName = readlineSync.question('May I have your name?');
	return console.log('Hi ' + userName + '!');
};

