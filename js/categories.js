var content;
fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
    
 content = jsonData; 
  display();
});
 var film = document.getElementById("movie");

 function display() {
  var cat = localStorage.getItem("categories");
  film.innerHTML = "";
 var filterData = content.filter(item =>item.categories.some(category => category.includes(cat)));
console.log(filterData);
  filterData.forEach(item =>{
   var div  = document.createElement("div");
   div.classList.add("col-lg-3","col-md-4","col-sm-6");
   div.innerHTML =`<a href="movie.html"><div class=" card custom-card my-3 p-3" data-index="${item.index}">
   <img src="${item.image}">
   <h4>${item.name}</h4>
   <p class="raiting d-flex justify-content-around">${star(item.raiting)}</p>
   </div></a>`
   var movie = document.getElementsByClassName("custom-card");
   Array.from(movie).forEach((films) =>{
    films.addEventListener("click", function(){
      localStorage.setItem("movieSelected",this.getAttribute("data-index"))
    })
   })
  
   film.appendChild(div);
  });
}


function star(raiting){
var rate = "";
var halfStar = raiting % 1 !==0;
var fullStar = Math.floor(raiting);
for(i = 0; i < fullStar;i++){
 rate +=`<i class="bi bi-star-fill"></i>`;
}
if(halfStar){
    rate +=`<i class="bi bi-star-half"></i>`;
}
for(i = fullStar + (halfStar? 1:0);i <= 5;i++){
rate +=`<i class="bi bi-star"></i>`;
}
return rate;


}



