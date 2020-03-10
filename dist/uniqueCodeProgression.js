"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getStringNumSeries = exports.getNumberSeries = void 0;

var _index = require("./index");

const getNumberSeries = () => {
  const initialNum = (0, _index.getRandInt)(9);
  const difference = (0, _index.getRandInt)(9);

  const getNumArray = (arr = [initialNum], count = 0) => {
    const array = arr;

    if (count >= 9) {
      return array; // или даже возвращаем пару, если понадобится или пару вернем из внешенй функции
    }

    array.push(array[count] + difference);
    return getNumArray(array, count + 1);
  };

  return getNumArray();
};

exports.getNumberSeries = getNumberSeries;

const getStringNumSeries = (numberSeries, colon, stirnForUse = '', count = 0) => {
  if (count > 9) {
    return (0, _index.cons)(stirnForUse, numberSeries[colon]);
  }

  if (colon === count) {
    const string = `${stirnForUse} ..`;
    return getStringNumSeries(numberSeries, colon, string, count + 1);
  }

  const string = `${stirnForUse} ${numberSeries[count]}`;
  return getStringNumSeries(numberSeries, colon, string, count + 1);
};

exports.getStringNumSeries = getStringNumSeries;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlxdWVDb2RlUHJvZ3Jlc3Npb24uanMiXSwibmFtZXMiOlsiZ2V0TnVtYmVyU2VyaWVzIiwiaW5pdGlhbE51bSIsImRpZmZlcmVuY2UiLCJnZXROdW1BcnJheSIsImFyciIsImNvdW50IiwiYXJyYXkiLCJwdXNoIiwiZ2V0U3RyaW5nTnVtU2VyaWVzIiwibnVtYmVyU2VyaWVzIiwiY29sb24iLCJzdGlybkZvclVzZSIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVPLE1BQU1BLGVBQWUsR0FBRyxNQUFNO0FBQ25DLFFBQU1DLFVBQVUsR0FBRyx1QkFBVyxDQUFYLENBQW5CO0FBQ0EsUUFBTUMsVUFBVSxHQUFHLHVCQUFXLENBQVgsQ0FBbkI7O0FBRUEsUUFBTUMsV0FBVyxHQUFHLENBQUNDLEdBQUcsR0FBRyxDQUFDSCxVQUFELENBQVAsRUFBcUJJLEtBQUssR0FBRyxDQUE3QixLQUFtQztBQUNyRCxVQUFNQyxLQUFLLEdBQUdGLEdBQWQ7O0FBQ0EsUUFBSUMsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDZCxhQUFPQyxLQUFQLENBRGMsQ0FDQTtBQUNmOztBQUNEQSxJQUFBQSxLQUFLLENBQUNDLElBQU4sQ0FBV0QsS0FBSyxDQUFDRCxLQUFELENBQUwsR0FBZUgsVUFBMUI7QUFDQSxXQUFPQyxXQUFXLENBQUNHLEtBQUQsRUFBUUQsS0FBSyxHQUFHLENBQWhCLENBQWxCO0FBQ0QsR0FQRDs7QUFRQSxTQUFPRixXQUFXLEVBQWxCO0FBQ0QsQ0FiTTs7OztBQWVBLE1BQU1LLGtCQUFrQixHQUFHLENBQUNDLFlBQUQsRUFBZUMsS0FBZixFQUFzQkMsV0FBVyxHQUFHLEVBQXBDLEVBQXdDTixLQUFLLEdBQUcsQ0FBaEQsS0FBc0Q7QUFDdEYsTUFBSUEsS0FBSyxHQUFHLENBQVosRUFBZTtBQUNiLFdBQU8saUJBQUtNLFdBQUwsRUFBa0JGLFlBQVksQ0FBQ0MsS0FBRCxDQUE5QixDQUFQO0FBQ0Q7O0FBRUQsTUFBSUEsS0FBSyxLQUFLTCxLQUFkLEVBQXFCO0FBQ25CLFVBQU1PLE1BQU0sR0FBSSxHQUFFRCxXQUFZLEtBQTlCO0FBQ0EsV0FBT0gsa0JBQWtCLENBQUNDLFlBQUQsRUFBZUMsS0FBZixFQUFzQkUsTUFBdEIsRUFBOEJQLEtBQUssR0FBRyxDQUF0QyxDQUF6QjtBQUNEOztBQUVELFFBQU1PLE1BQU0sR0FBSSxHQUFFRCxXQUFZLElBQUdGLFlBQVksQ0FBQ0osS0FBRCxDQUFRLEVBQXJEO0FBQ0EsU0FBT0csa0JBQWtCLENBQUNDLFlBQUQsRUFBZUMsS0FBZixFQUFzQkUsTUFBdEIsRUFBOEJQLEtBQUssR0FBRyxDQUF0QyxDQUF6QjtBQUNELENBWk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25zLCBnZXRSYW5kSW50IH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjb25zdCBnZXROdW1iZXJTZXJpZXMgPSAoKSA9PiB7XG4gIGNvbnN0IGluaXRpYWxOdW0gPSBnZXRSYW5kSW50KDkpO1xuICBjb25zdCBkaWZmZXJlbmNlID0gZ2V0UmFuZEludCg5KTtcblxuICBjb25zdCBnZXROdW1BcnJheSA9IChhcnIgPSBbaW5pdGlhbE51bV0sIGNvdW50ID0gMCkgPT4ge1xuICAgIGNvbnN0IGFycmF5ID0gYXJyO1xuICAgIGlmIChjb3VudCA+PSA5KSB7XG4gICAgICByZXR1cm4gYXJyYXk7IC8vINC40LvQuCDQtNCw0LbQtSDQstC+0LfQstGA0LDRidCw0LXQvCDQv9Cw0YDRgywg0LXRgdC70Lgg0L/QvtC90LDQtNC+0LHQuNGC0YHRjyDQuNC70Lgg0L/QsNGA0YMg0LLQtdGA0L3QtdC8INC40Lcg0LLQvdC10YjQtdC90Lkg0YTRg9C90LrRhtC40LhcbiAgICB9XG4gICAgYXJyYXkucHVzaChhcnJheVtjb3VudF0gKyBkaWZmZXJlbmNlKTtcbiAgICByZXR1cm4gZ2V0TnVtQXJyYXkoYXJyYXksIGNvdW50ICsgMSk7XG4gIH07XG4gIHJldHVybiBnZXROdW1BcnJheSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFN0cmluZ051bVNlcmllcyA9IChudW1iZXJTZXJpZXMsIGNvbG9uLCBzdGlybkZvclVzZSA9ICcnLCBjb3VudCA9IDApID0+IHtcbiAgaWYgKGNvdW50ID4gOSkge1xuICAgIHJldHVybiBjb25zKHN0aXJuRm9yVXNlLCBudW1iZXJTZXJpZXNbY29sb25dKTtcbiAgfVxuXG4gIGlmIChjb2xvbiA9PT0gY291bnQpIHtcbiAgICBjb25zdCBzdHJpbmcgPSBgJHtzdGlybkZvclVzZX0gLi5gO1xuICAgIHJldHVybiBnZXRTdHJpbmdOdW1TZXJpZXMobnVtYmVyU2VyaWVzLCBjb2xvbiwgc3RyaW5nLCBjb3VudCArIDEpO1xuICB9XG5cbiAgY29uc3Qgc3RyaW5nID0gYCR7c3Rpcm5Gb3JVc2V9ICR7bnVtYmVyU2VyaWVzW2NvdW50XX1gO1xuICByZXR1cm4gZ2V0U3RyaW5nTnVtU2VyaWVzKG51bWJlclNlcmllcywgY29sb24sIHN0cmluZywgY291bnQgKyAxKTtcbn07XG4iXX0=