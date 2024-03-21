"use strict";
// Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can only invite two guests.
// Sometimes plans change, and you'll need to adjust your guest list. Removing guests from your list 
// is straightforward but should be done thoughtfully.
Object.defineProperty(exports, "__esModule", { value: true });
let invitees = ['Amjad', 'Adeel', 'Furqan', 'Hayyan', 'Ali Mustafa', 'Haider']; //actual list
console.log(invitees);
let removedGuests = invitees.slice(0, 3); //creates new list of removed guests
for (let i = 0; i < removedGuests.length; i++) {
    console.log(`I am sorry Mr. ${removedGuests[i]} the dinner is cancelled.`);
} // iterates meassge to the removed guests
let cutList = invitees.slice(3, 6); // it creates a new list of guests who are invited
cutList.forEach(invited => {
    console.log(`Mr. ${invited} ,even though the dinner is limited, but you are still invited. `);
}); //iterates invitation message to shortlisted guests
