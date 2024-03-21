"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lapTop = {
    make: "HP",
    model: "Elite Book",
    year: 2024,
    makeLaptop: function () {
        console.log(`My laptop is ${this.make}, ${this.model}, ${this.year}`);
    } //to take the data inside a function described withing object this method is used
    // and it only takes data from within the context of the object
};
lapTop.makeLaptop();
// In this code an object is created, which carries a function inside, to take the data inisde the function
// we use (this method)
