function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let newArr = [];

  var getOP = function(obj) {
    let r = earthRadius + obj.avgAlt
    let t = Math.round(2*Math.PI*Math.sqrt(Math.pow(r,3)/GM))
    let newObj = {}
    newObj.name = obj.name;
    newObj.orbitalPeriod = t;
    newArr.push(newObj)
  }

  arr.map(each => {
    getOP(each)
  })

  return newArr;
}

orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

//T = 2*pi*sqrt(r^3/GM) where r = earthRadius+avgAlt

// Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

// The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

// You can read about orbital periods on Wikipedia.

// The values should be rounded to the nearest whole number. The body being orbited is Earth.

// The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.