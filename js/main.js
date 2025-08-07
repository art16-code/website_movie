
var categories = document.getElementsByClassName("dropdown-item");
Array.from(categories).forEach( (item)=>{
item.addEventListener("click",function(){
var text = this.innerHTML.toLowerCase();
localStorage.setItem("categories",text);
display();
});

});
var movie = document.getElementsByClassName("custom-card");
Array.from(movie).forEach( (item)=>{
    item.addEventListener("click",function(){
        localStorage.setItem("000","qtwte")

        
    })
})
 
