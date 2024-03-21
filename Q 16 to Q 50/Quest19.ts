// Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the 
// number of people you are inviting to dinner. Arrays have a length property that tells you how many items
// are in the list. Use this to inform your guests how big the party will be.
let invited:string[] = ['Amjad', 'Adeel','Furqan','Hayyan','Ali Mustafa','Haider'];//guest list defined
let guestNumber:Number = invited.length;//describing the length of guest list

invited.forEach(guest =>{
    console.log('Mr.',guest, 'I have invited a total' , guestNumber, 'number of guests')
});// the loop to display message to guests informing a toatl number of guests