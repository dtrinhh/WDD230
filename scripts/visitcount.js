const visitdisplay = document.querySelector(".visits");

/* might be numVisits-ls INSTEAD of totalvisits-ls)*/
let totalvisits = Number(window.localStorage.getItem("totalvisits-ls")) || 0;

if (totalvisits > 0) {
    visitdisplay.textContent = totalvisits;
} else {
    visitdisplay.textContent = "First timer? You should come around more often. :) ";
}

totalvisits++;

/* might be numVisits-ls INSTEAD of totalvisits-ls)*/
localStorage.setItem("totalvisits-ls", totalvisits);