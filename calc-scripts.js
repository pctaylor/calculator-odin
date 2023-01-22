const ans = document.getElementById("answer");
const btnDivs = document.getElementsByClassName("btn");
let currentDiv = null;
for (var i = 0; i < btnDivs.length; i++) {
    btnDivs[i].addEventListener("click", function() {
        if (currentDiv) {
            currentDiv.style.backgroundColor = "";
        }
        this.style.backgroundColor = "rgb(0, 0, 0, 0.5)";
        currentDiv = this;
        const userInput = this.textContent;
        ans.textContent += userInput;
    });
}