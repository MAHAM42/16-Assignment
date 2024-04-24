//ASSIGNMENT NO 16:

import { Console } from "console";

/*
More Guests: You just found a bigger dinner table, so now more space is available.
 Think of three more guests to invite to dinner.

• Start with your program from Exercise 15.
 Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 
• Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.
*/

console.log("ASSIGNMENT NO 16:");

let guestArr : string[] = ["Eman", "Maha", "Urooj", "Umama"];

let canNotAttend : string = "Urooj"

let newGuest : string = "Ramsha"

guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr)

// guestArr.map((items) =>
// console.log(`Dear ${items}, I found a bigger dinner table so I am invited more people.`)
// );

//Part 2 Began
let guestBeg : string = "Unsa"
guestArr.unshift(guestBeg)
console.log(guestArr)

//Part 3 Middle
let middleGuest : string = "Sara"
let middleIndex = guestArr.length/3
guestArr.splice(middleIndex, 0, middleGuest)
console.log(guestArr)

//Part 4 Append
guestArr.push("Fatima")
console.log(guestArr)

//Part 5 
guestArr.map((items) =>
console.log (`Dear ${items}, you are invited in the more people list on dinner`));

