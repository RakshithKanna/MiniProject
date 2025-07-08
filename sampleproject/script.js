let form = document.getElementById("billForm");
let table = document.getElementById("billTable");
let totalDisplay = document.getElementById("grandTotal");
let grandTotal = 0;

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let product = document.getElementById("product").value;
  let qty = parseInt(document.getElementById("qty").value);
  let price = parseFloat(document.getElementById("price").value);
  let total = qty * price;

  grandTotal += total;
  totalDisplay.innerText = grandTotal.toFixed(2);

  let row = document.createElement("tr");

  row.innerHTML = `
    <td>${product}</td>
    <td>${qty}</td>
    <td>${price}</td>
    <td>${total}</td>
    <td><button onclick="deleteRow(this, ${total})">Delete</button></td>
  `;

  table.appendChild(row);
  form.reset();
});

function deleteRow(btn, rowTotal) {
  grandTotal -= rowTotal;
  totalDisplay.innerText = grandTotal.toFixed(2);
  let row = btn.parentElement.parentElement;
  row.remove();
}
