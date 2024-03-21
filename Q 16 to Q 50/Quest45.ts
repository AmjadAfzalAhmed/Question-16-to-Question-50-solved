let cars = {
    make: "honda",
    model: 2024
    susp: "automatic"
}//this is a sample object

// first described the object 
function createNewCar(make,susp,model){
    return{make,susp,model};
}//here the function is described that takes input as per given elements

let car = createNewCar("Honda","Automatic",2024);//function is run here
console.log(car);// result displayed
