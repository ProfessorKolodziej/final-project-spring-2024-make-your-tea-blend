// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)

function changeWhiteBackgroundColor() {
    document.getElementsByClassName("dot")[0].style.backgroundColor = "#FDFEE3";
    document.getElementById("comment").innerHTML = "White tea is good for spring and summer.";
    document.getElementById('arrows').style.display = "block";
 }

function changeYellowBackgroundColor() {
    document.getElementsByClassName("dot")[0].style.backgroundColor = "#FFD84D";
    document.getElementById("comment").innerHTML = "Yellow tea is good for spring and summer.";
    document.getElementById('arrows').style.display = "block";

 }

 function changeRooibosBackgroundColor() {
    document.getElementsByClassName("dot")[0].style.backgroundColor = "#D31F1F";
    document.getElementById("comment").innerHTML = "Rooibos tea is good for fall and winter.";
    document.getElementById('arrows').style.display = "block";

 }

 function changeBlackBackgroundColor() {
    document.getElementsByClassName("dot")[0].style.backgroundColor = "#301705";
    document.getElementById("comment").innerHTML = "Black tea is good for fall and winter.";
    document.getElementById('arrows').style.display = "block";

 }