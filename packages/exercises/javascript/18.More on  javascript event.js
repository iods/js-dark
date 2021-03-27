console.log("More about javascript event")

let btn = document.getElementById('btn');
btn.addEventListener('click',func1);
btn.addEventListener('dblclick',func2);
btn.addEventListener('mousedown',func3);

function func1(e){
    console.log('single click',e);
    e.preventDefault(); // to prevent the default functioning of an event() . SYNTAX: event_type.preventDefault() or e.preventDefault() 
} 
 
function func2(e){
    console.log('double click event',e);
    e.preventDefault();
}

function func3(e){
    console.log("mousedown",e);//when any mouse button is pressed this event is fired.

}
document.querySelector('.container').addEventListener('mouseenter',function(){
      console.log("you entered the container");
});
document.querySelector('.container').addEventListener('mouseleave',function(){
      console.log("you exited the container");
});
document.querySelector('.container').addEventListener('mousemove',function(e){
      console.log("you triggered the mouse move event");
      document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},184)`;
});


