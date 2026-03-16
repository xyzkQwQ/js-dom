document.addEventListener("DOMContentLoaded", function () {

    let table = document.createElement("table");
    document.body.appendChild(table);

    let headerRow = table.insertRow();
    let firstCell = headerRow.insertCell();
    firstCell.textContent = "X";

    for (let i = 1; i <= 10; i++) {
        let cell = headerRow.insertCell();
        cell.textContent = i;
    }

    for (let i = 1; i <= 10; i++) {
        let row = table.insertRow();

        let header = row.insertCell();
        header.textContent = i;

        for (let j = 1; j <= 10; j++) {
            let cell = row.insertCell();
            cell.textContent = i * j;

            // Si on est sur la diagonale, on met en gras
            if (i === j) {
                cell.style.fontWeight = "bold";
            }
        }
    }
});