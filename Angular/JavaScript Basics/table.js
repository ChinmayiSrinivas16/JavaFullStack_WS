function createTable() {
    let rows = parseInt(document.getElementById("rows").value);
    let cols = parseInt(document.getElementById("cols").value);

    let table = "<table border='1' cellpadding='5'>";

    for (let i = 1; i <= rows; i++) {
        table += "<tr>";
        for (let j = 1; j <= cols; j++) {
            table += "<td>" + (i * j) + "</td>";
        }
        table += "</tr>";
    }

    table += "</table>";

    document.getElementById("result").innerHTML = table;
}