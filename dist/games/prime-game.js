"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var _uniqueCodePrime = _interopRequireDefault(require("../uniqueCodePrime"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gameBrainPrime = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('Answer "yes" if given number is prime. Otherwise answer "no".');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const randInt = (0, _index.getRandInt)(9) + (0, _index.getRandInt)(9);
    (0, _index.askQuestion)(randInt);
    const resCheckPrimtIn = (0, _uniqueCodePrime.default)(randInt);
    const checkResult = (0, _index.checkUseAnswAndSayRes)(resCheckPrimtIn, (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameBrainPrime;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcmltZS1nYW1lLmpzIl0sIm5hbWVzIjpbImdhbWVCcmFpblByaW1lIiwibmFtZSIsImNvdXRuVG9UaHJlZSIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInJhbmRJbnQiLCJyZXNDaGVja1ByaW10SW4iLCJjaGVja1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUtBOzs7O0FBRUEsTUFBTUEsY0FBYyxHQUFHLE1BQU07QUFDM0I7QUFDQSxRQUFNQyxJQUFJLEdBQUcsMEJBQWI7QUFDQSx1QkFBUywrREFBVDs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQVQsS0FBZTtBQUNsQyxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkosSUFBSyxFQUFyQyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTUssT0FBTyxHQUFHLHVCQUFXLENBQVgsSUFBZ0IsdUJBQVcsQ0FBWCxDQUFoQztBQUNBLDRCQUFZQSxPQUFaO0FBQ0EsVUFBTUMsZUFBZSxHQUFHLDhCQUFhRCxPQUFiLENBQXhCO0FBQ0EsVUFBTUUsV0FBVyxHQUFHLGtDQUFzQkQsZUFBdEIsRUFBdUMsMEJBQXZDLEVBQXVETixJQUF2RCxDQUFwQjtBQUNBLFdBQU9PLFdBQVcsR0FBR04sWUFBWSxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUFmLEdBQTZCLElBQS9DO0FBQ0QsR0FURDs7QUFVQSxTQUFPRCxZQUFZLEVBQW5CO0FBQ0QsQ0FoQkQ7O2VBaUJlRixjIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBHcmVldCwgZ2V0TmFtZVNheUhpLCBzYXlSdWxlcywgYXNrUXVlc3Rpb24sIGdldFVzZUFuc3dlcixcbiAgZ2V0UmFuZEludCwgY2hlY2tVc2VBbnN3QW5kU2F5UmVzLFxufSBmcm9tICcuLi9pbmRleCc7XG5cbmltcG9ydCBjaGVja1ByaW1JbnQgZnJvbSAnLi4vdW5pcXVlQ29kZVByaW1lJztcblxuY29uc3QgZ2FtZUJyYWluUHJpbWUgPSAoKSA9PiB7XG4gIEdyZWV0KCk7XG4gIGNvbnN0IG5hbWUgPSBnZXROYW1lU2F5SGkoKTtcbiAgc2F5UnVsZXMoJ0Fuc3dlciBcInllc1wiIGlmIGdpdmVuIG51bWJlciBpcyBwcmltZS4gT3RoZXJ3aXNlIGFuc3dlciBcIm5vXCIuJyk7XG5cbiAgY29uc3QgY291dG5Ub1RocmVlID0gKGNvdW50ID0gMCkgPT4ge1xuICAgIGlmIChjb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbiAgICB9XG4gICAgY29uc3QgcmFuZEludCA9IGdldFJhbmRJbnQoOSkgKyBnZXRSYW5kSW50KDkpO1xuICAgIGFza1F1ZXN0aW9uKHJhbmRJbnQpO1xuICAgIGNvbnN0IHJlc0NoZWNrUHJpbXRJbiA9IGNoZWNrUHJpbUludChyYW5kSW50KTtcbiAgICBjb25zdCBjaGVja1Jlc3VsdCA9IGNoZWNrVXNlQW5zd0FuZFNheVJlcyhyZXNDaGVja1ByaW10SW4sIGdldFVzZUFuc3dlcigpLCBuYW1lKTtcbiAgICByZXR1cm4gY2hlY2tSZXN1bHQgPyBjb3V0blRvVGhyZWUoY291bnQgKyAxKSA6IG51bGw7XG4gIH07XG4gIHJldHVybiBjb3V0blRvVGhyZWUoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBnYW1lQnJhaW5QcmltZTtcbiJdfQ==