var data;
fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
  data = jsonData;
  filteredMovies();
});
 var film = document.getElementById("movie");

 function filteredMovies() {
  var cat = localStorage.getItem("categories");
  film.innerHTML = "";
   var filterData = data.filter(item =>item.categories.some(category => category.includes(cat)));

  display(filterData, film)
}
