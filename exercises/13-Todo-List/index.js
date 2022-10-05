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