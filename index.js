// question 1
console.log("hello world");
// question 2
var temprature = 19;
if (temprature <= 20) {
    console.log("Its cold");
}
else {
    console.log("its not cold");
}
// question 3
var num1, num2;
num1 = 10;
num2 = 3;
console.log("apples left are: ", num1 - num2);
// question 4
var firstName = "ali";
var lastName = "abbas";
var fullName = firstName + " " + lastName;
console.log(fullName);
// question 5
if (5 > 3) {
    console.log("yes");
}
else {
    console.log("no");
}
// question 6
function calculateCircleArea(radius) {
    return 2 * 3.14 * radius;
}
calculateCircleArea(3);
// question 7
for (var i = 0; i <= 50; i++) {
    if (i % 3 == 0) //checking if the digit is perfectly divisible to 3
     {
        console.log("Fizz");
    }
    else if (i % 5 == 0) // if digit is no divisible to 3 then check for 5
     {
        console.log("Buzz");
    }
    else { // printing the number if not divisible to any number
        console.log(i);
    }
}
//  question 8
var tempratures = [20, 34, 23, 22, 33, 13];
var highestTemp = tempratures[0];
for (var i = 0; i < tempratures.length; i++) {
    if (tempratures[i] > highestTemp) {
        highestTemp = tempratures[i];
    }
}
console.log("highest temprature is: ", highestTemp);
// question 9
// question 10
var array = [1, -2, -2, 4, 5]; // array to give to function
function countPositiveNumber(arr) {
    var positiveElement = 0;
    for (var i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            positiveElement++;
        }
    }
    return positiveElement;
}
countPositiveNumber(array); // calling the function
//question 11
var wordsArr = ["apple", "banana", "apricot"];
function returnAletterArray(array) {
    var wordA = [];
    for (var i = 0; i < array.length; i++) {
        var word = array[i];
        if (word.toLowerCase().startsWith("a")) {
            wordA.push(word);
        }
    }
    return wordA;
}
var result = returnAletterArray(wordsArr);
console.log(result); // Output: ["apple", "apricot"]
// question 12
var fruits = ["apple", "anar", "peach", "mango", "apple"];
for (var i = 0; i < fruits.length; i++) {
    if (i > 0) {
        console.log(fruits[i]);
    }
}
//  question 13
var normalNum = [1, 2, 3, 4, 4, 45, 5, 7, 8, 9];
function getSquareNumber(normal) {
    for (var i = 0; i < normal.length; i++) {
        normal[i] = normal[i] * normal[i];
    }
    return normal;
}
console.log(getSquareNumber(normalNum));
//  question 14
function reverseArray(num) {
    var last = num.length - 1;
    var start = 0;
    var swap;
    while (start < last) {
        swap = num[start];
        num[start] = num[last];
        num[last] = swap;
        start++;
        last--;
    }
    return num;
}
console.log(reverseArray(normalNum));
