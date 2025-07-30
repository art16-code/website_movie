fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
    display(jsonData);
  
 
});

var categories = localStorage.getItem("categories");
console.log(categories);
 function display(jsonData) {
 var filterData = jsonData.filter(item =>item.categories.some(category => category.includes(category)));
console.log(filterData);
  filterData.forEach(item =>{
   var div  = document.createElement("div");
   div.classList.add("col-lg-3","col-md-4","col-sm-6");
   div.innerHTML =`<div class=" card custom-card my-3 p-3">
   <img src="${item.image}">
   <h4>${item.name}</h4>
   </div>`
   var film = document.getElementById("movie");
   film.appendChild(div);
  })
}

