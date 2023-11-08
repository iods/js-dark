/* 
    Events : 
        1] Click Event
        2] Keyboard Event
*/

// Click Events :-
// 1] click
const btn1 = document.querySelector("#btn-click");
btn1.addEventListener('click', ()=>{
    alert("The button is clicked");
})

// 2] Double click
const btn2 = document.querySelector("#btn-dblclick");
btn2.addEventListener('dblclick', ()=>{
    alert("The button is double clicked");
})
// 3] Mouse Down
const btn3 = document.querySelector("#btn-mousedown");
btn3.addEventListener('mousedown', ()=>{
    alert("The button is clicked down");
})
// 4] Mouse Up
const btn4 = document.querySelector("#btn-mouseup");
btn4.addEventListener('mouseup', ()=>{
    alert("The button is clicked up");
})
// 5] Mouse Enter
const btn5 = document.querySelector("#btn-mouseenter");
btn5.addEventListener('mouseenter', ()=>{
    alert("The mouse enter in button area");
})
// 6] Mouse Enter
const btn6 = document.querySelector("#btn-mouseleave");
btn6.addEventListener('mouseleave', ()=>{
    alert("The mouse leaves the button area");
})
// 7] Mouse Move
const btn7 = document.querySelector("#btn-mousemove");
btn7.addEventListener('mousemove', ()=>{
    alert("The mouse moved to the button area");
})
// 8] Context Menu for right click
const btn8 = document.querySelector("#btn-contextmenu");
btn8.addEventListener('contextmenu', ()=>{
    alert("Right buttom of mouse is clicked");
})



// 2] Keyboard Events
// document.addEventListener('keydown', (event)=>{
//     alert(`Key pressed down is : ${event.key}`);
// })

// document.addEventListener('keyup', (event)=>{
//     alert(`Key pressed up is : ${event.key}`);
// })

// document.addEventListener('keypress', (event)=>{
//     alert(`Key is pressed : ${event.key}`);
// })

// Keydown with modifiers
document.addEventListener('keydown', (event)=>{
    if(event.ctrlKey && event.key==="v"){
        alert("Ctrl + V is Clicked");
    }
})