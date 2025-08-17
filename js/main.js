 var data;
fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
   data = jsonData;
});

function display(source, parent){
    source.forEach(element => {
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
        parent.appendChild(date);
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

var categories = document.getElementsByClassName("dropdown-item");

Array.from(categories).forEach( (item)=>{
    item.addEventListener("click",function(){
        var text = this.innerHTML.toLowerCase();
        localStorage.setItem("categories",text);
        filteredMovies()
    });

});
var search = document.getElementById("search-btn");
var input = document.getElementById("search-inp");
 var film = document.getElementById("movie");
search.addEventListener("click",find);

function find(e){
    e.preventDefault();
  var text = input.value.trim().toLowerCase();
  var  storage = data.filter( movie =>{
    return movie.name.toLowerCase().includes(text);
 
  });

  if( storage.length > 0){
    localStorage.setItem("filteredMovie",JSON.stringify(storage))
  window.location.href = "storage.html";
  
  }else{
    alert("No movie found");
  }
}
input.addEventListener("keydown",function(e){
    if(e.key ==="Enter"){
        find()
    }else{
        return;
    }
})



