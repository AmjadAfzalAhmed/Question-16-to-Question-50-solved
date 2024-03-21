let magicians: string[] = ['Amjad','Furqan','Hayyan'];

let magiciansCopy:string[] = magicians;

let newMagicians:string[]= [];
for (let i = 0; i < magicians.length; i++){
    newMagicians.push(` Great ${magicians[i]}`);
}

console.log(`${magiciansCopy}`);//displays the original names of the magicians outside an array
console.log(magiciansCopy); // displays the original magicians array
console.log(newMagicians); // displays the new array with addition of Great word


