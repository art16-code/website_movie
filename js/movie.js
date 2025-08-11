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

 



