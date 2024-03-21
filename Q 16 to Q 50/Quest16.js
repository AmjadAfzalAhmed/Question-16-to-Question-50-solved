"use strict";
// More Guests: You've found a bigger dinner table, so there's room for more guests.
// When you have more space, you can add more guests to your list. You can add guests at 
// the beginning, middle, and end of an array.
Object.defineProperty(exports, "__esModule", { value: true });
let bigDine = ["Amjad", "Furqan", "Hayyan", "Ali Mustafa"]; //guest list
console.log(`\n The Dinner Table is now bigger!\n `);
bigDine.unshift('Adeel'); //adding new guest name to the initial position i.e.(0)
bigDine.push("Haider"); //here we added the guest name to last position
console.log(bigDine);
for (let i = 0; i < bigDine.length; i++) {
    console.log(`Hello! welcome to complimentary dinner ${bigDine[i]}`);
}
