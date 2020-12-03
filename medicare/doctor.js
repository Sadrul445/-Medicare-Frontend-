  // Get the modal
  var modal = document.getElementById('id01');
        
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  // Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
if (event.target == modal) {
    modal.style.display = "none";
}
}

function validateForm() {
var x = document.forms["docForm"]["email"]["psw"]["psw-repeat"].value;
if (x == "") {
alert("Name must be filled out");
return false;
}
}
//Find Your Doctor toUpperCase() can find out the doctors name letter when it is not case Sensitive 
function searchbar() {
var input, filter, h2, div, p, i; 
input = document.getElementById("Search");
filter = input.value.toUpperCase();
h2 = document.getElementById("doctorsData");
div = h2.getElementsByTagName("div");
for (i = 0; i < div.length; i++) {
p = div[i].getElementsByTagName("p")[0];
if (p.innerHTML.toUpperCase().indexOf(filter) > -1) {
div[i].style.display = "";
} else {
div[i].style.display = "none";
}
}
}