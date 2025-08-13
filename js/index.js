fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
 display(jsonData, allMovies)
});
var allMovies = document.getElementById("allMovies");
