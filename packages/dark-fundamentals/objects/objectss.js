'use strict';
/*
 * @TODO write description about how.
 *
 */

function classifyObjects() {

  let objectName = prompt("Please enter the object name.");
  console.log(objectName);

  let color = prompt("Enter the color.");
  let size = prompt("Enter the size.");
  let shape = prompt("Enter the shape.");
  let weight = prompt("Enter the weight.");

  let classification = "";

  if (color === "red" || color === "blue" || color === "green") {
    classification += `${color} is relevant to the object specifications.\n`;
  } else {
    classification += `${color} is irrelevant to the object specifications.\n`;
  }

  if (size === "small" || size === "medium" || size === "large") {
    classification += `${size} is relevant to the object specifications.\n`;
  } else {
    classification += `${size} is irrelevant to the object specifications.\n`;
  }

  if (shape === "triangle" || shape === "circle" || shape === "square") {
    classification += `${shape} is relevant to the object specifications.\n`;
  } else {
    classification += `${shape} is irrelevant to the object specifications.\n`;
  }

  if (weight === "light" || weight === "heavy") {
    classification += `${weight} is relevant to the object specifications.`;
  } else {
    classification += `${weight} is irrelevant to the object specifications.\n`;
  }

  console.log("Classification:");
  console.log(classification);
}

classifyObjects();
