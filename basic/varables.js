const accountId = 14455 ;
let acountEmail = "sandeep@google.com" ;
var accountPassword = "12345";
acountCity = "jaipur";
let accountState ;



// accountId = 2; not allowed

acountEmail = "sandeep@gmail.com";
accountPassword ="987654321";
acountCity = "hyderabad";


// console.log(accountId);

/*
prefer not use var  beacuse of issue in  block scope and functional scope
*/

console.table([accountId,accountPassword,acountCity,acountEmail,accountState])