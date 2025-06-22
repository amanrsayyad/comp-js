const accountId = 12558;
let accountEmail = "amanrsayyad@gmail.com";
var accountPassword = "123456";
accountCity = "Satara";

// accountId = 2; not allowed

accountEmail = "ars@gmail.com";
accountPassword = "ars@123";
accountCity = "Pune";

// console.log(accountId);

/* 
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity]);
