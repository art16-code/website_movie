
var categories = document.getElementsByClassName("dropdown-item");
Array.from(categories).forEach( (item)=>{
item.addEventListener("click",function(){
var text = this.innerHTML.toLowerCase();
localStorage.setItem("categories",text);
});

})