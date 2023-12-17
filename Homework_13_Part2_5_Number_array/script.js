
let arrayOfFiveNumbers = [1, 45, 6, 7, 8]
function sum() {
    let m = 0;
    for (i = 0; i < arrayOfFiveNumbers.length; i++) {
        m = m + arrayOfFiveNumbers[i];
    }
    console.log(m);
}


sum();


let wackArray = [69, -43, "6000000", 0, "awooga", 420, 1337];


function validateNumber(parameter) {

    if (isNaN(parameter[i])){
        console.log(`${parameter[i]} is not a number.`);
    }
    else {
        console.log(`${parameter[i]}`);
    }
}




console.log(`-------------------------`);

for (i=0; i < wackArray.length; i++){
    validateNumber(wackArray);
}


//somnitelno, neznam dali treba 6000000 da stavi deka e string ili ne
//sekoj slucaj, funkcijata e povikana 5 pati so I did my part 
//plus nikade ne vika deka treba da gi spojam 
