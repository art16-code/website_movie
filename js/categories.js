fetch("./data.json")
.then((response) => response.json())
.then((jsonData) =>{
    display(jsonData);
  
 
});

var categories = localStorage.getItem("categories");
console.log(categories);
 function display(jsonData) {
 var filterData = jsonData.filter(item =>item.categories.includes(categories));
console.log(filterData);
  
}

