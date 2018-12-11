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
var response = JSON.parse(xhttp.response);

// Print itemList to table
var div = document.getElementById('itemsTable');
for (item of response) {
    div.innerHTML += `<tr>
    <td>${item[0].type}</td>
    <td>${item[0].colour}</td>
    <td>${item[0].material}</td>
    <td>${item[0].brand}</td>
    <td><button name="${item[0].id}" value="${item[0].id}">Delete</button></td>
    </tr>`; 
};

})