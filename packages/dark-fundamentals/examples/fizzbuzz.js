
const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(input) {
	if (typeof input !== 'number')
		return NaN

	if (typeof input !== 'number')
		return 'You are not a member';

	if (input % 3 === 0)
		return 'Fizz';

	if (input % 5 === 0)
		return 'Buzz';

	if ((input % 3 === 0) && (input % 5 === 0))
		return 'FizzBuzz';

	return input;
}

