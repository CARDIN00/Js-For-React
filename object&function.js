const account = {
  address : "0x1234567890abcdef1234567890abcdef12345678",

  balance : 100,
  //hold function in object
  showDetail: function(){
    console.log(`address: ${this.address}, balance: ${this.balance}`);
  }
};

account.showDetail();