var data;
fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
data = jsonData;
});
var left = document.getElementById("leftSide");

var select = localStorage.getItem("movieSelected");
function display(){
    data.forEach(  =>)
}

