"use strict";
// Intentional Error: Try to produce an array index error in one of your programs. Correct the error before
// finishing. Array index errors happen when you try to access a position in the array that doesn’t exist.
// Experimenting with this helps you understand array boundaries.
Object.defineProperty(exports, "__esModule", { value: true });
let cars = ["Suzuki Swift", "Hyundai", "Audi"];
console.log(cars[3]); //this will produce undefined value, as there is nothing positioned at index # 03
cars.push("Toyota"); //here I have inserted new data to the index 03 of the array
console.log(cars);
