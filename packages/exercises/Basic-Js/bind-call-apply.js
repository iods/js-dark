const normalPerson = {
    firstName : 'Abul',
    father : "Babul",
    salary : 25000,
    chargeBill : function(amount){
        let charge = this.salary - amount;
        console.log(charge);
        return charge;
    }
}
// normalPerson.chargeBill(5000);
const heroPerson = {
    firstName : 'Rahim',
    father : "Karim",
    salary : 25000
}

// var heroBillCharge = normalPerson.chargeBill.bind(heroPerson);
// heroBillCharge(1000);
// console.log(heroBillCharge(1000));

var x = normalPerson.chargeBill.call(heroPerson,10000);
console.log(x);
// for 'C'all , we need to pass arguments with 'C'oma

var y = normalPerson.chargeBill.apply(heroPerson,[200]);
console.log(y);
// for apply 'A'pply, we need to pass arguments in an 'A'rray