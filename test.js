const leap = 2004;
if (leap % 4 == 0 || leap % 400 == 0) {
  console.log("this is leap year");
} else {
  console.log("not leap year");
}

const grade = 1000;

if(grade<=100 && grade>=90)
{
    console.log('A');
}
else if(grade<=89 && grade>=80)
{
    console.log('B');
}
else if(grade<=79 && grade>=70)
{
    console.log('C');
}
else if(grade<=69 && grade>=60)
{
    console.log('D');
}
else if(grade<=59 && grade>=0)
{
console.log('E');
}
else{
    console.log('invalid input');
}

const Number = 10;
//  const count = 0;
for(let i=1; i<=Number;i++)
{
  count++;
  const number2 = count+i;
  console.log(number2);
}

1 + 2 + 3 + n;

const number = 100;
let sum = 0;

for (let i = 1; i <= number; ++i) {
  // sum = sum + i;
  sum += i;
}
console.log(sum);

9!
1 * 2 * 3 * 4 . .. * 9;

let num1 = 0;
let num2 = 10;
let operator = +

let num1 = 5;
let num2 = 3;

//lcm
for (let i = 1; i < 1e9; ++i) {
  if (i % num1 === 0 && i % num2 === 0) {
    console.log(i);
    break;
  }
};

if(1==='1')
{
  console.log(true);
}

const num1 = 10;
const num2 = 20;

const minNumber = Math.min(num1, num2);
let ans = 0;

for (let i = 1; i <= minNumber; ++i) {
  if (num1 % i == 0 && num2 % i == 0) {
    ans = i;
  }
  console.log(ans);
};

CALCULATOR

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

LCM LOGIC BUILD PROGRAAM

const num1 = 5;
const num2 = 8;

for (let i = 1; i < 1e9; i++) {
  if (i % num1 == 0 && i % num2 == 0) {
    console.log(i);
    break;
  }
}

HCF LOGIC BUILD PROGRAAM

const num1 = 5;
const num2 = 8;
let num3 = Math.min(num1, num2);
let count = 0;

for (i = 1; i <= num3; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    count = i;
  }
}
console.log(count);




const num1 = 100;
let count = 0;

for(let i = 1; i<=num1; i++)
{
  if(num1%i==0 && count++);
}
console.log(count);

console.log("Hey");

reverse a string
'ankit' => 'tikna';

const personName = 'pratyush';

let temp = '';

for(let i = 0;i<personName.length;++i)
{
   temp = personName[i] + temp;
};



console.log(temp);

LCM

const num1= 7;
const num2 = 8;

for(let i = 1; i<1e9; i++)
{
  if(i%num1==0 && i%num2==0)
  {
    console.log(i);
    break;
  }
}

HCF

const num1 = 15;
const num2 = 10;
let num3 = Math.min(num1,num2);
let count = 0;
for(let i = 1; i<=num3;i++)
{
  if(num1%i==0 && num2%i==0)
  {
count = i;
  }
}
console.log(count);






