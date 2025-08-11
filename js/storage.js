
var search = document.getElementById("search-btn");
var input = document.getElementById("search-inp");
 var film = document.getElementById("movie");
search.addEventListener("click",find);
function find(){
  var text = input.value.trim().toLowerCase();
  var  storage = data.filter( movie =>{
    return movie.name.toLowerCase().indexOf(text)===0;
 
  });
  if( storage.length > 0){
storage.forEach(element => {
    var div = document.createElement("div");
    div.classList.add("col-lg-4","col-md-6","col-sm-12");
    
});
  }
}
