//  1. Access element with ID "title" and update its innerText

// document.getElementById("title").innerText = "Welcome to JavaScript!";

//  2. Select all elements with class "card" and change background of third one

// let cards = document.getElementsByClassName("card");
// if (cards.length >= 3) {
//     cards[2].style.backgroundColor = "lightgray";
// }

//  3. Use querySelector to select the first <h2> and make text italic

// document.querySelector("h2").style.fontStyle = "italic";

//  4. Change innerHTML of element with ID "info"

// document.getElementById("info").innerHTML = '<u>Click here</u>';

//  5. Function to set font size of "heading" to 40px

// function enlargeHeading() {
//     document.getElementById("heading").style.fontSize = "40px";
// }

//  6. Event listener for hover on "hoverBtn" to change "box" background

// document.getElementById("hoverBtn").addEventListener("mouseover", function() {
//     document.getElementById("box").style.backgroundColor = "orange";
// });

//  7. Click "hideBtn" to hide paragraph with ID "description"

// document.getElementById("hideBtn").addEventListener("click", function() {
//     document.getElementById("description").style.display = "none";
// });

// 8. Click "showBtn" to show paragraph again

// document.getElementById("showBtn").addEventListener("click", function() {
//     document.getElementById("description").style.display = "block";
// });

// 9. Select all <li> and change last one's text to "Done"

// let liItems = document.getElementsByTagName("li");
// if (liItems.length > 0) {
//     liItems[liItems.length - 1].innerText = "Done";
// }

// 10. Using querySelectorAll for elements with class "highlight" and set text color

// document.querySelectorAll(".highlight").forEach(el => {
//     el.style.color = "purple";
// });

