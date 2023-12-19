document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let birthdate = document.getElementById("birthdate").value;
    let gender = document.querySelector('input').value;
    let tableContainer = document.getElementById("table-container");
    let table = document.createElement("table");
    let headerRow = document.createElement("tr");
    let headers = ["Ім'я", "Прізвище", "Дата народження", "Стать", "Місто", "Адреса", "Мови"];

    for (var i = 0; i < headers.length; i++) {
        var headerCell = document.createElement("th");
        headerCell.textContent = headers[i];
        headerRow.appendChild(headerCell);
    }

    table.appendChild(headerRow);

    let dataRow = document.createElement("tr");

    let nameCell = document.createElement("td");
    nameCell.textContent = name;
    dataRow.appendChild(nameCell);

    let surnameCell = document.createElement("td");
    surnameCell.textContent = surname;
    dataRow.appendChild(surnameCell);

    let birthdateCell = document.createElement("td");
    birthdateCell.textContent = birthdate;
    dataRow.appendChild(birthdateCell);

    let genderCell = document.createElement("td");
    genderCell.textContent = gender;
    dataRow.appendChild(genderCell);

    let cityCell = document.createElement("td");
    cityCell.textContent = document.getElementById("city").value;
    dataRow.appendChild(cityCell);

    let addressCell = document.createElement("td");
    addressCell.textContent = document.getElementById("address").value;
    dataRow.appendChild(addressCell);

    let languagesCell = document.createElement("td");
    let languages = document.querySelectorAll('input[name="languages"]:checked');
    let languagesArray = Array.from(languages).map(function(language) {
        return language.value;
    });
    languagesCell.textContent = languagesArray.join(", ");
    dataRow.appendChild(languagesCell);

    table.appendChild(dataRow);

    tableContainer.innerHTML = "";
    tableContainer.appendChild(table);
});