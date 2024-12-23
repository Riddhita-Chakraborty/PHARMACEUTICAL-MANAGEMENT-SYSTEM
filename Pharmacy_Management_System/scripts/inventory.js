// Dummy data for inventory (you can replace this with a database in a real app)
let inventory = [];

document.getElementById("addDrugForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const drugName = document.getElementById("drugName").value;
    const drugPrice = document.getElementById("drugPrice").value;
    const drugStock = document.getElementById("drugStock").value;
    const mfd = document.getElementById("mfd").value;
    const exp = document.getElementById("exp").value;
    const newDrug = { name: drugName, price: drugPrice, stock: drugStock, exp : exp , mfd : mfd };
    inventory.push(newDrug);

    displayInventory();
    this.reset();
});

function displayInventory() {
    const tableBody = document.getElementById("inventoryTable").querySelector("tbody");
    tableBody.innerHTML = "";
    inventory.forEach((drug, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${drug.name}</td>
            <td>${drug.price}</td>
            <td>${drug.mfd}</td>
            <td>${drug.exp}</td>
            <td>${drug.stock}</td>
            <td><button onclick="deleteDrug(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteDrug(index) {
    inventory.splice(index, 1);
    displayInventory();
}

displayInventory();
