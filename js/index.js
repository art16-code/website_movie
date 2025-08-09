
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

 date.innerHTML = `<a href="movie.html"><div class="card custom-card my-3 p-3" data-index="${element.index}">
 <img src="${element.image}">
 <h4>${element.name}</h4>
 <p class="raiting d-flex justify-content-around">${star(element.raiting)}</p>
 </div> </a>`
 
var movie = document.getElementsByClassName("custom-card");
Array.from(movie).forEach( (item)=>{
    item.addEventListener("click",function(){
        localStorage.setItem("movieSelected",this.getAttribute("data-index"))

        
    })
})
 allMovies.appendChild(date);
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

