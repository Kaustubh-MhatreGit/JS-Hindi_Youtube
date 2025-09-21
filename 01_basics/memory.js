// Memory - Stack and Heap
// Stack (Primitive), Heap(Non-Primitive)
//Stack - Jab bhi stack memory use hoti hai to jab bhi appan use use karte hai tab appan ko uska copy milta hai
//Heap - Jab bhi Heap memory use hoti hai to jab bhi appan usko use karte hai tab reference milta hai that means agar changes kiya to original valurs me change hota hai.

let myYoutubename = "Kaustubhdotcom"
// let anothername = myYoutubename

let anothername = "ChaiAurCode"

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "Kaustubhcet",
    upi: "iser@ybl"
}

console.log(userOne);

let userTwo = userOne
userTwo.email = "mhatrecet"

console.log(userOne.email);
console.log(userTwo.email);


//For better understanding to to video again, Notes itself can't provide full understanding....JavaScript by ChaiAurCode video no 10 Stack and Heap

