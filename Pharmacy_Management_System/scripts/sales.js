// Dummy data for sales (you can replace this with a database in a real app)
let sales = [];

document.getElementById("addSaleForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const saleCustomerName = document.getElementById("saleCustomerName").value;
    const saleDrugName = document.getElementById("saleDrugName").value;
    const saleQuantity = document.getElementById("saleQuantity").value;

    const newSale = { customer: saleCustomerName, drug: saleDrugName, quantity: saleQuantity };
    sales.push(newSale);

    displaySales();
    this.reset();
});

function displaySales() {
    const tableBody = document.getElementById("salesTable").querySelector("tbody");
    tableBody.innerHTML = "";
    sales.forEach((sale, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${sale.customer}</td>
            <td>${sale.drug}</td>
            <td>${sale.quantity}</td>
            <td><button onclick="deleteSale(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteSale(index) {
    sales.splice(index, 1);
    displaySales();
}

displaySales();
