document
.getElementById("search")
.addEventListener("keyup", function(){

let cautare=this.value.toLowerCase();

let randuri=document.querySelectorAll("#listaCereri tr");

randuri.forEach(function(rand){

let text=rand.innerText.toLowerCase();

if(text.includes(cautare))

rand.style.display="";

else

rand.style.display="none";

});

});