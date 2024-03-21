"use strict";
// Animals: Highlight animals with a common trait.
// Explain & TIP: Looping through an array of animals allows you to comment on each one individually. 
// This teaches you how to personalize messages within a loop based on array items.
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ['Honey Badger', 'Lion', 'Tiger'];
animals.forEach(trait => {
    console.log(`${trait}, is one the bravest animals ever, to exist on earth.`);
});
