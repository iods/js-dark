var speech = "I am a good person. I love programming a lot";
var word = 0;
for(let i=0 ; i<speech.length;i++){
    if(speech[i]==" "){
        word=word+1;;
    }
}
console.log(word+1);