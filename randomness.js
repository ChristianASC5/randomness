//////////////////////
// GLOBAL VARIABLES //
//////////////////////
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const foods = [
    "pizza",
    "burgers",
    "rice and beans",
    "lasagna",
    "macaroni and cheese",
    "baked potatoes"
];
const students = [
    "Bob ",
    "Martin ",
    "Danny ",
    "Mahdi ",
    "Harry ",
    "Sean ",
    "Robert "
];
/////////////////////////////
// END OF GLOBAL VARIABLES //
/////////////////////////////
// randomNumber - should console.log a random number between 0 and 21 (exclusively)
// randomLetter - should console.log a random letter from the alphabet
// Note: you’re given a global variable alphabet that you can use! Keep in mind that strings behave much like arrays - you can use indexing to access individual character. Try it out!
// randomFood - should console.log a random food from the foods array
// Note: you’re given a global variable foods that you can use!
// randomStudent - should console.log a random student from the students array
// Note: you’re given a global variable students that you can use!
// randomGroup - should console.log three random students from the students array
// Hint: feel free to call another function within this one!
// Note: it’s OK if the students in the group are not unique (For example: the same student can show up twice)
// Be sure to test to see if your functions are working as expected by calling them at the end of your script and running the node randomness.js command in your console.
// Remember to add, commit, and push your changes!

function randomNumber(){
    const rand21 = Math.floor(Math.random()*21);
    console.log(rand21);
}

randomNumber();

function randomLetter(){
    const number = Math.floor(Math.random()*26);
    const letter = alphabet.charAt(number);
    console.log(letter);
}

randomLetter();

function randomFood(){
    const index = Math.floor(Math.random()*foods.length);
    const food = foods[index];
    console.log(food);
}

randomFood();

function randomStudent(){
    const index = Math.floor(Math.random()*students.length);
    const studentName = students[index];
    // console.log(student);
}

randomStudent();

let names1 = [];
let group1 = "";
function randomGroup2(){
    while(names1.length < 3){
       randomStudent();
        if(names1.includes(studentName) == false){
            names1.push(studentName);
            group1 = group1 + names[names.length - 1];
        }
    } 
    console.log(group1);
}

randomGroup2();
