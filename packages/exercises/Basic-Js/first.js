var ii = 55.4;
// Number to string
ii = ''+ii; 

// String split
ii = ii.split('.');

// String to number
ii = +ii ;
// or
parseInt(ii);

// float position fixing after point

ii.toFixed(4);

console.log( ii );

// Random function generates something always in fraction 0<=x<=1
// so need to be multiplied with 100 if number need to be convertd into 1 to 100
Math.random() 

Math.ceil()
Math.floor()
Math.abs()