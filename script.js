let lists = document.querySelectorAll(".list");
let listItems = document.querySelectorAll(".list-item");

let draggedItem = null;

//Drag item from the list items
//Drag start

for (let item in listItems) {
  if (Object.hasOwnProperty.call(listItems, item)) {
    let listItem = listItems[item];
    listItem.addEventListener("dragstart", function () {
      draggedItem = listItem;
      setTimeout(function () {
        listItem.style.display = "none";
      }, 0);
    });
    //Drag end
    listItem.addEventListener("dragend", function () {
      setTimeout(function () {
        listItem.style.display = "block";
        draggedItem = null;
      }, 0);
    });
  }

  //Dragover list items to another list
  //and changing background color of list

  for (let list in lists) {
    if (Object.hasOwnProperty.call(lists, list)) {
      let listElement = lists[list];
      listElement.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      listElement.addEventListener("dragenter", function (e) {
        e.preventDefault();
        listElement.style.backgroundColor = "#bdbd16";
      });
      listElement.addEventListener("dragleave", function (e) {
        e.preventDefault();
        listElement.style.backgroundColor = "#808000";
      });
      listElement.addEventListener("drop", function () {
        listElement.appendChild(draggedItem);
        listElement.style.backgroundColor = "#808000";
      });
    }
  }
}
