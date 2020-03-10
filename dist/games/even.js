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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9ldmVuLmpzIl0sIm5hbWVzIjpbImdhbWVQYXJpdHlDaGVjayIsIm5hbWUiLCJjb3V0blRvVGhyZWUiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJSYW5kSW50IiwiY2hlY2tSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFJQTs7OztBQUVBLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0FBQzVCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLDBCQUFiO0FBQ0EsdUJBQVMsNERBQVQ7O0FBRUEsUUFBTUMsWUFBWSxHQUFHLENBQUNDLEtBQUssR0FBRyxDQUFULEtBQWU7QUFDbEMsUUFBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDZixhQUFPQyxPQUFPLENBQUNDLEdBQVIsQ0FBYSxvQkFBbUJKLElBQUssRUFBckMsQ0FBUDtBQUNEOztBQUNELFVBQU1LLE9BQU8sR0FBRyx1QkFBVyxFQUFYLENBQWhCO0FBQ0EsNEJBQVlBLE9BQVo7QUFDQSxVQUFNQyxXQUFXLEdBQUcsa0NBQXNCLDZCQUFlRCxPQUFmLENBQXRCLEVBQStDLDBCQUEvQyxFQUErREwsSUFBL0QsQ0FBcEI7QUFDQSxXQUFPTSxXQUFXLEdBQUdMLFlBQVksQ0FBQ0MsS0FBSyxHQUFHLENBQVQsQ0FBZixHQUE2QixJQUEvQztBQUNELEdBUkQ7O0FBU0EsU0FBT0QsWUFBWSxFQUFuQjtBQUNELENBZkQ7O2VBZ0JlRixlIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBHcmVldCwgYXNrUXVlc3Rpb24sIGdldFVzZUFuc3dlciwgZ2V0UmFuZEludCwgY2hlY2tVc2VBbnN3QW5kU2F5UmVzLCBzYXlSdWxlcywgZ2V0TmFtZVNheUhpLFxufSBmcm9tICcuLi9pbmRleCc7XG5cbmltcG9ydCBjaGVja051bUlzRXZlbiBmcm9tICcuLi91bmlxdWVDb2RlRXZlbic7XG5cbmNvbnN0IGdhbWVQYXJpdHlDaGVjayA9ICgpID0+IHtcbiAgR3JlZXQoKTtcbiAgY29uc3QgbmFtZSA9IGdldE5hbWVTYXlIaSgpO1xuICBzYXlSdWxlcygnQW5zd2VyIFwieWVzXCIgaWYgdGhlIG51bWJlciBpcyBldmVuLCBvdGhlcndpc2UgYW5zd2VyIFwibm9cIi4nKTtcblxuICBjb25zdCBjb3V0blRvVGhyZWUgPSAoY291bnQgPSAwKSA9PiB7XG4gICAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCBSYW5kSW50ID0gZ2V0UmFuZEludCg5OSk7XG4gICAgYXNrUXVlc3Rpb24oUmFuZEludCk7XG4gICAgY29uc3QgY2hlY2tSZXN1bHQgPSBjaGVja1VzZUFuc3dBbmRTYXlSZXMoY2hlY2tOdW1Jc0V2ZW4oUmFuZEludCksIGdldFVzZUFuc3dlcigpLCBuYW1lKTtcbiAgICByZXR1cm4gY2hlY2tSZXN1bHQgPyBjb3V0blRvVGhyZWUoY291bnQgKyAxKSA6IG51bGw7XG4gIH07XG4gIHJldHVybiBjb3V0blRvVGhyZWUoKTtcbn07XG5leHBvcnQgZGVmYXVsdCBnYW1lUGFyaXR5Q2hlY2s7XG4iXX0=