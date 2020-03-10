"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRandomOperator = exports.getResArithOperat = void 0;

var _index = require("./index");

const getResArithOperat = (num1, num2, operator) => {
  let operationResult = num1 * num2;

  if (operator === '-') {
    operationResult = num1 - num2;
  } else if (operator === '+') {
    operationResult = num1 + num2;
  } else {
    operationResult = num1 * num2;
  }

  const QuestionToUse = `${num1} ${operator} ${num2}`;
  return (0, _index.cons)(operationResult, QuestionToUse);
};

exports.getResArithOperat = getResArithOperat;

const getRandomOperator = () => {
  const operators = ['-', '+', '*'];
  return operators[(0, _index.getRandInt)(2)];
};

exports.getRandomOperator = getRandomOperator;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlxdWVDb2RlQ2FsYy5qcyJdLCJuYW1lcyI6WyJnZXRSZXNBcml0aE9wZXJhdCIsIm51bTEiLCJudW0yIiwib3BlcmF0b3IiLCJvcGVyYXRpb25SZXN1bHQiLCJRdWVzdGlvblRvVXNlIiwiZ2V0UmFuZG9tT3BlcmF0b3IiLCJvcGVyYXRvcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFTyxNQUFNQSxpQkFBaUIsR0FBRyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBYUMsUUFBYixLQUEwQjtBQUN6RCxNQUFJQyxlQUFlLEdBQUdILElBQUksR0FBR0MsSUFBN0I7O0FBRUEsTUFBSUMsUUFBUSxLQUFLLEdBQWpCLEVBQXNCO0FBQ3BCQyxJQUFBQSxlQUFlLEdBQUdILElBQUksR0FBR0MsSUFBekI7QUFDRCxHQUZELE1BRU8sSUFBSUMsUUFBUSxLQUFLLEdBQWpCLEVBQXNCO0FBQzNCQyxJQUFBQSxlQUFlLEdBQUdILElBQUksR0FBR0MsSUFBekI7QUFDRCxHQUZNLE1BRUE7QUFDTEUsSUFBQUEsZUFBZSxHQUFHSCxJQUFJLEdBQUdDLElBQXpCO0FBQ0Q7O0FBQ0QsUUFBTUcsYUFBYSxHQUFJLEdBQUVKLElBQUssSUFBR0UsUUFBUyxJQUFHRCxJQUFLLEVBQWxEO0FBQ0EsU0FBTyxpQkFBS0UsZUFBTCxFQUFzQkMsYUFBdEIsQ0FBUDtBQUNELENBWk07Ozs7QUFjQSxNQUFNQyxpQkFBaUIsR0FBRyxNQUFNO0FBQ3JDLFFBQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFsQjtBQUNBLFNBQU9BLFNBQVMsQ0FBQyx1QkFBVyxDQUFYLENBQUQsQ0FBaEI7QUFDRCxDQUhNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0UmFuZEludCwgY29ucyB9IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY29uc3QgZ2V0UmVzQXJpdGhPcGVyYXQgPSAobnVtMSwgbnVtMiwgb3BlcmF0b3IpID0+IHtcbiAgbGV0IG9wZXJhdGlvblJlc3VsdCA9IG51bTEgKiBudW0yO1xuXG4gIGlmIChvcGVyYXRvciA9PT0gJy0nKSB7XG4gICAgb3BlcmF0aW9uUmVzdWx0ID0gbnVtMSAtIG51bTI7XG4gIH0gZWxzZSBpZiAob3BlcmF0b3IgPT09ICcrJykge1xuICAgIG9wZXJhdGlvblJlc3VsdCA9IG51bTEgKyBudW0yO1xuICB9IGVsc2Uge1xuICAgIG9wZXJhdGlvblJlc3VsdCA9IG51bTEgKiBudW0yO1xuICB9XG4gIGNvbnN0IFF1ZXN0aW9uVG9Vc2UgPSBgJHtudW0xfSAke29wZXJhdG9yfSAke251bTJ9YDtcbiAgcmV0dXJuIGNvbnMob3BlcmF0aW9uUmVzdWx0LCBRdWVzdGlvblRvVXNlKTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSYW5kb21PcGVyYXRvciA9ICgpID0+IHtcbiAgY29uc3Qgb3BlcmF0b3JzID0gWyctJywgJysnLCAnKiddO1xuICByZXR1cm4gb3BlcmF0b3JzW2dldFJhbmRJbnQoMildO1xufTtcbiJdfQ==