let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here
let select = document.getElementById('mySelect');

for (var i = 0; i < countries.length; i++){
    var opt = document.createElement('option');
    opt.value = countries[i].toLowerCase();
    opt.innerHTML = countries[i];
    select.appendChild(opt);
}

select.addEventListener('change',function(e){
    alert(e.target.selectedOptions[0].text);
});