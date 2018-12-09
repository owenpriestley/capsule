/* eslint-env jquery, browser */
$(document).ready(() => {



/* 
Get list of items
*/

// Get item list from API
var xhttp = new XMLHttpRequest();
xhttp.open("GET", '/wardrobe/itemList', false);
xhttp.setRequestHeader("Content-type", "x-www-form-urlencoded");
xhttp.send();

// Parse itemList
var response = JSON.parse(xhttp.responseText);
console.log(response);

// Print list to body
var div = document.getElementById('itemList');

for (item of response) {
    div.innerHTML += `<p>${item[0].material} ${item[0].type}</p>`; 
};
})