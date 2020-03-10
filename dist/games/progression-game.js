"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

var _uniqueCodeProgression = require("../uniqueCodeProgression");

const gameBrainProgression = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('What number is missing in the progression?');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const stringNumSeries = (0, _uniqueCodeProgression.getStringNumSeries)((0, _uniqueCodeProgression.getNumberSeries)(), (0, _index.getRandInt)(8));
    (0, _index.askQuestion)((0, _index.car)(stringNumSeries));
    console.log(`hint ${(0, _index.cdr)(stringNumSeries)}`);
    const checkResult = (0, _index.checkUseAnswAndSayRes)((0, _index.cdr)(stringNumSeries), (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameBrainProgression;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9wcm9ncmVzc2lvbi1nYW1lLmpzIl0sIm5hbWVzIjpbImdhbWVCcmFpblByb2dyZXNzaW9uIiwibmFtZSIsImNvdXRuVG9UaHJlZSIsImNvdW50IiwiY29uc29sZSIsImxvZyIsInN0cmluZ051bVNlcmllcyIsImNoZWNrUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBS0E7O0FBRUEsTUFBTUEsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQztBQUNBLFFBQU1DLElBQUksR0FBRywwQkFBYjtBQUNBLHVCQUFTLDRDQUFUOztBQUVBLFFBQU1DLFlBQVksR0FBRyxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxLQUFlO0FBQ2xDLFFBQUlBLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2YsYUFBT0MsT0FBTyxDQUFDQyxHQUFSLENBQWEsb0JBQW1CSixJQUFLLEVBQXJDLENBQVA7QUFDRDs7QUFFRCxVQUFNSyxlQUFlLEdBQUcsK0NBQW1CLDZDQUFuQixFQUFzQyx1QkFBVyxDQUFYLENBQXRDLENBQXhCO0FBQ0EsNEJBQVksZ0JBQUlBLGVBQUosQ0FBWjtBQUNBRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBYSxRQUFPLGdCQUFJQyxlQUFKLENBQXFCLEVBQXpDO0FBQ0EsVUFBTUMsV0FBVyxHQUFHLGtDQUFzQixnQkFBSUQsZUFBSixDQUF0QixFQUE0QywwQkFBNUMsRUFBNERMLElBQTVELENBQXBCO0FBQ0EsV0FBT00sV0FBVyxHQUFHTCxZQUFZLENBQUNDLEtBQUssR0FBRyxDQUFULENBQWYsR0FBNkIsSUFBL0M7QUFDRCxHQVZEOztBQVdBLFNBQU9ELFlBQVksRUFBbkI7QUFDRCxDQWpCRDs7ZUFrQmVGLG9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgR3JlZXQsIGdldE5hbWVTYXlIaSwgc2F5UnVsZXMsIGNhciwgY2RyLCBhc2tRdWVzdGlvbiwgZ2V0VXNlQW5zd2VyLFxuICBnZXRSYW5kSW50LCBjaGVja1VzZUFuc3dBbmRTYXlSZXMsXG59IGZyb20gJy4uL2luZGV4JztcblxuaW1wb3J0IHsgZ2V0TnVtYmVyU2VyaWVzLCBnZXRTdHJpbmdOdW1TZXJpZXMgfSBmcm9tICcuLi91bmlxdWVDb2RlUHJvZ3Jlc3Npb24nO1xuXG5jb25zdCBnYW1lQnJhaW5Qcm9ncmVzc2lvbiA9ICgpID0+IHtcbiAgR3JlZXQoKTtcbiAgY29uc3QgbmFtZSA9IGdldE5hbWVTYXlIaSgpO1xuICBzYXlSdWxlcygnV2hhdCBudW1iZXIgaXMgbWlzc2luZyBpbiB0aGUgcHJvZ3Jlc3Npb24/Jyk7XG5cbiAgY29uc3QgY291dG5Ub1RocmVlID0gKGNvdW50ID0gMCkgPT4ge1xuICAgIGlmIChjb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdHJpbmdOdW1TZXJpZXMgPSBnZXRTdHJpbmdOdW1TZXJpZXMoZ2V0TnVtYmVyU2VyaWVzKCksIGdldFJhbmRJbnQoOCkpO1xuICAgIGFza1F1ZXN0aW9uKGNhcihzdHJpbmdOdW1TZXJpZXMpKTtcbiAgICBjb25zb2xlLmxvZyhgaGludCAke2NkcihzdHJpbmdOdW1TZXJpZXMpfWApO1xuICAgIGNvbnN0IGNoZWNrUmVzdWx0ID0gY2hlY2tVc2VBbnN3QW5kU2F5UmVzKGNkcihzdHJpbmdOdW1TZXJpZXMpLCBnZXRVc2VBbnN3ZXIoKSwgbmFtZSk7XG4gICAgcmV0dXJuIGNoZWNrUmVzdWx0ID8gY291dG5Ub1RocmVlKGNvdW50ICsgMSkgOiBudWxsO1xuICB9O1xuICByZXR1cm4gY291dG5Ub1RocmVlKCk7XG59O1xuZXhwb3J0IGRlZmF1bHQgZ2FtZUJyYWluUHJvZ3Jlc3Npb247XG4iXX0=