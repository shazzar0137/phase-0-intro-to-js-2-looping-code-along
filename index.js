// Code your solutions in this file
//for (let age = 30; age<40; age ++){
    //console.log(`I'm ${age} years old. Happy birthday to me !`);
    //debugger;
//}

//const gifts = ["teddy bear",  "drone", "doll"];
//function wrapGifts(gifts){
 //for (let i=0; i< gifts.length; i++) {
    //console.log(`Wrapped ${gifts[i]} and added a bowl`);
   // debugger;
 //}   
 //return gifts;
//}
//wrapGifts(gifts)

//const cards = ['Guadalupe', 'Ollie', 'Aki']
//function writeCards(cards){
  //  for (let i=0; i< cards.length; i++){
    //    console.log(`Thank you, ${cards} , for the wonderful birthday gift!`);
      //  debugger;
    //}
    //return cards;
//}
//writeCards(cards)

const cards = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(cards) {
    let messages = []; // Create an empty array to store the messages
    for (let i = 0; i < cards.length; i++) {
        messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`); // Store messages in the array
    }
    return messages; // Return the array
}

console.log(writeCards(cards)); // Test output

const numbers = ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0",]
function countDown(numbers){
    let i = 10;
    while (i >= 0){
        console.log (i);
        i--;
    }
}
countDown(numbers)
