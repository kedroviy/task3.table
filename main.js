var arr = [[ "", "", "",]]
   ;var table = '';
    var rows = 7;
    var cols = 11;
    for (var r = 0; r < rows; r++) {
        table += '<tr>';
        for (var c = 1; c <= cols; c++) {
            table += '<td>' + c + '</td>';
        }
        table += '</tr>';
    }

    document.write('<table border="1">' + table + '</table>');


