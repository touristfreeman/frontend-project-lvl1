"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var _uniqueCodeGcd = require("../uniqueCodeGcd");

const gameGcd = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('Find the greatest common divisor of given numbers.');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const twoRandIn = (0, _index.cons)((0, _index.getRandInt)(999), (0, _index.getRandInt)(999));
    const corrAnsw = (0, _uniqueCodeGcd.getCommonFact)((0, _uniqueCodeGcd.getSimpleFact)((0, _index.car)(twoRandIn)), (0, _uniqueCodeGcd.getSimpleFact)((0, _index.cdr)(twoRandIn)));
    console.log(`hint ${corrAnsw}`);
    (0, _index.askQuestion)(`${(0, _index.car)(twoRandIn)} ${(0, _index.cdr)(twoRandIn)}`);
    const checkResult = (0, _index.checkUseAnswAndSayRes)(corrAnsw, (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameGcd;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QtZ2FtZS5qcyJdLCJuYW1lcyI6WyJnYW1lR2NkIiwibmFtZSIsImNvdXRuVG9UaHJlZSIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInR3b1JhbmRJbiIsImNvcnJBbnN3IiwiY2hlY2tSZXN1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7QUFLQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUcsTUFBTTtBQUNwQjtBQUNBLFFBQU1DLElBQUksR0FBRywwQkFBYjtBQUNBLHVCQUFTLG9EQUFUOztBQUVBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxLQUFlO0FBQ2xDLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsYUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CSixJQUFLLEVBQXJDLENBQVA7QUFDRDs7QUFDRCxVQUFNSyxTQUFTLEdBQUcsaUJBQUssdUJBQVcsR0FBWCxDQUFMLEVBQXNCLHVCQUFXLEdBQVgsQ0FBdEIsQ0FBbEI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsa0NBQWMsa0NBQWMsZ0JBQUlELFNBQUosQ0FBZCxDQUFkLEVBQTZDLGtDQUFjLGdCQUFJQSxTQUFKLENBQWQsQ0FBN0MsQ0FBakI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQWEsUUFBT0UsUUFBUyxFQUE3QjtBQUNBLDRCQUFhLEdBQUUsZ0JBQUlELFNBQUosQ0FBZSxJQUFHLGdCQUFJQSxTQUFKLENBQWUsRUFBaEQ7QUFDQSxVQUFNRSxXQUFXLEdBQUcsa0NBQXNCRCxRQUF0QixFQUFnQywwQkFBaEMsRUFBZ0ROLElBQWhELENBQXBCO0FBQ0EsV0FBT08sV0FBVyxHQUFHTixZQUFZLENBQUNDLEtBQUssR0FBRyxDQUFULENBQWYsR0FBNkIsSUFBL0M7QUFDRCxHQVZEOztBQVdBLFNBQU9ELFlBQVksRUFBbkI7QUFDRCxDQWpCRDs7ZUFrQmVGLE8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7XG4gIEdyZWV0LCBnZXROYW1lU2F5SGksIHNheVJ1bGVzLCBjb25zLCBjYXIsIGNkciwgYXNrUXVlc3Rpb24sIGdldFVzZUFuc3dlcixcbiAgZ2V0UmFuZEludCwgY2hlY2tVc2VBbnN3QW5kU2F5UmVzLFxufSBmcm9tICcuLi9pbmRleCc7XG5cbmltcG9ydCB7IGdldFNpbXBsZUZhY3QsIGdldENvbW1vbkZhY3QgfSBmcm9tICcuLi91bmlxdWVDb2RlR2NkJztcblxuY29uc3QgZ2FtZUdjZCA9ICgpID0+IHtcbiAgR3JlZXQoKTtcbiAgY29uc3QgbmFtZSA9IGdldE5hbWVTYXlIaSgpO1xuICBzYXlSdWxlcygnRmluZCB0aGUgZ3JlYXRlc3QgY29tbW9uIGRpdmlzb3Igb2YgZ2l2ZW4gbnVtYmVycy4nKTtcblxuICBjb25zdCBjb3V0blRvVGhyZWUgPSAoY291bnQgPSAwKSA9PiB7XG4gICAgaWYgKGNvdW50ID09PSAzKSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coYENvbmdyYXR1bGF0aW9ucywgJHtuYW1lfWApO1xuICAgIH1cbiAgICBjb25zdCB0d29SYW5kSW4gPSBjb25zKGdldFJhbmRJbnQoOTk5KSwgZ2V0UmFuZEludCg5OTkpKTtcbiAgICBjb25zdCBjb3JyQW5zdyA9IGdldENvbW1vbkZhY3QoZ2V0U2ltcGxlRmFjdChjYXIodHdvUmFuZEluKSksIGdldFNpbXBsZUZhY3QoY2RyKHR3b1JhbmRJbikpKTtcbiAgICBjb25zb2xlLmxvZyhgaGludCAke2NvcnJBbnN3fWApO1xuICAgIGFza1F1ZXN0aW9uKGAke2Nhcih0d29SYW5kSW4pfSAke2Nkcih0d29SYW5kSW4pfWApO1xuICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gY2hlY2tVc2VBbnN3QW5kU2F5UmVzKGNvcnJBbnN3LCBnZXRVc2VBbnN3ZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzdWx0ID8gY291dG5Ub1RocmVlKGNvdW50ICsgMSkgOiBudWxsO1xuICB9O1xuICByZXR1cm4gY291dG5Ub1RocmVlKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZUdjZDtcbiJdfQ==