"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkUseAnswAndSayRes = exports.getRandInt = exports.getUseAnswer = exports.sayResult = exports.askQuestion = exports.getNameSayHi = exports.sayRules = exports.Greet = exports.cdr = exports.car = exports.cons = void 0;

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const cons = (x, y) => f => f(x, y);

exports.cons = cons;

const car = p1 => p1(x => x);

exports.car = car;

const cdr = p2 => p2((x, y) => y);

exports.cdr = cdr;

const Greet = () => console.log('Welcome to the Brain Games!');

exports.Greet = Greet;

const sayRules = rules => console.log(rules);

exports.sayRules = sayRules;

const getNameSayHi = () => {
  const name = _readlineSync.default.question('May I have your name? ');

  console.log(`Hi ${name} !`);
  return name;
};

exports.getNameSayHi = getNameSayHi;

const askQuestion = question => console.log(`Question: ${question}`);

exports.askQuestion = askQuestion;

const sayResult = result => console.log(result);

exports.sayResult = sayResult;

const getUseAnswer = () => _readlineSync.default.question('Your answer: ');

exports.getUseAnswer = getUseAnswer;

const getRandInt = max => Math.floor(Math.random() * Math.floor(max));

exports.getRandInt = getRandInt;

const checkUseAnswAndSayRes = (correctAnswer, useAnswer, useName) => {
  if (String(correctAnswer) === useAnswer) {
    console.log('Correct!');
    return true;
  }

  return console.log(`\n'${useAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${useName}\n`);
};

exports.checkUseAnswAndSayRes = checkUseAnswAndSayRes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zIiwieCIsInkiLCJmIiwiY2FyIiwicDEiLCJjZHIiLCJwMiIsIkdyZWV0IiwiY29uc29sZSIsImxvZyIsInNheVJ1bGVzIiwicnVsZXMiLCJnZXROYW1lU2F5SGkiLCJuYW1lIiwicmVhZGxpbmVTeW5jIiwicXVlc3Rpb24iLCJhc2tRdWVzdGlvbiIsInNheVJlc3VsdCIsInJlc3VsdCIsImdldFVzZUFuc3dlciIsImdldFJhbmRJbnQiLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjaGVja1VzZUFuc3dBbmRTYXlSZXMiLCJjb3JyZWN0QW5zd2VyIiwidXNlQW5zd2VyIiwidXNlTmFtZSIsIlN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRU8sTUFBTUEsSUFBSSxHQUFHLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFXQyxDQUFELElBQU9BLENBQUMsQ0FBQ0YsQ0FBRCxFQUFJQyxDQUFKLENBQS9COzs7O0FBQ0EsTUFBTUUsR0FBRyxHQUFJQyxFQUFELElBQVFBLEVBQUUsQ0FBRUosQ0FBRCxJQUFPQSxDQUFSLENBQXRCOzs7O0FBQ0EsTUFBTUssR0FBRyxHQUFJQyxFQUFELElBQVFBLEVBQUUsQ0FBQyxDQUFDTixDQUFELEVBQUlDLENBQUosS0FBVUEsQ0FBWCxDQUF0Qjs7OztBQUVBLE1BQU1NLEtBQUssR0FBRyxNQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixDQUFwQjs7OztBQUNBLE1BQU1DLFFBQVEsR0FBSUMsS0FBRCxJQUFXSCxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsS0FBWixDQUE1Qjs7OztBQUNBLE1BQU1DLFlBQVksR0FBRyxNQUFNO0FBQ2hDLFFBQU1DLElBQUksR0FBR0Msc0JBQWFDLFFBQWIsQ0FBc0Isd0JBQXRCLENBQWI7O0FBQ0FQLEVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLE1BQUtJLElBQUssSUFBdkI7QUFDQSxTQUFPQSxJQUFQO0FBQ0QsQ0FKTTs7OztBQUtBLE1BQU1HLFdBQVcsR0FBSUQsUUFBRCxJQUFjUCxPQUFPLENBQUNDLEdBQVIsQ0FBYSxhQUFZTSxRQUFTLEVBQWxDLENBQWxDOzs7O0FBQ0EsTUFBTUUsU0FBUyxHQUFJQyxNQUFELElBQVlWLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUyxNQUFaLENBQTlCOzs7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHLE1BQU1MLHNCQUFhQyxRQUFiLENBQXNCLGVBQXRCLENBQTNCOzs7O0FBRUEsTUFBTUssVUFBVSxHQUFJQyxHQUFELElBQVNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JGLElBQUksQ0FBQ0MsS0FBTCxDQUFXRixHQUFYLENBQTNCLENBQTVCOzs7O0FBRUEsTUFBTUkscUJBQXFCLEdBQUcsQ0FBQ0MsYUFBRCxFQUFnQkMsU0FBaEIsRUFBMkJDLE9BQTNCLEtBQXVDO0FBQzFFLE1BQUlDLE1BQU0sQ0FBQ0gsYUFBRCxDQUFOLEtBQTBCQyxTQUE5QixFQUF5QztBQUN2Q25CLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVo7QUFDQSxXQUFPLElBQVA7QUFDRDs7QUFDRCxTQUFPRCxPQUFPLENBQUNDLEdBQVIsQ0FBYSxNQUFLa0IsU0FBVSw2Q0FBNENELGFBQWMseUJBQXdCRSxPQUFRLElBQXRILENBQVA7QUFDRCxDQU5NIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlYWRsaW5lU3luYyBmcm9tICdyZWFkbGluZS1zeW5jJztcblxuZXhwb3J0IGNvbnN0IGNvbnMgPSAoeCwgeSkgPT4gKGYpID0+IGYoeCwgeSk7XG5leHBvcnQgY29uc3QgY2FyID0gKHAxKSA9PiBwMSgoeCkgPT4geCk7XG5leHBvcnQgY29uc3QgY2RyID0gKHAyKSA9PiBwMigoeCwgeSkgPT4geSk7XG5cbmV4cG9ydCBjb25zdCBHcmVldCA9ICgpID0+IGNvbnNvbGUubG9nKCdXZWxjb21lIHRvIHRoZSBCcmFpbiBHYW1lcyEnKTtcbmV4cG9ydCBjb25zdCBzYXlSdWxlcyA9IChydWxlcykgPT4gY29uc29sZS5sb2cocnVsZXMpO1xuZXhwb3J0IGNvbnN0IGdldE5hbWVTYXlIaSA9ICgpID0+IHtcbiAgY29uc3QgbmFtZSA9IHJlYWRsaW5lU3luYy5xdWVzdGlvbignTWF5IEkgaGF2ZSB5b3VyIG5hbWU/ICcpO1xuICBjb25zb2xlLmxvZyhgSGkgJHtuYW1lfSAhYCk7XG4gIHJldHVybiBuYW1lO1xufTtcbmV4cG9ydCBjb25zdCBhc2tRdWVzdGlvbiA9IChxdWVzdGlvbikgPT4gY29uc29sZS5sb2coYFF1ZXN0aW9uOiAke3F1ZXN0aW9ufWApO1xuZXhwb3J0IGNvbnN0IHNheVJlc3VsdCA9IChyZXN1bHQpID0+IGNvbnNvbGUubG9nKHJlc3VsdCk7XG5leHBvcnQgY29uc3QgZ2V0VXNlQW5zd2VyID0gKCkgPT4gcmVhZGxpbmVTeW5jLnF1ZXN0aW9uKCdZb3VyIGFuc3dlcjogJyk7XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kSW50ID0gKG1heCkgPT4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcihtYXgpKTtcblxuZXhwb3J0IGNvbnN0IGNoZWNrVXNlQW5zd0FuZFNheVJlcyA9IChjb3JyZWN0QW5zd2VyLCB1c2VBbnN3ZXIsIHVzZU5hbWUpID0+IHtcbiAgaWYgKFN0cmluZyhjb3JyZWN0QW5zd2VyKSA9PT0gdXNlQW5zd2VyKSB7XG4gICAgY29uc29sZS5sb2coJ0NvcnJlY3QhJyk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGNvbnNvbGUubG9nKGBcXG4nJHt1c2VBbnN3ZXJ9JyBpcyB3cm9uZyBhbnN3ZXIgOyguIENvcnJlY3QgYW5zd2VyIHdhcyAnJHtjb3JyZWN0QW5zd2VyfScuIFxcbkxldCdzIHRyeSBhZ2FpbiwgJHt1c2VOYW1lfVxcbmApO1xufTtcbiJdfQ==