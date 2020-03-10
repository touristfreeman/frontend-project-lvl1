"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _index = require("../index");

const gameGcd = () => {
  (0, _index.Greet)();
  const name = (0, _index.getNameSayHi)();
  (0, _index.sayRules)('Find the greatest common divisor of given numbers.');

  const coutnToThree = (count = 0) => {
    if (count === 3) {
      return console.log(`Congratulations, ${name}`);
    }

    const twoRandIn = (0, _index.cons)((0, _index.getRandInt)(999), (0, _index.getRandInt)(999));
    const corrAnsw = (0, _index.getCommonFact)((0, _index.getSimpleFact)((0, _index.car)(twoRandIn)), (0, _index.getSimpleFact)((0, _index.cdr)(twoRandIn)));
    console.log(`hint ${corrAnsw}`);
    (0, _index.askQuestion)(`${(0, _index.car)(twoRandIn)} ${(0, _index.cdr)(twoRandIn)}`);
    const checkResult = (0, _index.checkUseAnswAndSayRes)(corrAnsw, (0, _index.getUseAnswer)(), name);
    return checkResult ? coutnToThree(count + 1) : null;
  };

  return coutnToThree();
};

var _default = gameGcd;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9nYW1lcy9nY2QuanMiXSwibmFtZXMiOlsiZ2FtZUdjZCIsIm5hbWUiLCJjb3V0blRvVGhyZWUiLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJ0d29SYW5kSW4iLCJjb3JyQW5zdyIsImNoZWNrUmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0E7O0FBTUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEI7QUFDQSxRQUFNQyxJQUFJLEdBQUcsMEJBQWI7QUFDQSx1QkFBUyxvREFBVDs7QUFFQSxRQUFNQyxZQUFZLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHLENBQVQsS0FBZTtBQUNsQyxRQUFJQSxLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNmLGFBQU9DLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLG9CQUFtQkosSUFBSyxFQUFyQyxDQUFQO0FBQ0Q7O0FBQ0QsVUFBTUssU0FBUyxHQUFHLGlCQUFLLHVCQUFXLEdBQVgsQ0FBTCxFQUFzQix1QkFBVyxHQUFYLENBQXRCLENBQWxCO0FBQ0EsVUFBTUMsUUFBUSxHQUFHLDBCQUFjLDBCQUFjLGdCQUFJRCxTQUFKLENBQWQsQ0FBZCxFQUE2QywwQkFBYyxnQkFBSUEsU0FBSixDQUFkLENBQTdDLENBQWpCO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFhLFFBQU9FLFFBQVMsRUFBN0I7QUFDQSw0QkFBYSxHQUFFLGdCQUFJRCxTQUFKLENBQWUsSUFBRyxnQkFBSUEsU0FBSixDQUFlLEVBQWhEO0FBQ0EsVUFBTUUsV0FBVyxHQUFHLGtDQUFzQkQsUUFBdEIsRUFBZ0MsMEJBQWhDLEVBQWdETixJQUFoRCxDQUFwQjtBQUNBLFdBQU9PLFdBQVcsR0FBR04sWUFBWSxDQUFDQyxLQUFLLEdBQUcsQ0FBVCxDQUFmLEdBQTZCLElBQS9DO0FBQ0QsR0FWRDs7QUFXQSxTQUFPRCxZQUFZLEVBQW5CO0FBQ0QsQ0FqQkQ7O2VBa0JlRixPIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQge1xuICBHcmVldCwgZ2V0TmFtZVNheUhpLCBzYXlSdWxlcywgY29ucywgY2FyLCBjZHIsIGFza1F1ZXN0aW9uLCBnZXRVc2VBbnN3ZXIsXG4gIGdldFJhbmRJbnQsIGNoZWNrVXNlQW5zd0FuZFNheVJlcywgZ2V0U2ltcGxlRmFjdCwgZ2V0Q29tbW9uRmFjdCxcbn0gZnJvbSAnLi4vaW5kZXgnO1xuXG5cbmNvbnN0IGdhbWVHY2QgPSAoKSA9PiB7XG4gIEdyZWV0KCk7XG4gIGNvbnN0IG5hbWUgPSBnZXROYW1lU2F5SGkoKTtcbiAgc2F5UnVsZXMoJ0ZpbmQgdGhlIGdyZWF0ZXN0IGNvbW1vbiBkaXZpc29yIG9mIGdpdmVuIG51bWJlcnMuJyk7XG5cbiAgY29uc3QgY291dG5Ub1RocmVlID0gKGNvdW50ID0gMCkgPT4ge1xuICAgIGlmIChjb3VudCA9PT0gMykge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGBDb25ncmF0dWxhdGlvbnMsICR7bmFtZX1gKTtcbiAgICB9XG4gICAgY29uc3QgdHdvUmFuZEluID0gY29ucyhnZXRSYW5kSW50KDk5OSksIGdldFJhbmRJbnQoOTk5KSk7XG4gICAgY29uc3QgY29yckFuc3cgPSBnZXRDb21tb25GYWN0KGdldFNpbXBsZUZhY3QoY2FyKHR3b1JhbmRJbikpLCBnZXRTaW1wbGVGYWN0KGNkcih0d29SYW5kSW4pKSk7XG4gICAgY29uc29sZS5sb2coYGhpbnQgJHtjb3JyQW5zd31gKTtcbiAgICBhc2tRdWVzdGlvbihgJHtjYXIodHdvUmFuZEluKX0gJHtjZHIodHdvUmFuZEluKX1gKTtcbiAgICBjb25zdCBjaGVja1Jlc3VsdCA9IGNoZWNrVXNlQW5zd0FuZFNheVJlcyhjb3JyQW5zdywgZ2V0VXNlQW5zd2VyKCksIG5hbWUpO1xuICAgIHJldHVybiBjaGVja1Jlc3VsdCA/IGNvdXRuVG9UaHJlZShjb3VudCArIDEpIDogbnVsbDtcbiAgfTtcbiAgcmV0dXJuIGNvdXRuVG9UaHJlZSgpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGdhbWVHY2Q7XG4iXX0=