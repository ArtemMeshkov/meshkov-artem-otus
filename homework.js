function sum(num) {
  let currentSum = num;

  function f(b) {
    if (b || b === 0) {
      currentSum += b;
      return f;
    }

    return currentSum;
  }

  return f;
}
