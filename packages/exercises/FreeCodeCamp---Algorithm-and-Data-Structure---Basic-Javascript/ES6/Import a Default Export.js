/*
In the last challenge, you learned about export default and its uses. To import a default export, you need to use a different import syntax. In the following example, add is the default export of the math_functions.js file. Here is how to import it:

import add from "./math_functions.js";
The syntax differs in one key place. The imported value, add, is not surrounded by curly braces ({}). add here is simply a variable name for whatever the default export of the math_functions.js file is. You can use any name here when importing a default.

In the following code, import the default export from the math_functions.js file, found in the same directory as this file. Give the import the name subtract.

You should properly import subtract from math_functions.js.
*/

import subtract from "./math_functions.js";
// Only change code above this line

subtract(7,4);

//notice that subtract is a fallback (default export) of math_functions.js so it doesn't have {} around the imported value like when you normally import stuff.