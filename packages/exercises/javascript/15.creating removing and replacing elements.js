console.log("creating removing and replacing elements");
//practice
let element = document.createElement('li');
element.className = "childul";
element.id = "createdELement";
// element.innerText = "this is dynamically created list";
// element.innerHTML = "<b>this is dynamically created list</b>";
let text = document.createTextNode("this is a text node");
element.appendChild(text)
let ul = document.querySelector("ul.this");
ul.appendChild(element);

let elem = document.createElement('h3')
let txt = document.createTextNode("this is a new text node")
elem.id = "elem"
elem.className = "elem"
elem.appendChild(txt)
element.replaceWith(elem)

let myul = document.querySelector('ul.this')
myul.replaceChild(element, document.getElementById('fui'));
myul.removeChild(document.getElementById('gui'));

console.log(elem)
elem.setAttribute('title',"myTitle");
elem.removeAttribute("id");
let pr = elem.hasAttribute("title");
console.log(pr);
let pr1 = elem.getAttribute("class");
console.log(pr1);

/*
In this section following DOM functions and other related stuff are used:
1.createElement()
2.createTextNode()
3.innerText
4.innerHTML
5.appendChild
6.replaceWith
7.replaceChild
8.removeChild
9.setAttribute
10.getAttribute
11.hasAttribute
12.removeAttribute
13.querySelector
13.element.className
14.element.id
*/
