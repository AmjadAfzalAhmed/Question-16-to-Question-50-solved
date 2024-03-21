let magicians: string[] = ['Amjad','Furqan','Hayyan'];
// console.log(magicians);
function arrayCall(magic){
    magic.forEach((element,index)=>{
        console.log(`The Magician ${element} is positioned at ${index}.`)
    });
}
    
arrayCall(magicians);

export {magicians}