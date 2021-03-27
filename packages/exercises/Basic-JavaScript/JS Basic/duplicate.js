var names = [10, 10, 5, 5, 11, 15, 5, 5, 10, 19];
var unique=[];
for(let i=0 ; i < names.length;i++){
    var element = names[i];
    var index = unique.indexOf(element);
    if( index== -1){
        unique.push(element);
    }
}
console.log(unique);