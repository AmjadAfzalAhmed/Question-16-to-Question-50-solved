"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mainArr = [
    { make: "HP", model: "EliteBook", year: 2024 },
    { make: "Dell", model: "Latitude", year: 2024 },
    { make: "Lenovo", model: "Thinkpad", year: 2024 }
]; // firstly created an array of three objects with different laptops
//the following method is used to destructure an array 
let [newVar, newVar1, newVar2] = mainArr; //this will destructure the array to new variables 
console.log(newVar); //displays the properties of first laptop
console.log("");
console.log(newVar1); //displays the properties of second laptop
console.log("");
console.log(newVar2); //displays the properties of third laptop
