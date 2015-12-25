var numb = 5;

(function (numb){

    var table  = document.getElementById('table');
    var counter = 0;
    for (var i = 1; i < numb; i++){

        var row = table.insertRow(i);

        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);

        counter++;
        cell1.innerHTML = "NEW CELL" + counter;
        counter++;
        cell2.innerHTML = "NEW CELL" + counter;
    }

}(numb));