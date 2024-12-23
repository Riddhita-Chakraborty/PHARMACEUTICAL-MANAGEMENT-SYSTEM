// Dummy data for customers
let customers = [];

document.getElementById("addCustomerForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const customerName = document.getElementById("customerName").value;
    const customerPhone = document.getElementById("customerPhone").value;

    const newCustomer = { name: customerName, phone: customerPhone };
    customers.push(newCustomer);

    displayCustomers();
    this.reset();
});

function displayCustomers() {
    const tableBody = document.getElementById("customerTable").querySelector("tbody");
    tableBody.innerHTML = "";
    customers.forEach((customer, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${customer.name}</td>
            <td>${customer.phone}</td>
            <td><button onclick="deleteCustomer(${index})">Delete</button></td>
        `;
        tableBody.appendChild(row);
    });
}

function deleteCustomer(index) {
    customers.splice(index, 1);
    displayCustomers();
}

displayCustomers();
