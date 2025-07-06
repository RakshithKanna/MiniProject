function showCustomerInfo() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;

  // Step 1: Get the table body
  const table = document.getElementById("customerTable").getElementsByTagName("tbody")[0];

  // Step 2: Insert a new row and two cells
  const newRow = table.insertRow();
  const nameCell = newRow.insertCell(0);
  const phoneCell = newRow.insertCell(1);

  // Step 3: Fill the cells with user input
  nameCell.textContent = name;
  phoneCell.textContent = phone;

  // Step 4: Clear the form fields
  document.getElementById("name").value = "";
  document.getElementById("phone").value = "";
}
