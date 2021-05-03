var table = document.createElement("table");

var tbody = document.createElement("tbody");

var tr = document.createElement("tr");

var td = document.createElement("td");

var label = document.createElement("label");

label.innerHTML = "Frist Name: ";

td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");

var input = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("palceholder", "Add your First Name");
input.setAttribute("id", "FirstName");

td.appendChild(input);
tr.appendChild(td);

td = document.createElement("td");

label = document.createElement("label");

label.innerHTML = "Last Name: ";

td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");

input = document.createElement("input");

input.setAttribute("type", "text");
input.setAttribute("palceholder", "Add your Last Name");
input.setAttribute("id", "LastName");

td.appendChild(input);
tr.appendChild(td);

tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createElement("label");
label.innerHTML = "Gender:";
td.appendChild(label);
tr.appendChild(td);


td = document.createElement("td");
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Male");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Male:";
label.setAttribute("for", "Male");
td.appendChild(label);
tr.appendChild(td);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Female");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Female:";
label.setAttribute("for", "Female");
td.appendChild(label);
tr.appendChild(td);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "NoResponse");
input.setAttribute("id", "NoResponse");
td.appendChild(input);

label = document.createElement("label");
label.innerHTML = "Prefer not to respond:";
label.setAttribute("for", "NoResponse");
td.appendChild(label);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");

label = document.createElement("label");
label.innerHTML = "Email:";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("id", "Email");
input.setAttribute("type", "email");
input.setAttribute("placeholder", "Add your Email Address");
input.setAttribute("id", "Email");
td.appendChild(input);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");

label = document.createElement("label");
label.innerHTML = "Country of Residence:";
td.appendChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
 var select = document.createElement("select");
select.setAttribute("id", "Country");
var option = document.createElement("option");
option.innerHTML = "USA";
select.appendChild(option);
option = document.createElement("option");
option.innerHTML = "Mexico";
select.appendChild(option);
td.appendChild(select);
tr.appendChild(td);
tbody.appendChild(tr);


tr = document.createElement("tr");
td = document.createElement("td");
td.setAttribute("colspan", "4");

var button = document.createElement("button");
button.innerHTML = "Update User Information";

button.onclick = function () {
    var FirstName = document.getElementById("FirstName");
    var LastName = document.getElementById("LastName");
    var Name = FirstName.value + " " + LastName.value;

    var MaleGender = document.getElementById("Male");
    var FemaleGender = document.getElementById("Female");
    var NoResponseGender = document.getElementById("NoResponse");

    var Gender = null;

    if (MaleGender.checked) {
        Gender = "Male";
    } else if (FemaleGender.checked) {
        Gender = "Female";
    } else {
        Gender = "NoResponse";
    }

    var Email = document.getElementById("Email");
    var Country = document.getElementById("Country");
    var user = {
        Name: Name,
        Gender: Gender,
        Email: Email.value,
        Country: Country.value
    };


    fetch('/Home/RegisterUser', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(user)
    }).then(response => response.text())
        .then(data => alert(data));
}



td.appendChild(button);
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);

var div = document.getElementById("RegisterContainer");
div.appendChild(table);