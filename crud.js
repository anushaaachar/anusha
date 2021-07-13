var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["email"] = document.getElementById("email").value;
    formData["username"] = document.getElementById("username").value;
    formData["password"] = document.getElementById("password").value;
    formData["cpassword"] = document.getElementById("cpassword").value;
    formData["address"] = document.getElementById("address").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["contact"] = document.getElementById("contact").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.email;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.username;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.password;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.password;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.address;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = data.dob;
    cell8 = newRow.insertCell(7);
    cell8.innerHTML = data.contact;
    cell9 = newRow.insertCell(8);
    cell9.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("cpassword").value = "";
    document.getElementById("address").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("contact").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("email").value = selectedRow.cells[1].innerHTML;
    document.getElementById("username").value = selectedRow.cells[2].innerHTML;
    document.getElementById("password").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cpassword").value = selectedRow.cells[4].innerHTML;
    document.getElementById("address").value = selectedRow.cells[5].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[6].innerHTML;
    document.getElementById("contact").value = selectedRow.cells[7].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.email;
    selectedRow.cells[2].innerHTML = formData.username;
    selectedRow.cells[3].innerHTML = formData.password;
    selectedRow.cells[4].innerHTML = formData.cpassword;
    selectedRow.cells[5].innerHTML = formData.address;
    selectedRow.cells[6].innerHTML = formData.dob;
    selectedRow.cells[7].innerHTML = formData.contact;
    alert("data updated");
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}
function login()
{
    alert("Thank you");
}

