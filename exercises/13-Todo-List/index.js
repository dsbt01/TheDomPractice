// Your code here
var element = document.getElementById("addToDo");
element.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
        let elem = document.createElement('li');
        elem.appendChild(document.createTextNode(element.value));
        let aList = document.getElementsByTagName ('ul')[0];
        aList.append(elem);
        element.value = "";
 		event.preventDefault();
     }
});