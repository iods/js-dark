
// factory function

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    }
};

function createCircle(radius){
    return{
        radius,
        draw: function(){
            console.log('draw');
        }
    };
}

circle.draw();