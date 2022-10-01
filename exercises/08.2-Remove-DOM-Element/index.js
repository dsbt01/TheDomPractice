let list = document.querySelector("#parentLi");
let childs = list.childNodes; 

console.log(childs);

let elementToDelete = childs[3];
elementToDelete.parentNode.removeChild(elementToDelete);