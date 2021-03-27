function isPrime(n) {
    if(n==2){
        return true;
    }
    else if(n > 1){
        for (let i = 2; i < n; i++){
            if(n%i != 0){
                return true;
            }
            else if(n== i * i ){
                return false;
            }
            else{
                return false;
            }
        }
    }
    else{
        return false;
    }
}
console.log(isPrime(57));
