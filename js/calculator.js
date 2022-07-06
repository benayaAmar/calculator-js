let root = document.getElementById("root");

let calculator = document.getElementById("calculator");

let myButtons = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0"];

calculator.style.width = "1000px";
calculator.style.height = "600px";
calculator.style.backgroundColor = "yellow";
calculator.style.display = "flex";

calculator.style.marginLeft = "30%";
calculator.style.marginTop = "60px";
calculator.style.alignItems = "center";


calculator.innerHTML += "<ul id=my-btn>";

for (x = 0; x < myButtons.length; x++) {
  calculator.innerHTML += '<button class="btns">' + myButtons[x] + "</button>";
}
calculator.innerHTML += "</ul>";

var x = document.getElementsByClassName("btns");
for (var i = 0; i < x.length; i++) {
  x[i].style.width = "50px";
  x[i].style.height = "50px";
  x[i].style.backgroundColor = "grey";
  x[i].style.color = "white";
  x[i].style.margin = "20px";
    x[i].style.fontSize = "20px";
    x[i].style.borderRadius="5px"



}
