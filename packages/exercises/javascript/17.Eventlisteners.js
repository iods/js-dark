console.log("Eventlisteners")

// Event-they are the actions that happens in the webpage on clicking a button or submitting a form.
// Each available event has an event handler, which is a block of code that runs when the event occurred. Event handlers are sometimes called event listeners. 


// we can also add event listeners in html as attribute.
//Example:<input value="Click here" onclick="alert('Click here!')" type="button">


/*Event listeners in javascript:
- syntax:element.addEventListeners(Event,function,usecapture)
Event- it is a type of event like onClick and mousedown
The second parameter is the function we want to call when the event occurs.
The third parameter is optional. It is a boolean value specifying whether to use event bubbling or event capturing. 
*/

//practice

document.getElementById('heading').addEventListener('click', function (e) { //here e is the event i.e,'click' here(check this using type object of eventlisteners)
    // console.log("you have clicked the heading");
    let variable;
    variable = e.target;//it will target the html element on which eventlistener is used.after targeting we can perform all the activities as we do with html element in javascript.
    variable = e.target.className;
    variable = Array.from(e.target.classList);

    // variable = e.target.id;
    // variable = e.offsetX; // will show you the position relative to the clicked element along X direction.
    // variable = e.offsetY;// will show you the position relative to the clicked element along Y direction
    // variable = e.clientX;
    // variable = e.clientY;
    // variable = e.code;
    // variable = e.charcode;
    // variable = e.deltaX;// only for mouse events
    // variable = e.deltaY;// only for mouse events
    // variable = e.deltaZ;// only for mouse events
    // variable = e.detail;
    // variable = e.keyCode;
    // variable = e.location;
    // variable = e.pageY;
    // variable = e.pageX;
    // variable = e.screenX;
    // variable = e.screenY;
    // variable = e.shiftKey;
    // variable = e.which;// only for mouse events
    variable = e.view;
    console.log(variable);
    // console.log(e.type +" is the type of the event listeners")
})

/*EVENT PROPERTIES AND METHODS:

Property/Method                        Description

1.altKey               It will return whether the "ALT" key was pressed when the mouse event was triggered.

2.button               It will return which mouse button was pressed when the mouse event was triggered.

3.charCode             It will return the Unicode character code of the key that triggered the onkeypress event.

4.clientX              It will return the horizontal coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

5.clientY              It will return the vertical coordinate of the mouse pointer, relative to the current window, when the mouse event was triggered.

6.code                 It will return the code of the key that triggered the event.

7.deltaX               It will return the horizontal scroll amount of a mouse wheel (x-axis).

8.deltaY               It will return the vertical scroll amount of a mouse wheel (y-axis).

9.deltaZ               It will return the scroll amount of a mouse wheel for the z-axis.

10.detail              It will return a number that indicates how many times the mouse was clicked.

11.keyCode             It will return the Unicode character code of the key that triggered the onkeypress event, or the Unicode key code of the key that triggered the onkeydown or onkeyup event.

12.location            It will return the location of a key on the keyboard or device.

13.pageX               It will return the horizontal coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

14.pageY               It will return the vertical coordinate of the mouse pointer, relative to the document, when the mouse event was triggered.

15.screenX             It will return the horizontal coordinate of the mouse pointer, relative to the screen, when an event was triggered.

16.screenY             It will return the vertical coordinate of the mouse pointer, relative to the screen, when an event was triggered.

17.shiftKey            It will return whether the "SHIFT" key was pressed when an event was triggered.

18.type                It will return the name of the event.

19.which               It will return which mouse button was pressed when the mouse event was triggered.

20.view                 It will return a reference to the Window object where the event occurred.
*/