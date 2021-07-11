//Display numbers from 1 to 10

let i = 1;
const numbers = [];
do {
    numbers.push(i);
    i++;
} while (numbers.length < 10);

console.log(numbers);


//Print the odd numbers less than 100

let number = 1;
const odd = [];

do { 
    odd.push(number);
    number+= 2;
    } while (odd.length < 50);
console.log(odd);

//Print the multiplication table with 7

let num = 7;


for(let i=1; i <= 10; i++) {
    let num = 7;
    let product = num * i;

    console.log(num +' * ' + i + ' = ' + product);
};

//Print all the multiplication tables with numbers from 1 to 10

const multiplicators = [1 , 2, 3, 4, 5, 6 ,8 ,9 ,10];

multiplicators.forEach((element) => {

    for(let i=1; i <= 10; i++) {
        
    let product = element * i;

    console.log(element+' * ' + i + ' = ' + product);
}
});

//Calculate the sum of numbers from 1 to 10

console.log([1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10].reduce((a, b) => a + b ));


//Calculate 10!

console.log([1, 2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10].reduce((a, b) => a * b, 1));

//Calculate the sum of odd numbers greater than 10 and less than 30

let numOdd = 11;
const odd = [];

do { 
    odd.push(numOdd);
    numOdd += 2;
    } while (odd.length < ((30-10)/2));

console.log(odd.reduce((a,b) => a + b));

//Calculate the sum of numbers in an array of numbers

const randomArray = [5, 89, 15, 32];
console.log(randomArray.reduce((a,b) => a+b));

//Calculate the average of the numbers in an array of numbers

const marks = [8, 9, 6,10];

const marksAverage = marks.reduce((a,b)=> a + b) / marks.length;

console.log(marksAverage);

// Create a function that receives an array of numbers and returns an array containing only the positive numbers
const realNumbers = [-1, 0, 8, -7];

const positiveNumbers = realNumbers.filter(number => number >= 0);

console.log(positiveNumbers);

//Find the maximum number in an array of numbers

const reals = [-1, 0, 8, -7];
let max = Math.max.apply(null, reals);

console.log(max);

//Create a function that will return a Boolean specifying if a number is prime


  function isPrimeNumber(n) {
    for (let i = 2; i < n; i++)
     { 
      if(n % i === 0 && n > 1)
       {
       return false;
       } 
     }
    return true; 
  };
  console.log(isPrimeNumber(13));
  console.log(isPrimeNumber(2));
  console.log(isPrimeNumber(16));
  console.log(isPrimeNumber(17));

  //Calculate the sum of digits of a positive integer number
  
 const addDigits = (digit) => { 
     result = 0;
     while (digit != 0) {
          result = result + digit % 10;
          digit = parseInt(digit / 10);
    }
  return result;
 };
  console.log(addDigits(12));
  console.log(addDigits(625));
  console.log(addDigits(1245));

  //Print the first 100 prime numbers
  

  for (let i = 0; i <= 100; i++) {
    let flag = 0;

    // looping through 2 to user input number
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = 1;
            break;
        }
    }

    // if number greater than 1 and not divisible by other numbers
    if (i > 1 && flag === 0) {
        console.log(i);
    }
}



  //Rotate an array to the left 1 position
  const normal = ['Hi', 2, 'you', 3];


  for (i=0; i < normal.length - 1 ; i++) {
    let first = normal.shift();
    normal.push(first);
    console.log(normal);
  };

  //Reverse an array

  const firstNum = [1, 2, 3];
  console.log(firstNum.reverse());

  //Create a function that will merge two arrays and return the result as a new array

  const theNextNumb = [4, 5, 6];
  const mergedArray = firstNum.concat(theNextNumb);
  console.log(mergedArray);

  /*Create a function that will receive two arrays of numbers as arguments and return an array 
  composed of all the numbers that are either in the first array or second array but not in both */

  const coincidence = (firtsResults, secondResults) => {

    const mergedResults = firtsResults.concat(secondResults);
    
     const coincidences = mergedResults.filter(element => !firtsResults.includes(element) || !secondResults.includes(element));
    return coincidences;
  };
  const array1 = [1, 56, 48, 47, 15];
  const array2 = [1, 23, 49, 56, 48, 16];  
        console.log(coincidence(array1, array2));
    
//Create a function that will receive an array of numbers as argument and will return a new array with distinct elements
  
const  arrSource= [1, 15, 12, 16, 12, 18, 1];
const distincts = arrSource.filter((element, index, array) => array.indexOf(element) === index);
console.log(distincts);
  
// Create a function that will return the number of words in a text

const wordCounter =(string)=> {
   return string.match(/(\w+)/g).length;
};

const word = 'An Array whose contents depend on the presence or absence of the global (g) flag, or null if no matches are found.';

console.log(wordCounter(word));
