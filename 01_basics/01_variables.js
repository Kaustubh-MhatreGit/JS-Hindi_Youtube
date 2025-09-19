const accountID = 144553
let accountEmail = "kaustubh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" 
let accountState

// accountID = 2

accountEmail = "mhatre@gmail.com"
accountPassword = "21212121"
accountCity = "Mumbai"
console.log(accountID);

console.table([accountID, accountEmail, accountPassword, accountCity, accountState])
console.log(typeof accountCity, typeof accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
