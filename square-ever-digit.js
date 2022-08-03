/* Square Every Digit
In this problem, You are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer. */
function number(num) {

  const arr = num.toString().split('');
  let newNum = [];
  for(let i = 0; i<arr.length; i++){
    const multiple = arr[i]*arr[i];
    newNum.push(multiple);
  }
  const result = parseInt(newNum.join(''));
  console.log(result);
  return result;
}
number(9119);