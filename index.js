// i can see entire document strcture
//console.dir(document);
// console.log(document.all[10]);

///get element by id

// let color = document.getElementsByClassName("list-group-item");
// color[2].style.backgroundColor = "green";
// let font = document.getElementById("items");
// font.style.fontWeight = "bold";

// // assignement -2
// Add a new li element without the same class Name

// And try editing it with getelementsbyclassname and then by getelementbytagname

// var item = document.getElementsByClassName("list-group");
// for (let i = 0; i < item.length; i++) item[i].style.backgroundColor = "red";

var items = document.getElementsByTagName("li");

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = "red";
}
// queryselector(1st answer)
// var header = document.querySelector("ul li:nth-child(2)");
// header.style.backgroundColor = "green";

// 2nd answer
// var headerInvisible = document.querySelector("ul li:nth-child(3)");
// headerInvisible.style.color = "white";

//3rd answer
var odd = document.querySelectorAll("li:nth-child(odd)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "red";
}
