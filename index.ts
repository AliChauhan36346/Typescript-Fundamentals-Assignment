

// question 1

console.log("hello world");


// question 2

let temprature=19;

if(temprature<=20)
{
    console.log("Its cold");
}
else
{
    console.log("its not cold");
}


// question 3

let num1,num2;

num1=10;
num2=3;

console.log("apples left are: ", num1-num2);


// question 4

let firstName="ali"
let lastName="abbas"

let fullName=firstName+" "+lastName

console.log(fullName)


// question 5

if(5>3)
{
    console.log("yes")
}
else{
    console.log("no")
}


// question 6

function calculateCircleArea(radius: number)
{
    return 2*3.14*radius;
}

calculateCircleArea(3);


// question 7

for(let i=0; i<=50; i++)
{
    if(i%3==0)//checking if the digit is perfectly divisible to 3
    {
        console.log("Fizz");
    }
    else if(i%5==0)// if digit is no divisible to 3 then check for 5
    {
        console.log("Buzz");
    }
    else{  // printing the number if not divisible to any number
        console.log(i);
    }
}


//  question 8

let tempratures: number[]= [20,34,23,22,33,13];

let highestTemp=tempratures[0];

for(let i=0; i<tempratures.length; i++)
{
    if(tempratures[i]>highestTemp){
        highestTemp=tempratures[i];
    }
}

console.log("highest temprature is: " , highestTemp);


// question 9

// question 10

let array:number[]=[1,-2,-2,4,5]; // array to give to function

function countPositiveNumber(arr:number[]) // function for calculating the positive num
{
    let positiveElement:number=0;

    for(let i=0; i<array.length; i++)
    {
        if(array[i]>0)
        {
            positiveElement++;
        }
    }

    return positiveElement;
}

countPositiveNumber(array); // calling the function


//question 11

let wordsArr: string[] = ["apple", "banana", "apricot"];

function returnAletterArray(array: string[]): string[] {
    let wordA: string[] = [];

    for (let i = 0; i < array.length; i++) {
        let word = array[i];

        if (word.startsWith("a")) {
            wordA.push(word);
        }
    }

    return wordA;
}

const result = returnAletterArray(wordsArr);
console.log(result); // Output: ["apple", "apricot"]



