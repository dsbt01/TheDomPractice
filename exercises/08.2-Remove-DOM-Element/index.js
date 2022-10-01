let list = document.querySelector("#parentLi");
let childs = list.childNodes; 

let elementToDelete = childs[2];
elementToDelete.parentNode.removeChild(elementToDelete);