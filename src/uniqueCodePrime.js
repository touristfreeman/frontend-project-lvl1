const checkPrimInt = (num, count = 2) => {
  if (count === num) {
    return 'yes';
  }
  return num % count === 0 ? 'no' : checkPrimInt(num, count + 1);
};
export default checkPrimInt;
