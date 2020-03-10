"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var _uniqueCodeCalc = require("../uniqueCodeCalc");

const gameBrainCalc = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('What is the result of the expression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const ResultArithOper = (0, _uniqueCodeCalc.getResArithOperat)((0, _index.getRandInt)(99), (0, _index.getRandInt)(99), (0, _uniqueCodeCalc.getRandomOperator)());
    (0, _index.askQuestion)((0, _index.cdr)(ResultArithOper));
    const checkResult = (0, _index.checkUseAnswAndSayRes)((0, _index.car)(ResultArithOper), (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameBrainCalc;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9jYWxjLWdhbWUuanMiXSwibmFtZXMiOlsiZ2FtZUJyYWluQ2FsYyIsIm5hbWUiLCJjb3V0blRvVGhyZWUiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJSZXN1bHRBcml0aE9wZXIiLCJjaGVja1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUtBOztBQUVBLE1BQU1BLGFBQWEsR0FBRyxNQUFNO0FBQzFCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLDBCQUFiO0FBQ0EsdUJBQVMsdUNBQVQ7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFULEtBQWU7QUFDbEMsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZixhQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJKLElBQUssRUFBckMsQ0FBUDtBQUNEOztBQUNELFVBQU1LLGVBQWUsR0FBRyx1Q0FBa0IsdUJBQVcsRUFBWCxDQUFsQixFQUFrQyx1QkFBVyxFQUFYLENBQWxDLEVBQWtELHdDQUFsRCxDQUF4QjtBQUNBLDRCQUFZLGdCQUFJQSxlQUFKLENBQVo7QUFDQSxVQUFNQyxXQUFXLEdBQUcsa0NBQXVCLGdCQUFJRCxlQUFKLENBQXZCLEVBQThDLDBCQUE5QyxFQUE4REwsSUFBOUQsQ0FBcEI7QUFDQSxXQUFPTSxXQUFXLEdBQUdMLFlBQVksQ0FBQ0MsS0FBSyxHQUFHLENBQVQsQ0FBZixHQUE2QixJQUEvQztBQUNELEdBUkQ7O0FBU0EsU0FBT0QsWUFBWSxFQUFuQjtBQUNELENBZkQ7O2VBZ0JlRixhIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBHcmVldCwgZ2V0VXNlQW5zd2VyLCBnZXRSYW5kSW50LCBjaGVja1VzZUFuc3dBbmRTYXlSZXMsIHNheVJ1bGVzLCBnZXROYW1lU2F5SGksIGFza1F1ZXN0aW9uLFxuICBjYXIsIGNkcixcbn0gZnJvbSAnLi4vaW5kZXgnO1xuXG5pbXBvcnQgeyBnZXRSZXNBcml0aE9wZXJhdCwgZ2V0UmFuZG9tT3BlcmF0b3IgfSBmcm9tICcuLi91bmlxdWVDb2RlQ2FsYyc7XG5cbmNvbnN0IGdhbWVCcmFpbkNhbGMgPSAoKSA9PiB7XG4gIEdyZWV0KCk7XG4gIGNvbnN0IG5hbWUgPSBnZXROYW1lU2F5SGkoKTtcbiAgc2F5UnVsZXMoJ1doYXQgaXMgdGhlIHJlc3VsdCBvZiB0aGUgZXhwcmVzc2lvbj8nKTtcblxuICBjb25zdCBjb3V0blRvVGhyZWUgPSAoY291bnQgPSAwKSA9PiB7XG4gICAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBSZXN1bHRBcml0aE9wZXIgPSBnZXRSZXNBcml0aE9wZXJhdChnZXRSYW5kSW50KDk5KSwgZ2V0UmFuZEludCg5OSksIGdldFJhbmRvbU9wZXJhdG9yKCkpO1xuICAgIGFza1F1ZXN0aW9uKGNkcihSZXN1bHRBcml0aE9wZXIpKTtcbiAgICBjb25zdCBjaGVja1Jlc3VsdCA9IGNoZWNrVXNlQW5zd0FuZFNheVJlcygoY2FyKFJlc3VsdEFyaXRoT3BlcikpLCBnZXRVc2VBbnN3ZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzdWx0ID8gY291dG5Ub1RocmVlKGNvdW50ICsgMSkgOiBudWxsO1xuICB9O1xuICByZXR1cm4gY291dG5Ub1RocmVlKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZUJyYWluQ2FsYztcbiJdfQ==