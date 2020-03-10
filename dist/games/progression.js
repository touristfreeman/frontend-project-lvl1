"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

const gameBrainProgression = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('What number is missing in the progression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const stringNumSeries = (0, _index.getStringNumSeries)((0, _index.getNumberSeries)(), (0, _index.getRandInt)(8));
    (0, _index.askQuestion)((0, _index.car)(stringNumSeries));
    console.log(`hint ${(0, _index.cdr)(stringNumSeries)}`);
    const checkResult = (0, _index.checkUseAnswAndSayRes)((0, _index.cdr)(stringNumSeries), (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameBrainProgression;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcm9ncmVzc2lvbi5qcyJdLCJuYW1lcyI6WyJnYW1lQnJhaW5Qcm9ncmVzc2lvbiIsIm5hbWUiLCJjb3V0blRvVGhyZWUiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJzdHJpbmdOdW1TZXJpZXMiLCJjaGVja1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUtBLE1BQU1BLG9CQUFvQixHQUFHLE1BQU07QUFDakM7QUFDQSxRQUFNQyxJQUFJLEdBQUcsMEJBQWI7QUFDQSx1QkFBUyw0Q0FBVDs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQVQsS0FBZTtBQUNsQyxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkosSUFBSyxFQUFyQyxDQUFQO0FBQ0Q7O0FBRUQsVUFBTUssZUFBZSxHQUFHLCtCQUFtQiw2QkFBbkIsRUFBc0MsdUJBQVcsQ0FBWCxDQUF0QyxDQUF4QjtBQUNBLDRCQUFZLGdCQUFJQSxlQUFKLENBQVo7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBTyxnQkFBSUMsZUFBSixDQUFxQixFQUF6QztBQUNBLFVBQU1DLFdBQVcsR0FBRyxrQ0FBc0IsZ0JBQUlELGVBQUosQ0FBdEIsRUFBNEMsMEJBQTVDLEVBQTRETCxJQUE1RCxDQUFwQjtBQUNBLFdBQU9NLFdBQVcsR0FBR0wsWUFBWSxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUFmLEdBQTZCLElBQS9DO0FBQ0QsR0FWRDs7QUFXQSxTQUFPRCxZQUFZLEVBQW5CO0FBQ0QsQ0FqQkQ7O2VBa0JlRixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEdyZWV0LCBnZXROYW1lU2F5SGksIHNheVJ1bGVzLCBjYXIsIGNkciwgYXNrUXVlc3Rpb24sIGdldFVzZUFuc3dlcixcbiAgZ2V0UmFuZEludCwgY2hlY2tVc2VBbnN3QW5kU2F5UmVzLCBnZXROdW1iZXJTZXJpZXMsIGdldFN0cmluZ051bVNlcmllcyxcbn0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBnYW1lQnJhaW5Qcm9ncmVzc2lvbiA9ICgpID0+IHtcbiAgR3JlZXQoKTtcbiAgY29uc3QgbmFtZSA9IGdldE5hbWVTYXlIaSgpO1xuICBzYXlSdWxlcygnV2hhdCBudW1iZXIgaXMgbWlzc2luZyBpbiB0aGUgcHJvZ3Jlc3Npb24/Jyk7XG5cbiAgY29uc3QgY291dG5Ub1RocmVlID0gKGNvdW50ID0gMCkgPT4ge1xuICAgIGlmIChjb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdOdW1TZXJpZXMgPSBnZXRTdHJpbmdOdW1TZXJpZXMoZ2V0TnVtYmVyU2VyaWVzKCksIGdldFJhbmRJbnQoOCkpO1xuICAgIGFza1F1ZXN0aW9uKGNhcihzdHJpbmdOdW1TZXJpZXMpKTtcbiAgICBjb25zb2xlLmxvZyhgaGludCAke2NkcihzdHJpbmdOdW1TZXJpZXMpfWApO1xuICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gY2hlY2tVc2VBbnN3QW5kU2F5UmVzKGNkcihzdHJpbmdOdW1TZXJpZXMpLCBnZXRVc2VBbnN3ZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzdWx0ID8gY291dG5Ub1RocmVlKGNvdW50ICsgMSkgOiBudWxsO1xuICB9O1xuICByZXR1cm4gY291dG5Ub1RocmVlKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZUJyYWluUHJvZ3Jlc3Npb247XG4iXX0=