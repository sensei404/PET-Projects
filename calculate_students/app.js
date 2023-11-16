let table = document.getElementById("myTable");
let resultsDiv = document.getElementById("results");

async function loadJSON() {
    try {
        let response = await fetch('students.json');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Ошибка при загрузке данных:', error);
        return [];
    }
}

function populateTable(data) {
    for (let i = 0; i < data.length; i++) {
        let row = table.insertRow(-1);
        for (let key in data[i]) {
            let cell = row.insertCell();
            cell.innerHTML = data[i][key];
        }
    }
}

function calculate() {
    let sum = 0;
    let count = 0;

    for (let i = 1; i < table.rows.length; i++) {
        for (let j = 1; j <= 3; j++) {
            let cellValue = parseInt(table.rows[i].cells[j].innerHTML);
            sum += cellValue;
            count++;
        }
    }

    let average = sum / count;

    resultsDiv.innerHTML = "Общая сумма оценок: " + sum + "<br>Средний балл: " + average.toFixed(2);
}

loadJSON().then(data => {
    populateTable(data);
    calculate();
});