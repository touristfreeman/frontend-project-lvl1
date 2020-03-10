"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

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
    const resCheckPrimtIn = (0, _index.checkPrimInt)(randInt);
    const checkResult = (0, _index.checkUseAnswAndSayRes)(resCheckPrimtIn, (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameBrainPrime;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcmltZS5qcyJdLCJuYW1lcyI6WyJnYW1lQnJhaW5QcmltZSIsIm5hbWUiLCJjb3V0blRvVGhyZWUiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJyYW5kSW50IiwicmVzQ2hlY2tQcmltdEluIiwiY2hlY2tSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFNQSxNQUFNQSxjQUFjLEdBQUcsTUFBTTtBQUMzQjtBQUNBLFFBQU1DLElBQUksR0FBRywwQkFBYjtBQUNBLHVCQUFTLCtEQUFUOztBQUVBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxLQUFlO0FBQ2xDLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsYUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CSixJQUFLLEVBQXJDLENBQVA7QUFDRDs7QUFDRCxVQUFNSyxPQUFPLEdBQUcsdUJBQVcsQ0FBWCxJQUFnQix1QkFBVyxDQUFYLENBQWhDO0FBQ0EsNEJBQVlBLE9BQVo7QUFDQSxVQUFNQyxlQUFlLEdBQUcseUJBQWFELE9BQWIsQ0FBeEI7QUFDQSxVQUFNRSxXQUFXLEdBQUcsa0NBQXNCRCxlQUF0QixFQUF1QywwQkFBdkMsRUFBdUROLElBQXZELENBQXBCO0FBQ0EsV0FBT08sV0FBVyxHQUFHTixZQUFZLENBQUNDLEtBQUssR0FBRyxDQUFULENBQWYsR0FBNkIsSUFBL0M7QUFDRCxHQVREOztBQVVBLFNBQU9ELFlBQVksRUFBbkI7QUFDRCxDQWhCRDs7ZUFpQmVGLGMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEdyZWV0LCBnZXROYW1lU2F5SGksIHNheVJ1bGVzLCBhc2tRdWVzdGlvbiwgZ2V0VXNlQW5zd2VyLFxuICBnZXRSYW5kSW50LCBjaGVja1ByaW1JbnQsIGNoZWNrVXNlQW5zd0FuZFNheVJlcyxcbn0gZnJvbSAnLi4vaW5kZXgnO1xuXG5cbmNvbnN0IGdhbWVCcmFpblByaW1lID0gKCkgPT4ge1xuICBHcmVldCgpO1xuICBjb25zdCBuYW1lID0gZ2V0TmFtZVNheUhpKCk7XG4gIHNheVJ1bGVzKCdBbnN3ZXIgXCJ5ZXNcIiBpZiBnaXZlbiBudW1iZXIgaXMgcHJpbWUuIE90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLicpO1xuXG4gIGNvbnN0IGNvdXRuVG9UaHJlZSA9IChjb3VudCA9IDApID0+IHtcbiAgICBpZiAoY291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9YCk7XG4gICAgfVxuICAgIGNvbnN0IHJhbmRJbnQgPSBnZXRSYW5kSW50KDkpICsgZ2V0UmFuZEludCg5KTtcbiAgICBhc2tRdWVzdGlvbihyYW5kSW50KTtcbiAgICBjb25zdCByZXNDaGVja1ByaW10SW4gPSBjaGVja1ByaW1JbnQocmFuZEludCk7XG4gICAgY29uc3QgY2hlY2tSZXN1bHQgPSBjaGVja1VzZUFuc3dBbmRTYXlSZXMocmVzQ2hlY2tQcmltdEluLCBnZXRVc2VBbnN3ZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzdWx0ID8gY291dG5Ub1RocmVlKGNvdW50ICsgMSkgOiBudWxsO1xuICB9O1xuICByZXR1cm4gY291dG5Ub1RocmVlKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZUJyYWluUHJpbWU7XG4iXX0=