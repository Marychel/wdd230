//Marychel Calip
const list = document.querySelector(".list");
const input = document.querySelector("#favchap");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	let myItem = input.value;
	input.value = "";
	if (myItem.length == 0) {
		alert("Add Chapter");
	} else {
		const listItem = document.createElement("li");
		const listText = document.createElement("span");
		const listBtn = document.createElement("button");

		listItem.appendChild(listText);
		listText.textContent = myItem;
		listItem.appendChild(listBtn);
		listBtn.textContent = "\u274C";
		list.appendChild(listItem);

		listBtn.addEventListener("click", () => {
			list.removeChild(listItem);
		}); //listBtn.addevent
	}
	input.focus();
}); //button.addevent