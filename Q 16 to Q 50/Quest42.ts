let magicians: string[] = ['Amjad','Furqan','Hayyan'];
let add:string = 'Great Magician : ';

function addGreat (add, magicians) {
    return magicians.map((element => add + element)); 
}
let dispResult = addGreat(add,magicians);
console.log(dispResult);

