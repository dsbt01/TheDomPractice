let list = document.querySelector("#parentLi");
let childs = list.children; 

let elementToDelete = childs[1];
elementToDelete.parentNode.removeChild(elementToDelete);