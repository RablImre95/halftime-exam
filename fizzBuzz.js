function fizzBuzz(num1, num2) {
  let result = [];
  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 ===0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

console.log(fizzBuzz(1,5));
console.log(fizzBuzz(10,15));

module.exports = fizzBuzz