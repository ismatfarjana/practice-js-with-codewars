const pipeFix = numbers => {
  firstNum = numbers.shift();
  lastNum = numbers.pop();
  array = [];
  for (let i = firstNum; i <= lastNum; i++) {
    array.push(i);
  }
  return array;
};
pipeFix([1, 2, 3, 5, 6, 8, 9]);
