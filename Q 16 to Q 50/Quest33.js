"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let date = [1, 2, 3, 4, 5];
let suffix = ["st", "nd", "rd", "th", "th"];
let suffixed = [];
for (let i = 0; i < date.length && i < suffix.length; i++) {
    suffixed.push(`${date[i]}${suffix[i]}`);
}
console.log(suffixed);
