console.log('testing');

// if the hour is between 6am and 12pm (good morning)
// if the hour is between 12pm and 6pm (good afternoon)
// else is when everything has been executed.
//  goodnight

let hour = 10;

if (hour >= 6 && hour < 12)
	console.log('good morning')
else if (hour >= 12 && hour < 18)
	console.log('good afternoon')
else
	console.log('goodnight!');

// no limitation of conditions
// 

for (let i = 1; i <= 5; i++) {

	if (i % 2 !== 0) console.log(i);
}

for (let i = 1; i <= 5; i++) {
	console.log(i);
}

let x = 0;
while (x <= 5) {
	if (x % 2 !== 0) console.log(x);
	x++;
}

let y = 7;
do {
	if (y % 2 !== 0) console.log(y);
	y++;
} while (y <= 5);

