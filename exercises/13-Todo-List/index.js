// Your code here
var elementTextBox = document.getElementById("addToDo");
elementTextBox.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
        let liElem = document.createElement('li');
        let spamElement = document.createElement('span');

        var trashIcon = document.createElement("i");
        trashIcon.className="fa fa-trash";
      

        spamElement.appendChild(trashIcon);

        liElem.appendChild(spamElement);

        liElem.appendChild(document.createTextNode(elementTextBox.value));
        
        let aList = document.getElementsByTagName ('ul')[0];
        aList.append(liElem);
        elementTextBox.value = "";
 		    event.preventDefault();
     }
});

let ulElement = document.getElementsByTagName ('ul')[0];
ulElement.addEventListener('click', function(e) {
  let liElement = null;

  for(let i =0; i < e.path.length ; i++)
  {
    if (e.path[i].nodeName === "LI")
    {
      liElement = e.path[i];
      break;
    }
  }
  liElement.parentNode.removeChild(liElement);
})