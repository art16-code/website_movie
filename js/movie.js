var data;
fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
data = jsonData;
display();
});
var left = document.getElementById("leftSide");

 var select = parseInt( localStorage.getItem("movieSelected"));
console.log(select);
function display(){
    data.forEach(items=>{
console.log(items.index);
    if( select == items.index){
        
     left.innerHTML = `<img src="${items.image}">
     <h4>${items.name}</h4>
     <p class="raiting movie d-flex justify-content-around">${star(items.raiting)}</p>
     `
    }

        
    })
}

