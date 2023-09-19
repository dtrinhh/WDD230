const options = {month: "long", day: "numeric", year: "numeric"};
document.getElementById("currentdate").textContent = new Date().toLocaleDateString("en-US", options);

const todaysdate = new Date();

document.getElementById("currentyear").innerHTML = new Date().getFullYear();

alert(document.lastModified);