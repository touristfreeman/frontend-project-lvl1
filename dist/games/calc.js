"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

const gameBrainCalc = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('What is the result of the expression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const ResultArithOper = (0, _index.getResArithOperat)((0, _index.getRandInt)(99), (0, _index.getRandInt)(99), (0, _index.getRandomOperator)());
    (0, _index.askQuestion)((0, _index.cdr)(ResultArithOper));
    const checkResult = (0, _index.checkUseAnswAndSayRes)((0, _index.car)(ResultArithOper), (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameBrainCalc;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLmpzIl0sIm5hbWVzIjpbImdhbWVCcmFpbkNhbGMiLCJuYW1lIiwiY291dG5Ub1RocmVlIiwiY291bnQiLCJjb25zb2xlIiwibG9nIiwiUmVzdWx0QXJpdGhPcGVyIiwiY2hlY2tSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFNQSxNQUFNQSxhQUFhLEdBQUcsTUFBTTtBQUMxQjtBQUNBLFFBQU1DLElBQUksR0FBRywwQkFBYjtBQUNBLHVCQUFTLHVDQUFUOztBQUVBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxLQUFlO0FBQ2xDLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsYUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CSixJQUFLLEVBQXJDLENBQVA7QUFDRDs7QUFDRCxVQUFNSyxlQUFlLEdBQUcsOEJBQWtCLHVCQUFXLEVBQVgsQ0FBbEIsRUFBa0MsdUJBQVcsRUFBWCxDQUFsQyxFQUFrRCwrQkFBbEQsQ0FBeEI7QUFDQSw0QkFBWSxnQkFBSUEsZUFBSixDQUFaO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLGtDQUF1QixnQkFBSUQsZUFBSixDQUF2QixFQUE4QywwQkFBOUMsRUFBOERMLElBQTlELENBQXBCO0FBQ0EsV0FBT00sV0FBVyxHQUFHTCxZQUFZLENBQUNDLEtBQUssR0FBRyxDQUFULENBQWYsR0FBNkIsSUFBL0M7QUFDRCxHQVJEOztBQVNBLFNBQU9ELFlBQVksRUFBbkI7QUFDRCxDQWZEOztlQWdCZUYsYSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtcbiAgR3JlZXQsIGdldFVzZUFuc3dlcixcbiAgZ2V0UmFuZEludCwgY2hlY2tVc2VBbnN3QW5kU2F5UmVzLCBnZXRSZXNBcml0aE9wZXJhdCwgZ2V0UmFuZG9tT3BlcmF0b3IsXG4gIHNheVJ1bGVzLCBnZXROYW1lU2F5SGksIGFza1F1ZXN0aW9uLCBjYXIsIGNkcixcbn0gZnJvbSAnLi4vaW5kZXgnO1xuXG5jb25zdCBnYW1lQnJhaW5DYWxjID0gKCkgPT4ge1xuICBHcmVldCgpO1xuICBjb25zdCBuYW1lID0gZ2V0TmFtZVNheUhpKCk7XG4gIHNheVJ1bGVzKCdXaGF0IGlzIHRoZSByZXN1bHQgb2YgdGhlIGV4cHJlc3Npb24/Jyk7XG5cbiAgY29uc3QgY291dG5Ub1RocmVlID0gKGNvdW50ID0gMCkgPT4ge1xuICAgIGlmIChjb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbiAgICB9XG4gICAgY29uc3QgUmVzdWx0QXJpdGhPcGVyID0gZ2V0UmVzQXJpdGhPcGVyYXQoZ2V0UmFuZEludCg5OSksIGdldFJhbmRJbnQoOTkpLCBnZXRSYW5kb21PcGVyYXRvcigpKTtcbiAgICBhc2tRdWVzdGlvbihjZHIoUmVzdWx0QXJpdGhPcGVyKSk7XG4gICAgY29uc3QgY2hlY2tSZXN1bHQgPSBjaGVja1VzZUFuc3dBbmRTYXlSZXMoKGNhcihSZXN1bHRBcml0aE9wZXIpKSwgZ2V0VXNlQW5zd2VyKCksIG5hbWUpO1xuICAgIHJldHVybiBjaGVja1Jlc3VsdCA/IGNvdXRuVG9UaHJlZShjb3VudCArIDEpIDogbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGNvdXRuVG9UaHJlZSgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVCcmFpbkNhbGM7XG4iXX0=