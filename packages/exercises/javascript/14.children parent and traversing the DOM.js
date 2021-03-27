console.log("childern parent and traversing the DOM");
/*
Node Type:
- thsi property return an integer that identifies what the node is.
Element node - 1
Attribute node - 2
Text node - 3
C0mment node - 8
Document node - 9
Document type node - 10
*/
let cont = document.querySelector('.child').nodeType;
console.log(cont);

//We can traverse the dom in three directions,downwards,upwards and sideways.Each type of traversal uses a different method.

/*
TRAVERSING DOWNWARDS:
- There are two methods to traverse downwards,the first one is queryselector and the second one is chldren.
1.querySelector ro querySelectorAll:
- To traverse downwards from a specific element, we can use querySelector( ) or querySelectorAll( ). 
- The querySelector() returns the first element within the document that matches the specified selector whereas the querySelectorAll() returns the NodeList representing a list of the document's elements that match the specified group of selectors.
*/

const component = document.querySelector('.add')
console.log(component)

/*
2.children:
-The property that lets you select direct descendants is called children .It selects elements that are immediately nested in another element.
*/
const items = document.querySelector('.this')
const items1 = items.children
console.log(items1)

/*
- To return the first and last child of a node, use the" firstChild" and "lastChild" property. The node can be of any node type, including text node, comment node, and element node.
- Similarly, "firstElementChild" and "lastElementChild" return the first and last child Element node, and the "childNodes" returns a live NodeList of all child nodes of any node type of a specified node.
*/
let container = document.querySelector(".container")
console.log(container.children) // consoles html collections(it means that it will consoles all the element of div having class container).
console.log(container.childNodes) // consoles node list(it means that it will consoles all the elements including spaces(often reffered as text)).
console.log(container.firstChild) // consoles first child in most of the case text is shown .
console.log(container.lastChild) // consoles last child in most of the case text is shown text .
console.log(container.firstElementChild) // consoles first element child of the container class div.
console.log(container.lastElementChild) // consoles last element child of the container class div.
console.log(container.lastElementChild.lastElementChild) // consoles last element child of last element of the container .


/*
selecting a specific child:
- While traversing the DOM, we can select the nth-item in the list from both NodeLists and HTML Collections. For this, we use the index of the element. Similarly, we do in the case of the array to select a specific element.
*/
let document1 = document.querySelectorAll("li");
let list1 = document1[0];
let list2 = document1[1];
console.log(list1, list2);

/*
TRAVERSING UPWARD:
- There is one method to traverse upwards: parentElement.
*/
console.log(list1.parentElement)
console.log(list1.parentElement.parentElement)
console.log(list1.parentElement.parentElement.parentElement)
console.log(list1.parentElement.parentElement.parentElement.parentElement)
console.log(list1.parentElement.parentElement.parentElement.parentElement.parentElement)
console.log(list1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement)
console.log(list1.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement) // it will return null value when it does not find any element node as parent.

/*
TRAVERSING SIDEWAYS:
- There are two methods to traverse sideways. One of them is nextElementSibling, and the other one is previousElementSibling.
*/

/*
1.nextElementSibling:
- To select the next element, we use the nextElementSibling. The difference between this property and nextSibling is that nextSibling returns the next sibling node as an element node, a text node or a comment node, while nextElementSibling returns the next sibling node as an element node and ignores the text and comment nodes.
*/
const item1 = document.querySelectorAll('ul')[1];
const item2 = document.querySelectorAll('ul')[0];
console.log(item2.nextElementSibling);// nextElementSibling will consoles null if it found more than one siblings same for previous element sibling.
console.log(item1.nextElementSibling);

/*
2.previousElementSibling:
- To select the previous element, we use previousElementSibling. The difference between this property and previousSibling, is that previousSibling returns the previous sibling node as an element node, a text node or a comment node, while previousElementSibling returns the previous sibling node as an element node and ignores the text and comment nodes.
*/
const item5 = document.querySelectorAll('li')[1]
const item6 = item5.previousElementSibling
console.log(item6)
