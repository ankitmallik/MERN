// $var = 10;
//Data Types
//String
//Symbol
//Boolean
//BigInt
//Null
//Number
//Undefined

// let person = 'ankit';
// const person1 = 'pratyush';
// person1 = 45;
// var person3 = 'anshu';

// person = 'pratyush';
// let person = 'anki'

// var namee = 'pratyush';
// var namee = 'ankit';
// namee = 'anshu';


const btn = document.querySelector('button');
btn.addEventListener('click',newMsg);
function newMsg()
{
    let text = prompt('');
    btn.textContent = 'hi' + text;
}

