//function printabcde() {
    //console.log("abcde");
//}

//printabcde();

//let x = 100
//let y = 200
//let q = x + y
//console.log(q)

//function celciusToFahrenheit(celcius) {

  //  const convertedTemparature = ((celcius * 1.8) + 32)
  //  return `${convertedTemparature} degree fahrenheit`
  //  }
  //  console.log(celciusToFahrenheit(28))


function increseByHalf (number1) {

    return (number1*1.5)
}

console.log(increseByHalf(20))
/*
function printMessage(x) {
    console.log("Hello, nice to meet you " + x);
}

function getMessage(name) {
    return "Hello, nice to meet you " + name;
}

printMessage("Mitch");
printMessage("August");
getMessage("Laetitia");



//const circleArea1 = (radius) => {
  //  return radius * 2 * Math.pi;

const summen = (a,b,c) => {
    return a + b + c
}
console.log(summen(10 + 5, 20, 30))

*/
/*
const emoji = (a, b) => {

    return  a + b
}
console.log(emoji("Chris" ,"🚀"))

//const sumOfNumbers = adder(4, 4);
const uppercasestring = "kea";
console.log(uppercasestring.toUpperCase());

let firstLetterOfLastName = "";
const lastName = "Lovelace";

firstLetterOfLastName = lastName[3];
console.log(firstLetterOfLastName)

 */

const user = {
    name: 'Chris',
    age: 24,
    email: 'testmail@hotmail.com',
    gender: 'M',
    computer: 'Windows',

}
console.log(user.gender)

let kitten = {
    ageMonths: 3,
    isFemale: true,
    furColour: "brown",
};
// your code here

console.log(kitten.ageMonths)
console.log(kitten.isFemale)
console.log(kitten.furColour)

const dog = {
    name: "Rex",
    wantsToPlay: true,
};

console.log(dog.name);
console.log(dog.wantsToPlay);


const astronautsInSpace = {
    people: [
        {
            name: "Oleg Artemyev",
            craft: "ISS"
        },
        {
            name: "Denis Matveev",
            craft: "ISS"
        },
        {
            name: "Sergey Korsakov",
            craft: "ISS"
        },
        {
            name: "Kjell Lindgren",
            craft: "ISS"
        },
        {
            name: "Bob Hines",
            craft: "ISS"
        },
        {
            name: "Samantha Cristoforetti",
            craft: "ISS"
        },
        {
            name: "Jessica Watkins",
            craft: "ISS"
        },
        {
            name: "Cai Xuzhe",
            craft: "Tiangong"
        },
        {
            name: "Chen Dong",
            craft: "Tiangong"
        },
        {
            name: "Liu Yang",
            craft: "Tiangong"
        }
    ],
    message: "success"
}
const austronoutpeople =astronautsInSpace.people
const lastperson = austronoutpeople.pop()
console.log(astronautsInSpace.people.length)
console.log(lastperson.craft)
console.log(astronautsInSpace.people.shift().name.substr(5,11 ))

function tempreture (a) {

    if (a > 10) {
        return ('shorts and T-shirt');
    } else {
        return ('jacket and jeans');
    }
}

console.log(tempreture(15))
//tempreture(18);
/*
let diceValue = Math.floor(Math.random()*6)
var UJustHit6 = 5;
if(typeof UJustHit6 == 5){
    document.write(UJustHit6 + "U just hit 6");
}


console.log(diceValue)

 */



function GameOfDice(numberOfTimes) {
    let Hits6InEveryRoll = 0;
    for (let i = 1; i <= numberOfTimes; i++) {
        let logOut6 = Math.floor(Math.random() * 6) + 1;
        console.log(logOut6)
        if (logOut6 === 6) {
            Hits6InEveryRoll  = Hits6InEveryRoll  + 1;
            console.log("you hit 6!");
        }
    }
    if (Hits6InEveryRoll  === numberOfTimes) {
        console.log("jackpot");
    }
}
GameOfDice(1);

const positive = true;
    if(positive) {
        console.log("score")
    }

const negative = true;


for (let i = 90; i <= 100; i++) {
    console.log(i);
}

    for (let i = 0; i < 10; i++) {
        console.log("Hello again world")
    }

    const numbers = [1, 34, 77];
    for(let i =0; i < numbers.length; i++){
        console.log(numbers.length)
    }

const numbers1 = [1, 34, 77, 88, 1];
for(let i =0; i < numbers.length; i++){
    console.log(numbers.length)
}
arrayNames = ['Azra', 'Peter', 'Nadine'];
for (let i = 0; i < arrayNames.length; i++) {
    console.log(arrayNames[i].toUpperCase())
}

arrayNames = ['yellow', 'green', 'blue', 'red', 'black', 'pink'];
    console.log(arrayNames[0]);
    console.log(arrayNames[4]);

const prices = [100,300,489,532,34]
console.log(prices[prices.length - 1]);

const firstElement = prices[0];
const lastElement = prices[prices.length - 1];

if(firstElement > lastElement){
    console.log("first is bigger");
}

let sum = 0;
for (let i  = 0; i < prices.length; i++){
    sum += prices[i];
}
console.log(sum)
const average = sum / prices.length;
console.log(average);

const cat = {
    Name: "Mittens",
    Age : 5,
    color : "black",
    hunger : "True",
    gender : "female",
}
console.log(cat.Age, cat.Name, cat.color, cat.hunger, cat.gender)

function cat1 (age) {
    console.log("Jhon" + age)
}

cat1(7);

function catNames(names) {
    let firstCat = "Jhon"
    let secondCat = "Milton"
    let thirdCat = "Carl"
    let fourthCat = "Bill"
    return [firstCat, secondCat, thirdCat, fourthCat];
}

console.log(catNames());

function getFemale(Female) {
const cat1 = {
    Name: "Jill",
    Age: 2,
    Gender: "Female",
}
const cat2 = {
    Name: "Jack",
    Age: 2,
    Gender: "Male",
}
const cat3 = {
    Name: "Jane",
    Age: 4,
    Gender: "Female",
}
if (Gender === "female");
}