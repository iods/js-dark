//Quick quiz : create a heading element with text as "Go to CodeWithHarry" and create an a tag outside it with href = "http//www.codewithharry.com"
console.log("QuickQuiz")

//creating heading element
let head = document.createElement('h2');
head.className = "newHead"
head.id = "newHead"
let text = document.createTextNode("Go to CodeWithHarry");
head.appendChild(text);
let select = document.querySelector(".codewithharry")
select.appendChild(head);

//creating tag
let tagName = document.createElement("a")
tagName.innerHTML = "href";
tagName.setAttribute('href','http://www.codewithharry.com');
let add = document.querySelector('.codewithharry');
add.appendChild(tagName)
console.log(tagName)

/*
In this quiz following functions are used:
1.createElement()
2.createTextNode()
3.element.className 
4.element.id 
5.innerHTMl  
6.appendChild()
7.querySelector()
*/