
// speed limit = 70
// every 5 over, 1 pt
// Math.floor(1.4)
// 12 points -> license suspended

const speedLimit = 70;
const perPoint = 5;

checkSpeed(50)

function checkSpeed(speed) {

	if (speed <= speedLimit)
		console.log('ok!');
	else {
		let points = Math.floor((speed - speedLimit) / perPoint);
		if (points >= 12)
			console.log('suspended');
		else
			console.log('points', points);
	}


	console.log(speedLimit, speed);
}