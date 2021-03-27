/**
 * 5. Write a JavaScript program to rotate the string 'w3resource' in right 
 *    direction by periodically removing one letter from the end of the string 
 *    and attaching it to the front.
 * 
 */


const stringStore = document.getElementById('x');

let text = [...stringStore.textContent];

let length = text.length;

setInterval(() => {
    let removed = text.pop()
    stringStore.textContent = text.join('');
    text.unshift(removed);
    stringStore.textContent = text.join('');
}, 2000);
