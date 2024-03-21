"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.magicians = void 0;
let magicians = ['Amjad', 'Furqan', 'Hayyan'];
exports.magicians = magicians;
// console.log(magicians);
function arrayCall(magic) {
    magic.forEach((element, index) => {
        console.log(`The Magician ${element} is positioned at ${index}.`);
    });
}
arrayCall(magicians);
