let niza = [5, 15, 32, 81, 3];
let wackNiza = ["6000000", "retard", 69, 0, "", -420]

function minMax(parameter) {
    let max = -Infinity;
    let min = +Infinity;

    for (i = 0; i < parameter.length; i++) {
        if(isNaN(parameter[i])){

        }
        else{
        if (parameter[i] > max) {
            max = parameter[i];
        }
        else {

        }
        if (min > parameter[i]) {
            min = parameter[i];
        }
        else {

        }
    }
    }
    console.log(`Max: ${parseInt(max)}`);
    console.log(`Min: ${parseInt(min)}`);
    console.log(`Their sum is ${parseInt(min) + parseInt(max)}`);

}




minMax(niza);
console.log('------------------------');
minMax(wackNiza);
