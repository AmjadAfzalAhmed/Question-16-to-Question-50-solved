let users:string[] = ['admin','amjad','afzal','ahmed'];

users.forEach(greets =>{
    if (greets === "admin"){
        console.log(`Hello ${users[0]} Welcome to the modern learning`);
    }
    else{
        console.log(`Hello ${greets} Welcome to the modern learning`);
    }
});
