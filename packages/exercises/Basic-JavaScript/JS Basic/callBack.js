function explain_callback(name, age, task) {
    console.log('Hello', name);
    console.log('Your Age', age);
    // let value = task();
    task();
}

function washHand() {
    console.log('Wash hand with soap');
    // return 10 + 15;
}

function takeShower() {
    console.log('Take Shower');
}

function scrollFacebook() {
    console.log('Use facebook');
}


// explain_callback('Tamkin', 25, washHand);
// explain_callback('Rahman', 22, takeShower);
explain_callback('Toufiqur', 22, scrollFacebook);