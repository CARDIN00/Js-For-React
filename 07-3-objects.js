const account = {
  address :"0x1234567890abcdef1234567890abcdef12345678",

  balance : 100,
  isActive : true
};

console.log("address is:", account.address);
console.log("balance is: ",account.balance);
//updating to the object
account.balance = 200;

//deleting from object
delete account.balance;
console.log(account);

