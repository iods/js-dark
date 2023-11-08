// Event Bubbling
// When elements receive events, such events propagate to their parents and ancestors upward in the DOM tree. 
// This is the concept of Event Bubbling, and it allows parent elements to handle events that occur on their children's elements.
const e1 = document.getElementById("event1");
const e2 = document.getElementById("event2");
const e3 = document.getElementById("event3");

e1.addEventListener('click', () => {
    alert("Event-1 was clicked");
})

e2.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Event-2 was clicked");
})

e3.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Event-3 was clicked");
})

// Event Capturing 
// In event capturing, an event propagates from the outermost element to the target element.
// It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements. 
// Capturing happens before bubbling.
const c1 = document.getElementById("cap1");
const c2 = document.getElementById("cap2");
const c3 = document.getElementById("cap3");

c1.addEventListener('click', (event) => {
    alert("Event-1 was clicked");
},false)

c2.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Event-2 was clicked");
}, false)

c3.addEventListener('click', (event) => {
    event.stopPropagation();
    alert("Event-3 was clicked");
},true)

