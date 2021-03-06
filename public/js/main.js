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
    console.log(item.type);
    div.innerHTML += `<tr>
    <td>${item.type}</td>
    <td>${item.colour}</td>
    <td>${item.material}</td>
    <td>${item.brand}</td>
    <td>
    <button name="itemId" value="${item._id}">Delete</button>
    </form>
    </td>
    </tr>`; 
};

})