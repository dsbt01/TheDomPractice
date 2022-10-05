// Your code here
var element = document.getElementById("addToDo");
element.addEventListener("keypress", function(event) {
	 if (event.key === "Enter") {
 		alert(event.key);
 		event.preventDefault();
     }
});