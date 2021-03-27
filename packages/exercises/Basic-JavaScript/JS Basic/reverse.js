function reverseString (str) {
    var reverse="";
    for(var i=0; i<str.length; i++){
        var char= str[i];
        reverse = char + reverse;
    }
    return reverse;
}

var speech = "I am a good person. I love programming a lot";

console.log(reverseString(speech));
