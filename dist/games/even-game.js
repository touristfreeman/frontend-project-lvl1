"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var _uniqueCodeEven = _interopRequireDefault(require("../uniqueCodeEven"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const gameParityCheck = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('Answer "yes" if the number is even, otherwise answer "no".');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const RandInt = (0, _index.getRandInt)(99);
    (0, _index.askQuestion)(RandInt);
    const checkResult = (0, _index.checkUseAnswAndSayRes)((0, _uniqueCodeEven.default)(RandInt), (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameParityCheck;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLWdhbWUuanMiXSwibmFtZXMiOlsiZ2FtZVBhcml0eUNoZWNrIiwibmFtZSIsImNvdXRuVG9UaHJlZSIsImNvdW50IiwiY29uc29sZSIsImxvZyIsIlJhbmRJbnQiLCJjaGVja1Jlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNBOztBQUlBOzs7O0FBRUEsTUFBTUEsZUFBZSxHQUFHLE1BQU07QUFDNUI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsMEJBQWI7QUFDQSx1QkFBUyw0REFBVDs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQVQsS0FBZTtBQUNsQyxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkosSUFBSyxFQUFyQyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTUssT0FBTyxHQUFHLHVCQUFXLEVBQVgsQ0FBaEI7QUFDQSw0QkFBWUEsT0FBWjtBQUNBLFVBQU1DLFdBQVcsR0FBRyxrQ0FBc0IsNkJBQWVELE9BQWYsQ0FBdEIsRUFBK0MsMEJBQS9DLEVBQStETCxJQUEvRCxDQUFwQjtBQUNBLFdBQU9NLFdBQVcsR0FBR0wsWUFBWSxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUFmLEdBQTZCLElBQS9DO0FBQ0QsR0FSRDs7QUFTQSxTQUFPRCxZQUFZLEVBQW5CO0FBQ0QsQ0FmRDs7ZUFnQmVGLGUiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEdyZWV0LCBhc2tRdWVzdGlvbiwgZ2V0VXNlQW5zd2VyLCBnZXRSYW5kSW50LCBjaGVja1VzZUFuc3dBbmRTYXlSZXMsIHNheVJ1bGVzLCBnZXROYW1lU2F5SGksXG59IGZyb20gJy4uL2luZGV4JztcblxuaW1wb3J0IGNoZWNrTnVtSXNFdmVuIGZyb20gJy4uL3VuaXF1ZUNvZGVFdmVuJztcblxuY29uc3QgZ2FtZVBhcml0eUNoZWNrID0gKCkgPT4ge1xuICBHcmVldCgpO1xuICBjb25zdCBuYW1lID0gZ2V0TmFtZVNheUhpKCk7XG4gIHNheVJ1bGVzKCdBbnN3ZXIgXCJ5ZXNcIiBpZiB0aGUgbnVtYmVyIGlzIGV2ZW4sIG90aGVyd2lzZSBhbnN3ZXIgXCJub1wiLicpO1xuXG4gIGNvbnN0IGNvdXRuVG9UaHJlZSA9IChjb3VudCA9IDApID0+IHtcbiAgICBpZiAoY291bnQgPT09IDMpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhgQ29uZ3JhdHVsYXRpb25zLCAke25hbWV9YCk7XG4gICAgfVxuICAgIGNvbnN0IFJhbmRJbnQgPSBnZXRSYW5kSW50KDk5KTtcbiAgICBhc2tRdWVzdGlvbihSYW5kSW50KTtcbiAgICBjb25zdCBjaGVja1Jlc3VsdCA9IGNoZWNrVXNlQW5zd0FuZFNheVJlcyhjaGVja051bUlzRXZlbihSYW5kSW50KSwgZ2V0VXNlQW5zd2VyKCksIG5hbWUpO1xuICAgIHJldHVybiBjaGVja1Jlc3VsdCA/IGNvdXRuVG9UaHJlZShjb3VudCArIDEpIDogbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGNvdXRuVG9UaHJlZSgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVQYXJpdHlDaGVjaztcbiJdfQ==