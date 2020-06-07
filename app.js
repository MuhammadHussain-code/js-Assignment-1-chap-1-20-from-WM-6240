// // chapter 1
// //Q1
// alert("As salam o alaikm viewers");
// //Q2
// alert("Error! please enter a valid password.");
// //Q3
// alert("Welcome to JS Land. \nHappy Coding!");
// //Q4
// alert("Welcome to JS Land.");
// alert("Happy Coding!");
// //Q5
// console.log("Hello... I can run JS throughmy web browser's console.");

// // chapter 2
// //Q1
// var username;
// //Q2
// var myName = "Muhammad Hussain";
// //Q3
// var message;
// message = "Hello world";

// alert(message);
// //Q4
// var studentName = "Hussain";
// var qualification = "FSC";
// var age = "20";

// alert(studentName);
// alert(qualification);
// alert(age);

// //Q5
// var fullName = "PIZZA";
// var pizz = "PIZZ";
// var piz = "PIZ";
// var pi = "PI";
// var p = "P";

// alert(fullName + "\n" + pizz + "\n" + piz + "\n" + pi + "\n" + p);

// //Q6
// var email = "muhammadhussain99100@gmail.com";
// alert("My email address is " + email);

// //Q7
// var book = "The smarter way to learn javaScript";

// alert("I am learning from the book " + book);

// //Q8
// document.write("Yay! I can write HTML content using JavaScript!");

// //Q9
// alert(" “▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” ");

// // chapter 3
// //Q1
// var a = 20;
// alert(a);
// //Q2
// var N = 0;
// alert("You have visited this site " + N + " times. ");
// //Q3
// var birthYear = "1999";
// document.write(
//   "My birth year is " +
//     birthYear +
//     "\n data type of my declared variable is number."
// );
// //Q4
// var name = prompt("Enter your name", "John");
// var product = prompt("Enter the title of your product", "T-shirts");
// var quantity = prompt("Enter the quatity you want", "5");

// document.write(
//   name + " ordered " + quantity + " " + product + "(s) on my shopping store"
// );

// // chapter 4

// //Q1
// var hello, hi, world;
// //Q2
// var hello, _1hello, $hi, good1, allLegal;
// // var 1hi, %illigal, alert, hi hello,*hmm;
// //Q3
// document.write(
//   "<h1>Rules for naming JS variables</h2>\n <br/> Variable names can only contain numbers, $ and _,For example: $my_Name.<br/>Variable must began with a letter, $ or _. For example $name,name,_name.<br/>Variable names are case sensitive.<br/>Variables name should not be JS keyword."
// );

// // cahpter 5
// //Q1
// var num1 = +prompt("Enter 1st number", "5");
// var num2 = +prompt("Enter 2nd number", "3");
// var sum = num1 + num2;
// document.write("Sum " + num1 + " and " + num2 + " is " + sum);

// //Q2
// var sub = num1 - num2;
// var mul = num1 * num2;
// var div = num1 / num2;
// document.write("Sub " + num1 + " and " + num2 + " is " + sub);
// document.write("Sum " + num1 + " and " + num2 + " is " + mul);
// document.write("Sum " + num1 + " and " + num2 + " is " + div);

// //Q3
// var value;
// document.write("Value after variable declaration is " + value);
// value = 5;
// document.write("Initial value " + value);
// ++value;
// document.write("Value aafter increment " + value);
// value = +7;
// document.write("Value after addition " + value);
// --value;
// document.write("Value after decrement is: " + value);
// value = value % 3;
// document.write("The remainder: " + value);

// //Q4
// var ticket = 600;
// var quan = +prompt("Enter your ticket quantity", 5);
// var total = ticket * quan;
// document.write("Total cost to buy " + quan + " tickets is " + total + "PKR");

// //Q5
// var table = +prompt("ENter which table you want to see ", 5);
// var _1st = table * 1;
// var _2nd = table * 2;
// var _3rd = table * 3;
// var _4rth = table * 4;
// var _5th = table * 5;
// var _6th = table * 6;
// var _7th = table * 7;
// var _8th = table * 8;
// var _9th = table * 9;
// var _10th = table * 10;

// document.write("Table of " + table);
// document.write(table + "X 1 = " + _1st);
// document.write(table + "X 2 = " + _2nd);
// document.write(table + "X 3 = " + _3rd);
// document.write(table + "X 4 = " + _4rth);
// document.write(table + "X 5 = " + _5th);
// document.write(table + "X 6 = " + _6th);
// document.write(table + "X 7 = " + _7th);
// document.write(table + "X 8 = " + _8th);
// document.write(table + "X 9 = " + _9th);
// document.write(table + "X 110 = " + _10th);

// //Q6

// var cel = 36;
// var fer = 110;

// var convToCel = ((fer - 32) * 5) / 9;
// var convToFer = (cel * 9) / 5 + 32;
// document.write(cel + "•C is " + convToFer + "•F");
// document.write(fer + "•F is " + convToCel + "•C");

// //Q7
// document.write("<h1>Shopping Cart</h1>");
// var item1 = 800;
// var iten2 = 1000;
// var quan1 = 3;
// var quan2 = 2;
// var shipping = 200;
// var total = item1 * quan1 + item2 * quan2 + shipping;
// document.write("Price of item 1 is " + item1);
// document.write("Quantity of item 1 is " + quan1);
// document.write("Price of item 2 is " + item2);
// document.write("Quantity of item 2 is " + quan2);
// document.write("Shipping Charges " + shipping);
// document.write("Total cost of your order is " + total);

// //Q8

// var totalMarks = 800;
// var obtained = 700;
// var perc = (800 / 700) * 100;
// document.write(
//   `<h1>Mark Sheet</h1><br/><p>Total Marks: ${totalMarks}</p><p>Marks Obtained: ${obtained}</p><p>Percentage: ${totalMarks}</p>`
// );

// //Q9

// var usDollar = 104.38;
// var rial = 28;
// var conversion = usDollar * 10 + rial * 25;

// document.write("<h1>Currency in PKR</h1>Total currency in PKR: " + conversion);
// //Q10
// var aa = 10;
// console.log(((aa + 5) * 10) / 2);

// //Q11

// var currentYear = 2020;
// var birthYear = 1999;

// document.write(
//   `<h1>Age Calculator</h1>current Year ${currentYear} <br/>birthe Year ${birthYear}<br/>Your age: ${
//     currentYear - birthYear
//   }`
// );

// //Q12

// var r = 25;
// var pi = 3.145;
// var area = pi * r * r;
// var circumference = 2 * pi * r;
// document.write(
//   `<h1>The Geometerizer</h1>Radius of a Circle : ${r}<br/>Area of a circle: ${area}<br/>Circummference of a circle: ${circumference}`
// );

// //Q13
// var favSnack = "oreo";
// var inADay = 2;
// var lifetime = 65;
// var currentAge = 20;

// document.write(
//   `<h1>The lifetime supply calculator</h1>Favorite snack: ${favSnack}<br/>Current age: ${currentAge}<br/>Estimate max age: ${lifetime}<br/>Amount of snacks per day consume: ${inADay}<br/>You will need ${
//     (lifetime - currentAge) * inADay
//   } ${favSnack} to last you until the ripe old age of ${lifetime}`
// );

// // chapter 6-9

// //Q1
// var aaa = 10;
// document.write(
//   `<h2>Result :</h2>The value of a is ${aaa}<br/>..................................<br/>The value of ++a is ${++aaa}<br/>Now the value of a is ${aaa}<br/>The value of a++ is ${aaa++}<br/>Now the value of a is ${aaa}<br/>The value of --a is ${--aaa}<br/>Now the value of a is ${aaa}<br/>The value of a-- is ${aaa--}<br/>Now the value of a is ${aaa}`
// );

// //Q2
// var x = 2,
//   y = 1;
// var result = --x - --y + ++y + y--;

// // at --x : x=1 , --y : y=0
// //at --x - --y = 1
// //at --x - --y + ++y = 2
// //at --x - --y + ++y + y-- = 3

// document.write(`x is ${x} </br> y is ${y}<br/>result is ${result}`);

// //Q3

// var userName = prompt("Enter your name", "Hussain");
// alert(`As salaam o alaikm ${userName}`);

// //Q4

// //Q5

// var table = +prompt("ENter which table you want to see ", 5);
// var _1st = table * 1;
// var _2nd = table * 2;
// var _3rd = table * 3;
// var _4rth = table * 4;
// var _5th = table * 5;
// var _6th = table * 6;
// var _7th = table * 7;
// var _8th = table * 8;
// var _9th = table * 9;
// var _10th = table * 10;

// document.write("Table of " + table);
// document.write(table + "X 1 = " + _1st);
// document.write(table + "X 2 = " + _2nd);
// document.write(table + "X 3 = " + _3rd);
// document.write(table + "X 4 = " + _4rth);
// document.write(table + "X 5 = " + _5th);
// document.write(table + "X 6 = " + _6th);
// document.write(table + "X 7 = " + _7th);
// document.write(table + "X 8 = " + _8th);
// document.write(table + "X 9 = " + _9th);
// document.write(table + "X 110 = " + _10th);

// //Q6
// var english = +prompt("Enter English marks");
// var urdu = +prompt("Enter urdu marks");
// var math = +prompt("Enter math marks");

// document.write(
//   `<table><th>Subjects</th> <th scope="col">Total marks</th> <th scope="col">Obtained marks</th><th scope="col">Percentage</th><tr><td>English</td><td>100</td><td>${english}</td><td>${
//     (english / 100) * 100 + "%"
//   }</td></tr><tr><td>Urdu</td><td>100</td><td>${urdu}</td><td>${
//     (urdu / 100) * 100 + "%"
//   }</td></tr><tr><td>Math</td><td>100</td><td>${math}</td><td>${
//     (math / 100) * 100 + "%"
//   }</td></tr><tr><td></td><td>300</td><td>${urdu + english + math}</td><td><b>${
//     ((urdu + english + math) / 300) * 100
//   }</b></td></tr></table>`
// );

// // chapter 9-11

// //Q1
// var userCity = prompt("Enter city name").toLowerCase();

// if (userCity === "karachi") {
//   alert("Welcome to the city of lights");
// } else {
//   alert("Welcome to " + userCity);
// }

// //Q2

// var gender = prompt("Enter your gender ", "male").toLowerCase();
// if (gender === "male") {
//   alert("Welcome sir");
// } else if (gender === "female") {
//   alert("Welcome sir");
// } else {
//   alert("out of syllabus");
// }

// //Q3

// var signalColor = prompt("Enter the signal color", "red");

// if (signalColor === "red") {
//   alert("Must stop");
// } else if (signalColor === "yellow") {
//   alert("Ready to move");
// } else if (signalColor === "green") {
//   alert("move now");
// }

// //Q4

// var fuel = +prompt("Enter your fuel in litres");
// if (fuel <= 0.25) {
//   alert("please ! refill the fuel tank");
// } else {
//   alert("You are good to go (y)");
// }

// //Q5
// // a
// var z = 4;
// if (++z === 5) {
//   alert("given condition for variable a is true");
// }
// // b
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// // c
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if (c === 14) {
//   alert("condition 4 is true");
// }

// // d
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// // e
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }
// //f
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }
// //Q6

// var english1 = +prompt("Enter English marks");
// var urdu1 = +prompt("Enter urdu marks");
// var math1 = +prompt("Enter math marks");

// var perc1 = ((english1 + urdu1 + math1) * 100) / 300;

// document.write(
//   `<h1>Mark sheet</h1><p>Total Marks : 300</p><p>Total Marks : ${
//     urdu1 + math1 + english1
//   }</p><p>Your Percentage : ${perc1}</p>`
// );

// if (perc1 >= 80) {
//   document.write("<p>Grade : A-one</p><p>Excellent</p>");
// } else if (perc1 >= 70 && perc1 < 80) {
//   document.write("<p>Grade : A</p><p>Remarks : Good</p>");
// } else if (perc1 >= 60 && perc1 < 70) {
//   document.write("<p>Grade : B</p><p>Remarks : You need to improve</p>");
// } else {
//   document.write("<p>Grade : Fail</p><p>Remarks : Sorry</p>");
// }

// //Q7

// var secretNum = 7;

// var guesNum = +prompt("enter your guess", 0);

// if (guesNum === secretNum) {
//   alert("bingo! Correct answer");
// } else if (++guesNum === secretNum && --guesNum === secretNum) {
//   alert("close enough!");
// } else {
//   alert("try again!");
// }

// //Q8

// var userNum = 9;

// if (!(userNum % 3)) {
//   alert("Number is divisible by 3");
// }

// //Q9

// var givenNum = 8;
// if (!(givenNum % 2)) {
//   alert("given number is even");
// } else {
//   alert("given number is odd");
// }

// //Q10

// var T = 35;

// if (T > 40) {
//   document.write("It is too hot outside.");
// } else if (T > 30 && T <= 40) {
//   document.write("The Weather today is Normal.");
// } else if (T > 20 && T <= 30) {
//   document.write("Today’s Weather is cool.");
// } else if (T > 10 && T <= 20) {
//   document.write("OMG! Today’s weather is so Cool.");
// }

// //Q11

// var firstNum = +prompt("enter first number");
// var secNum = +prompt("enter second number");
// var operator = prompt("enter the operation you want to perform", "+");

// if (operator === "+") {
//   document.write(`${firstNum} + ${secNum} = ${firstNum + secNum}`);
// } else if (operator === "-") {
//   document.write(`${firstNum} - ${secNum} = ${firstNum - secNum}`);
// } else if (operator === "/") {
//   document.write(`${firstNum} / ${secNum} = ${firstNum / secNum}`);
// } else if (operator === "*") {
//   document.write(`${firstNum} * ${secNum} = ${firstNum * secNum}`);
// }

// // chapter 12-13

// //Q1

// var character = "1";

// if (!isNaN(character)) {
//   alert("number");
// } else if (character == character.toUpperCase()) {
//   alert("upper case true");
// } else if (character == character.toLowerCase()) {
//   alert("lower case true");
// }

// //Q2

// var integer1 = +prompt("enter first integer");
// var integer2 = +prompt("enter second integer");

// if (integer1 > integer2) {
//   alert(integer1);
// } else if (integer2 > integer1) {
//   alert(integer2);
// } else {
//   alert("Both are equal = " + integer1);
// }

// //Q3

// var userInp = +prompt(
//   "Enter your number to check whether it is negative positive or zero"
// );

// if (userInp > 0) {
//   alert("number is positive");
// } else if (userInp < 0) {
//   alert("number is negative");
// } else {
//   alert("Zero");
// }

// //Q4

// var userChar = prompt("Enter character to check it is vowel or not", "e");

// if (
//   userChar === "a" ||
//   userChar === "e" ||
//   userChar === "i" ||
//   userChar === "u" ||
//   userChar === "o"
// ) {
//   alert(true);
// } else {
//   alert(false);
// }

// //Q5

// var userPass = prompt("enter your password");

// var correctPass = "hellow";

// if (userPass === "") {
//   alert("Please! insert your password");
// } else if (userPass === correctPass) {
//   alert("correct password!");
// } else {
//   alert("incorrect password!");
// }

// //Q6

// var hour = 13;
// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }
// console.log(greeting);

// //Q7

// var time = +prompt("enter any time ie current time");

// if (time >= 0000 && time < 1200) {
//   alert("Good Morning!");
// } else if (time >= 1200 && time < 1700) {
//   alert("Good Afternoon!");
// } else if (time >= 1700 && time < 2100) {
//   alert("Good Evening!");
// } else if (time >= 2100 && time <= 2359) {
//   alert("Good Night!");
// }

// // chapter 16-17
// //Q1
// var students_name = [];
// //Q2
// var student_name1 = new Array();

// //Q3
// var stringArray = ["hell", "of", "an", "assignment"];
// //Q4
// var numArray = [1, 2, 3, 4, 5];

// //Q5
// var boolArray = [true, false];

// //Q6
// var mixedArray = ["hell", "of", "an", "assignment", 1, 2, 3, 4, true, false];

// //Q7
// var edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// document.write(`<h1>Qualifications :</h1>
// 1) ${edu[0]}<br/>
// 2) ${edu[1]}<br/>
// 3) ${edu[2]}<br/>
// 4) ${edu[3]}<br/>
// 5) ${edu[4]}<br/>
// 6) ${edu[5]}<br/>
// 7) ${edu[6]}<br/>
// 8) ${edu[7]}`);

// //Q8

// var stdName = ["michel", "john", "tony"];
// var stdScore = [240, 110, 244];

// document.write(
//   `Score of ${stdName[0]} is ${stdScore[0]}. Percentage is ${
//     (stdScore[0] / 500) * 100
//   }<br/>Score of ${stdName[1]} is ${stdScore[1]}. Percentage is ${
//     (stdScore[1] / 500) * 100
//   }<br/>Score of ${stdName[2]} is ${stdScore[2]}. Percentage is ${
//     (stdScore[2] / 500) * 100
//   }`
// );

// //Q9

// var colorNames = ["red", "green", "blue", "yellow", "purple"];
// var adding1 = prompt(
//   "Enter the color name  you want to add in the first place of the list",
//   "black"
// );
// var adding2 = prompt(
//   "Enter the color name  you want to add in the end of the list",
//   "black"
// );
// var adding3 = prompt(
//   "Enter the color name  you want to add in the first place of the list",
//   "black"
// );
// var adding4 = prompt(
//   "Enter the color name  you want to add in the first place of the list",
//   "black"
// );
// //a
// colorNames.unshift(adding1);
// //b
// colorNames.push(adding2);
// //c
// colorNames.unshift(adding3);
// colorNames.unshift(adding4);
// //d
// colorNames.shift();
// //e
// colorNames.pop();
// //f
// var giveIndex = +prompt(
//   "Enter the index at which you want to add a color",
//   "2"
// );
// var addColor = prompt("Enter the color", "megenta");
// colorNames.splice(giveIndex, addColor);
// //g
// var giveDltIndex = +prompt("Enter the index of dlt color", "1");
// var howMany = +prompt("Enter how many you want to delete", "3");
// colorNames.splice(giveDltIndex, howMany);

// for (var j = 0; j < colorNames.length; j++) {
//   document.write(`${colorNames[j]}</br>`);
// }

// //Q10

// var scoresArray = [201, 202, 302, 502, 10, 2, 0];

// console.log(
//   scoresArray.sort(function (a, b) {
//     return a - b;
//   })
// );

// //Q11

// var cityNames = ["karachi", "hedrabad", "faislabad", "islamabad", "lahore"];
// document.write(`<p>City Names </p>`);
// cityNames.map((a) => document.write(a + " "));

// var selectedCities = cityNames.slice(1, 4);
// document.write(`<p>Selected city Names </p>`);

// selectedCities.map((a) => document.write(a + " "));

//Q12

// var arr = ["This ", " is ", " my ", " cat"];
// console.log(arr.join(""));

// //Q13

// var devices = [];
// devices.push("Keybord");
// devices.push("mouse");
// devices.push("screen");

// console.log(devices);

// //Q14

// var devices1 = [];
// devices1.unshift("Keybord");
// devices1.unshift("mouse");
// devices1.unshift("screen");

// console.log(devices1);

// //Q15

// var mobileManu = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write(`<select name="cars" id="cars">
// <option value="volvo">${mobileManu[0]}</option>
// <option value="saab">${mobileManu[1]}</option>
// <option value="mercedes">${mobileManu[2]}</option>
// <option value="audi">${mobileManu[3]}</option>
// <option value="audi1">${mobileManu[4]}</option>
// <option value="audi2">${mobileManu[5]}</option>

// </select>`);

// // chapter 17-20

// // Q1
// var _arrArr = new Array(new Array(""));

// //Q2
// var mulArr = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
// ];

// document.write(`${mulArr[0]}<br/>${mulArr[1]}<br/>${mulArr[2]}`);

// //Q3
// for(var h = 0 ; h<=10; h++){
//   document.write(`<p>${h}</p>`)
// }

//Q4

// var loopTable = +prompt("Enter a number to find its table","5")
// var tableLength = +prompt("Enter a its length","10")

// for(var p =1;p<tableLength;p++)
// {
//   document.write(`<p>${loopTable} X ${p} = ${loopTable*p}</p>`)
// }

// //Q5

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// for(var l=0;l<fruits.length;l++){
//   document.write(`Element at index ${l} is ${fruits[l]}`)
// }

//Q6
// a
var count = 1;

for (count; count < 10; count++) {
  document.write(`<p><b>Counting</b></p>${count}  `);
}

// b

for (count; count > 0; count--) {
  document.write(`<p><b>Reverse counting</b></p><p>${count}</p>`);
}

// // c

for (count; count < 10; count++) {
  document.write("<p><b>Even</b></p>" + count * 2);
}

// d
count = 1;
for (count; count < 10; count++) {
  if (!(count % 2 === 0)) {
    document.write("<p><b>Odd</b></p>" + count + "  ");
  }
}

// e
for (var q = 1; q < 10; 1++) {
  document.write(`<p><b>Series</b></p>${q * 2}k `);
}

//Q7
var cookies = ["cake", "apple pie", "cookie", "chips", "patties"];

var search = prompt("Enter search cookies", "cake");

var flag = false;

for (var t = 0; t < cookies.length; t++) {
  if (search === cookies[t]) {
    flag = true;
  }
}

if (flag === true) {
  document.write(`cookie is <b>available</b> at index ${t} in our bakery`);
} else {
  document.write(
    `We are sorry . ${search} is <b>not available</b> is our bakery`
  );
}

//Q8

var nm = [24, 53, 78, 91, 12];

console.log(nm);
console.log("The largest number is " + Math.max(...nm));

//Q9

console.log([24, 53, 78, 91, 12]);
console.log("The smallest number is " + Math.min(...[24, 53, 78, 91, 12]));

//Q10

for (var m = 1; m < 100; m++) {
  console.log(m * 5);
}
