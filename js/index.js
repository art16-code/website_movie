
var allMovies = document.getElementById("allMovies");
fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
    display(jsonData);
 
});
function display(show){
show.forEach(element => {
 var date = document.createElement("div");
 date.classList.add("col-lg-3","col-md-4","col-sm-6");
 date.innerHTML = `<div class="card">
 <img src="${element.image}">
 <h4>${element.name}</h4>
 </div>`
 console.log(element.name);
 allMovies.appendChild(date);
});
  
}

