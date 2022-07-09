// Code your solutions in this file
/*for(let age = 30; age < 40; age++){
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl!`);
    }

    return gifts;
}

wrapGifts(gifts); */

let messages = [];

function writeCards(names, eventName) {

    for(let i = 0; i < names.length; i++){
        messages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)
    
    } 

    return messages;
}

//writeCards(names, "birthday");



function countDown(int){
    let start = int
    while(start != -1){
        console.log(start--)
    }
}

countDown(5);