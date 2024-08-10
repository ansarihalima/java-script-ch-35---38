// ///////////////////////////////////////Question 1


function currentDateTime(){
    let d = new Date();
    document.write(d)
}
currentDateTime();

// ///////////////////////////////////////Question 2

let firstName = prompt("Enter first Name:")
let lastName = prompt("Enter last Name:")
function greet (firstName, lastName) {
 document.write("<br>" + "Welcome" + " " , firstName  + " " + lastName + "<br>");
}
greet(firstName ,lastName);

// ///////////////////////////////////////Question 3
let firstNumber = +prompt("Enter first Number:");
let lastNumber = +prompt("Enter last Number:");
function sum(firstNumber , lastNumber) {
   return  + firstNumber + lastNumber;
}
console.log(sum(firstNumber,lastNumber));

// ///////////////////////////////////////Question 4

let num1 = +prompt("Enter the first Number");
let num2 = +prompt("Enter the Second Number");
let opreator = prompt("Enter your opreator here");

function calculator(num1 , num2 , opreator){
   if (opreator === "+") {
      document.write(num1 + " " + opreator + " " + num2 + "  " + "=" + " " + (num1 + num2)+ "<br>");
   }
   else if (opreator === "-") {
       document.write(num1 + " " + opreator + " " + num2 + "  " + "=" + " " + (num1 - num2)+ "<br>");}
   else if (opreator === "*") {
       document.write(num1 + " " + opreator + " " + num2 + "  " + "=" + " " + (num1 * num2)+ "<br>");}
   else if (opreator === "/") {
       document.write(num1 + " " + opreator + " " + num2 + "  " + "=" + " " + (num1 / num2)  + "<br>");}
}

calculator(num1 , num2 , opreator);

///////////////////////////////////////Question 5
function square (a) {
    return a * a;
 }
 console.log(square(6));
 console.log(square(3));

////////////////////////////////////////Question 6
function factorial(n) {
    if (n < 0) return 'Factorial is not defined for negative numbers';
    if (n === 0) return 1; 

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorial(5)); 
console.log(factorial(0)); 
console.log(factorial(10)); 

////////////////////////////////////////Question 7

function displayCounting(start, end) {
    let result = '';

    for (let i = start; i <= end; i++) {
        result += i;
        if (i < end) {
            result += ' ';
        }
    }

    document.write(result + "<br>"); 
}
displayCounting(1, 10); 

function calculateRectangleArea(width, height) {
    return width * height;
}
const width = 5;
const height = 10;
const area = calculateRectangleArea(width, height);
console.log('The area of the rectangle is:', area);

///////////////////////////////////////Question 9

function capitalizeFirstLetterOfEachWord(str) {
    let result = '';
    let capitalizeNext = true;
    for (let i = 0; i < str.length; i++) {
        let currentChar = str[i] || '';

        if (currentChar === ' ') {
            result += currentChar;
            capitalizeNext = true;
        } else if (capitalizeNext) {
            result += String.fromCharCode(str.charCodeAt(i) - 32 * (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122));
            capitalizeNext = false; 
        } else {
            result += currentChar;
        }
    }

    return result;
}
const inputString = 'the quick brown fox';
const outputString = capitalizeFirstLetterOfEachWord(inputString);
console.log(outputString); 

////////////////////////////////////Question 10

function areaOfRectangle (width , height){
return "area of Rectangle is:" + width * height
}
console.log(areaOfRectangle(6 , 8));
console.log(areaOfRectangle(2 , 5));


function calcCircunfernce(radius) {
return "Circunfernce of circle is:" + 2*3.142*radius;
}
console.log(calcCircunfernce(5));


function calcArea(radius) {
return "Area of circle is:" + 2*3.142*radius*radius;
}
console.log(calcArea(8));


