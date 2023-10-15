const input = document.querySelector("#favchap");

const button = document.querySelector("button");

const list = document.querySelector("#list");

button.addEventListener("click", function() {
	let bom = input.value;
	input.value = "";
	
	  let itemList = document.createElement("li");

  let itemText =
  document.createElement("span");

  let itemBtn =
  document.createElement("button");

  itemList.appendChild(itemText);
  itemText.textContent = bom;

  itemList.appendChild(itemBtn);
  itemBtn.textContent = "❌";

  list.appendChild(itemList);
		input.focus();
	itemBtn.addEventListener("click", function() {
		list.removeChild(itemList);
		input.focus();
	})	
})