let date:Number[] = [1,2,3,4,5]
let suffix:string[] = ["st","nd","rd","th","th"];


let suffixed = [];
for (let i = 0; i < date.length && i < suffix.length; i++) {
    suffixed.push(`${date[i]}${suffix[i]}`);
}

console.log(suffixed);