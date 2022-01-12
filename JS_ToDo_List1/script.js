function getAndUpdate() {
    console.log("Updating List...");
    tit = document.getElementById('title').value;
    descri = document.getElementById('description').value;
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        itemJsonArray.push([tit, descri]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        itemJsonArray.push([tit, descri]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    update();
}
function update() {
    if (localStorage.getItem('itemsJson') == null) {
        itemJsonArray = [];
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
    }
    else {
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
    }

    // Displaying into Table
    let tablebody = document.getElementById("tablebody");
    let str = "";
    itemJsonArray.forEach((element, index) => {
        str += `
            <tr>
            <th scope="row">${index + 1}</th>
            <td>${element[0]}</td>
            <td>${element[1]}</td>
            <td><button class="btn btn-success" onclick="deleted(${index})">Delete</button></td>
            </tr>`;
    });
    tablebody.innerHTML = str;


}
add = document.getElementById("add");
add.addEventListener("click", getAndUpdate);
update();

//for Delete
function deleted(itemIndex) {
    if (confirm("Do you want to delete it?")) {
        console.log("Delete", itemIndex);
        itemJsonArrayStr = localStorage.getItem('itemsJson');
        itemJsonArray = JSON.parse(itemJsonArrayStr);
        //Delete Item index from array
        itemJsonArray.splice(itemIndex, 1)

        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray));
        update();
    }
}

function clearList() {
    if (confirm("Do you want to clear all list?")) {
        console.log("Clearing The List");
        localStorage.clear();
        update();
    }
}
