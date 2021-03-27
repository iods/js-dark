var marks = [45, 81, 63, 98, 56, 35, 23];
var min = marks[0];
for (let i = 0; i < marks.length; i++) {
    var element = marks[i];
    if(element < min){
        min = element;
    }
}
console.log(min);