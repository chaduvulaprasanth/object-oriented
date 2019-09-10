// factory way of writing code
function createUser(name,score = 0){
    var obj = {};
    obj.name = name;
    obj.score = score;
    obj.increment = () => {return obj.score++};
    obj.decrement = () => {return obj.score--};
    return obj;
}
var prasanth = createUser("prasanth",5);
prasanth
// output is {name: "prasanth", score: 5, increment: ƒ, decrement: ƒ}
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.decrement()
prasanth.decrement()
prasanth.decrement()
prasanth 
// output is {name: "prasanth", score: 6, increment: ƒ, decrement: ƒ}


// using dunder proto 
function createUser(name,score = 0){
    var obj = {};
    obj.__proto__.increment = () => {return obj.score++};
    obj.__proto__.decrement = () => {return obj.score--};
    obj.name = name;
    obj.score = score;
    return obj;
}
var prasanth = createUser("prasanth",5);
prasanth
// output is {name: "prasanth", score: 5}
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.decrement()
prasanth.decrement()
prasanth.decrement()
prasanth
// output is {name: "prasanth", score: 6}


// using Object.create
function createUser(name,score = 0){
    var obj = Object.create({
        increment: () => {return obj.score++},
        decrement: () => {return obj.score--}
    });
    obj.name = name;
    obj.score = score;
    return obj;
}
var prasanth = createUser("prasanth",5);
prasanth
// output is {name: "prasanth", score: 5}
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.decrement()
prasanth.decrement()
prasanth.decrement()
prasanth
// output is {name: "prasanth", score: 6}

// using this 
function createUser(name,score = 0){
    var obj = Object.create({
        increment: function(){return this.score++},
        decrement: function() {return this.score--}
    });
    obj.name = name;
    obj.score = score;
    return obj;
}
var prasanth = createUser("prasanth",5);
prasanth
// output is {name: "prasanth", score: 5}
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.increment()
prasanth.decrement()
prasanth.decrement()
prasanth.decrement()
prasanth
// output is {name: "prasanth", score: 6}



// given task data: name,blanace,username and function: changeName,incrementBalance, decrementBalance, changeUsername

// factoryway of writing code
function userAccount(name,username,balance = 0){
    var accountDetails = {};
    accountDetails.name = name;
    accountDetails.username = username;
    accountDetails.balance = balance;
    accountDetails.changename = (changename) => {return accountDetails.name = changename};
    accountDetails.incrementBalance = () => {return accountDetails.balance++};
    accountDetails.decrementBalance = () => {return accountDetails.balance--};
    accountDetails.changeusername = (changeusername) => {return accountDetails.username = changeusername};
    return accountDetails;
}
var sam = userAccount("sam","radha")
sam
// output is {name: "sam", username: "radha", balance: 0, changename: ƒ, incrementBalance: ƒ, …}
sam.changename("krishna")
sam
// output is {name: "krishna", username: "radha", balance: 3, changename: ƒ, incrementBalance: ƒ, …}
sam.incrementBalance()
sam.incrementBalance()
sam.incrementBalance()
sam.incrementBalance()
sam.decrementBalance()
sam
// output is {name: "sam", username: "radha", balance: 3, changename: ƒ, incrementBalance: ƒ, …}
sam.changeusername("mukunda")
sam
// output is {name: "krishna", username: "mukunda", balance: 3, changename: ƒ, incrementBalance: ƒ, …}