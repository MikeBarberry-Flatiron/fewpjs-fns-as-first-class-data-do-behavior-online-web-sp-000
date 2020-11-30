/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet (time) {
  if (time < 12) {
    return "Good Morning"
  } else if (time > 12 && time < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

console.log(greet(15))
/* Write your implementation of displayMessage() */
