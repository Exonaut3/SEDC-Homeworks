let table = document.getElementById(`table`);
let counter = 1;
let numberOfRows = parseInt(prompt(`Insert the number of colums you'd like`));



if (numberOfRows) {

    let numberofColums = parseInt(prompt(`Insert the number of rows you'd like`));
    let trStart = `<tr>`;
    let token;
    let trEnd = `</tr>`;
    let combiner = ``;
    let a = 1;
    if (numberofColums) {
        for (let n = 1; n < (numberofColums + 1); n++) {
            for (let i = 1; i < (numberOfRows + 1); i++) {
                token = `<td>||Row ${n} Colum ${i}||</td>`
                combiner = `${combiner}` + `${token}`;
            }
            table.innerHTML += `${trStart} ${combiner} ${trEnd}`
            combiner = ``;
        }
        console.log(table);
    }
    else if (isNaN(numberofColums)) {
        alert(`You have either canceled or inserted an invalid value, try again`);
    }

    else {
        alert(`You have either canceled or inserted an invalid value, try again`);
    }
}
else if (isNaN(numberOfRows)) {
    alert(`You have either canceled or inserted an invalid value, try again`);

}
else {
    alert(`You have either canceled or inserted an invalid value, try again`);
}


