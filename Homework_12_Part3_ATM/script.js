let money = 1000;
let withdrawal = prompt(`(CURRENT AMMOUNT: ${money}$) How much would you like to withdraw? Please insert a whole number`);
withdrawal = (Math.round(withdrawal * 100) / 100).toFixed(2);




function shekels() {

    if (withdrawal <= money && withdrawal > 0) {
        alert(`You have withdrawn ${withdrawal}$, have a nice day :))))`);
    }
    else if (withdrawal > money) {
        alert("You do not have enough funds, try again :)))");
    }
    else if (isNaN(withdrawal)) {
        alert("Please write it in numbers and not whatever you just wrote :))))")
    }
    else if (withdrawal < 0){
        alert("You need to sever your relationship with negative numbers :))))")
    }
    else {
        alert("Your withdrawal has been canceled, have a nice day :))))");
    }

}


shekels();


//imav else if za nula ako se stavi ali smetam deka ne e losho ako taa vrednost odnese do else alertot.