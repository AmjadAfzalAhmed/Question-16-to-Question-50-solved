function myHobbies (...hobbies){
    for (let i =0; i < hobbies.length; i++)
    console.log(`my hobby is to ${hobbies[i]}`)
}//created function with the help of ...rest parameters to display my hobbies
// and iterated it with message with the help of for loop
myHobbies ("play cricket"," read books","learn new things");