"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return 'yes';
  }

  return num % count === 0 ? 'no' : checkPrimInt(num, count + 1);
};

var _default = checkPrimInt;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91bmlxdWVDb2RlUHJpbWUuanMiXSwibmFtZXMiOlsiY2hlY2tQcmltSW50IiwibnVtIiwiY291bnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNQSxZQUFZLEdBQUcsQ0FBQ0MsR0FBRCxFQUFNQyxLQUFLLEdBQUcsQ0FBZCxLQUFvQjtBQUN2QyxNQUFJQSxLQUFLLEtBQUtELEdBQWQsRUFBbUI7QUFDakIsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsU0FBT0EsR0FBRyxHQUFHQyxLQUFOLEtBQWdCLENBQWhCLEdBQW9CLElBQXBCLEdBQTJCRixZQUFZLENBQUNDLEdBQUQsRUFBTUMsS0FBSyxHQUFHLENBQWQsQ0FBOUM7QUFDRCxDQUxEOztlQU1lRixZIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2hlY2tQcmltSW50ID0gKG51bSwgY291bnQgPSAyKSA9PiB7XG4gIGlmIChjb3VudCA9PT0gbnVtKSB7XG4gICAgcmV0dXJuICd5ZXMnO1xuICB9XG4gIHJldHVybiBudW0gJSBjb3VudCA9PT0gMCA/ICdubycgOiBjaGVja1ByaW1JbnQobnVtLCBjb3VudCArIDEpO1xufTtcbmV4cG9ydCBkZWZhdWx0IGNoZWNrUHJpbUludDtcbiJdfQ==