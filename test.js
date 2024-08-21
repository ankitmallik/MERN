// const num = 2004;
// if (num % 4 == 0 || num % 400 == 0) {
//   console.log("this is leap year");
// } else {
//   console.log("not leap year");
// }

// const num1 = 1000;

// if(num1<=100 && num1>=90)
// {
//     console.log('A');
// }
// else if(num1<=89 && num1>=80)
// {
//     console.log('B');
// }
// else if(num1<=79 && num1>=70)
// {
//     console.log('C');
// }
// else if(num1<=69 && num1>=60)
// {
//     console.log('D');
// }
// else if(num1<=59 && num1>=0)
// {
// console.log('E');
// }
// else{
//     console.log('invalid input');
// }

// const number = 10;
// //  const count = 0;
// for(let i=1; i<=number;i++)
// {
//   count++;
//   const number2 = count+i;
//   console.log(number2);
// }

// 1 + 2 + 3 + n;

// const number = 100;
// let sum = 0;

// for (let i = 1; i <= number; ++i) {
//   // sum = sum + i;
//   sum += i;
// }
// console.log(sum);

// 9!
// 1 * 2 * 3 * 4 . .. * 9;

// let num1 = 0;
// let num2 = 10;
// let operator = +

// let num1 = 5;
// let num2 = 3;

// //lcm
// for (let i = 1; i < 1e9; ++i) {
//   if (i % num1 === 0 && i % num2 === 0) {
//     console.log(i);
//     break;
//   }
// };

// if(1==='1')
// {
//   console.log(true);
// }

// const num1 = 10;
// const num2 = 20;

const minNumber = Math.min(num1, num2);
let ans = 0;

for (let i = 1; i <= minNumber; ++i) {
  if (num1 % i == 0 && num2 % i == 0) {
    ans = i;
  }
  console.log(ans);
};

// CALCULATOR

const num1 = 5;
const num2 = 8;
const operator = "$";

if (operator === "+") {
  const num3 = num1 + num2;
  console.log(num3);
}
else if (operator === "-") {
  const num3 = num1 - num2;
  console.log(num3);
} else if (operator === "*") {
  const num3 = num1 * num2;
  console.log(num3);
} else if (operator == "/") {
  const num3 = num1 / num2;
  console.log(num3);
} else {
  console.log("invalid input");
}
