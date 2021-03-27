console.log("html element selectors in DOM");

/*
Different types of selectors:

Gets              Selector Syntax          Method

1.ID                  #name               getElementById()

2.Class               .name               getElementsByClassName()

3.Tag                  name               getElementsByTagName()

4.Selector (single)	     -                querySelector()

5.Selector (all)         -                querySelectorAll()
*/

//There are two type of selectors in javascript:
// 1.Single element selectors 
// 2.multi element selectors

/*
Single Element Selectors:
1.selecting element by id:
- SYNTAX:
document.getElementById(elementID);
*/

var x = document.getElementById("demo");
x.style.color = "red";
x.className;//The className property sets or returns the class name of an element
x.childNodes;//The childNodes property returns a collection of a node's child nodes.
x.parentNode;//The parentNode property returns the parent node of the specified node.
x.innerText = 'JavaScript Tutorial';//The innerText property sets or returns the text content of the specified node.
x.innerHTML = '<b>Rohit is a good boy</b>';// The innerHTML property sets or returns the HTML content of an element.

/*
2.query selector:
- It will return the first element that matches the specified CSS selector in the document. 
*/
document.querySelector('#myclass');
document.querySelector('.myclass');
document.querySelector('li');

/*
Multi element selectors:used to select multiple elements within a document.
1.queryselectorSAll():
- It will return a list of the document's elements that match the specified group of selectors. The querySelectorAll() method returns all elements in the document as a static NodeList object. The NodeList object represents a collection of nodes. The nodes can be accessed by index numbers. The index starts at 0.
*/
document.querySelectorAll('.heading')

/*
2.getElementsByTagName():
- We can also select HTML elements with their tag name by using getElementsByTagName() method. This method returns an array-like object of all child elements with the given tag name.
*/
let mytag = document.getElementsByTagName('article');
for (let i = 0; i < mytag.length; i++) {
mytag[i].style.border = '1px solid blue';
}

/* 
3.getElementsByClassName():
- Using getElementsByClassName() method., we can get all the elements with a given class name. 
SYNTAX:
document.getElementsByClassName(class_name);
*/
let a = document.getElementsByClassName("demo").length;//finding no. of elements with class "demo" using length property of objects.
console.log(a);