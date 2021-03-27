var age = [10, 12, 14, 16, 18, 20];
var me = {
    name: "tamkin",
    age: 25,
    height: 55,
    weight: 65,
    color: "Blue"
}

var lookingFor ="age";
var myAge = me[lookingFor];
me[lookingFor] = 95;
console.log(me);