console.log("This is DOM");

/*
DOM:Document Object Model.
- it is nothing but the tree model of the contents of your document in hierarchy. It is a representation of the various components of the browser and the current Web document that can be accessed or manipulated using JavaScript.
- The window object is at the top of the hierarchy. The second one is the document object. The HTML document that gets loaded into a window becomes a document object. The third one is the forms. Everything enclosed in the <form>...</form> tags sets the form object. And the last one is the Form control elements. The form object contains all the elements defined for that object, such as input fields, buttons, radio buttons, and checkboxes.
*/

/* DOM Properties:-
- With the Document Object Model (DOM), we can create and build documents, add, modify, or delete elements and content.

The syntax for accessing the DOM properties is:

document.property_name

Property                             Description

1.document.anchors          It will return all <a> elements that have a name attribute

2.document.baseURI          It will return the absolute base URI of the document

3.document.body             It will return the <body> element

4.document.cookie           It will return the document's cookie

5.document.doctype          It will return the document's doctype

6.document.documentElement  It will return the <html> element

7.document.documentMode     It will return the mode used by the browser

8.document.documentURI      It will return the URI of the document

9.document.embeds           It will return all HTML <embed> elements

10.document.forms           It will return all HTML <form> elements

11.document.head            It will return the HTML <head> element

12.document.images          It will return all HTML <img> elements

13.document.implementation  It will return the DOM implementation

14.document.links           It will return all HTML <area> and <a> elements that have a href attribute

15.document.scripts         It will return all HTML <script> elements

16.document.title           It will return the <title> element

17.document.URL             It will return the complete URL of the document
*/

let a = document;
a = document.all;
a = document.body;
// a = document.forms[0];
Array.from(a).forEach(function(element){
    console.log(element);
})