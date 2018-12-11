/* eslint-env jquery, browser */
$(document).ready(() => {

var dynatableScript = document.createElement('script');
dynatableScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/Dynatable/0.3.1/jquery.dynatable.min.js');
document.head.appendChild(dynatableScript);


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
    <td>${item[0].material}</td>
    <td style="display: none">${item[0].id}</td>
    </tr>`; 
};

})