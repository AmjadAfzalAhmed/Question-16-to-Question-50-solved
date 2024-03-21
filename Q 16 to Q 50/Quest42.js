"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ['Amjad', 'Furqan', 'Hayyan'];
let add = 'Great Magician : ';
function addGreat(add, magicians) {
    return magicians.map((element => add + element));
}
let dispResult = addGreat(add, magicians);
console.log(dispResult);
