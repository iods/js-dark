let pLan = ["JavaScript","Python","Node.JS","Ract.JS","Express.JS","Next.JS"];

// pLan.forEach(element => {
//      console.log(`${element} is Programming Language`);
// });

pLan.forEach((language) => {
     // console.table(language);
})
/* JavaScript
Python
Node.JS
Ract.JS
Express.JS
Next.JS */

// params can pass in forEach (items,index,array)
pLan.forEach((value, index, array) =>{
     // console.log(value, index, array);
     // Output => JavaScript 0  [Whole Array]
})

const language = [
     {
          language: "JavaScript",
          shortNote : 'JS'
     },
     {
          language: "Python",
          shortNote : 'py'
     }
]

language.forEach((item,index) => {
     // console.log(item, ':' ,index);
     // Access the language 
     // console.log(item.language, ':', index);
     // Access the ShortNote
     // console.log(item.shortNote,':',index);
})
/* JavaScript : 0
JS : 0
Python : 1
py : 1 */