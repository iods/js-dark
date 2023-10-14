

// factory functions
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    return this;
}

const circle = new Circle(1);

const circles = {
    diameter: 4
}

circles.radius = 5;

console.log(circles);