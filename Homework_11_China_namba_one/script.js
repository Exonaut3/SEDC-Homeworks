
let year = prompt("Insert a year (WHOLE NUMBER) so I can calculate its damn chinese zodiac sign");




function ricePicker() {

    let jackieChan = (parseInt(year) - 4) % 12;
    if (jackieChan == 0) {
        alert("You're a disgusting rat");
    }
    else if (jackieChan == 1) {
        alert("You're an ox (na makedonski, (((vol))) )");
    }
    else if (jackieChan == 2) {
        alert("https://i.redd.it/ib4ervln8pt01.jpg");
    }
    else if (jackieChan == 3) {
        alert("You're a cute bunny (mu reklo magareto na zajakot, (((imash golemi ushi)))");
    }
    else if (jackieChan == 4) {
        alert("You're a dragon, practically the best at everything and like really handsome (I'm biased)");
    }
    else if (jackieChan == 5) {
        alert("You're a snake, also your chinese zodiac is a snake");
    }
    else if (jackieChan == 6) {
        alert("You're a horse ");
    }
    else if (jackieChan == 7) {
        alert("You're a goat, but you're not THE G.O.A.T.(Greatest Of All Time)");
    }
    else if (jackieChan == 8) {
        alert("You look like a monkey and you probably smell like one too");
    }
    else if (jackieChan == 9) {
        alert("You're a rooster, cock, if you will.");
    }
    else if (jackieChan == 10) {
        alert("You're a dog, you probably wear a leash in the bedroom when you do the devils tango");
    }
    else if (jackieChan == 11) {
        alert("You're a pig, also your chinese zodiac is a pig. Just watch your waistline ");
    }
    
    else if (isNaN(jackieChan)) {
        alert("ARE YOU RETARDED OR SOMETHING??? INSERT A  (((NUMBER))). CAN YOU NOT FIND THAT ON YOUR KEYBOARD??? HIT REFRESH AND TRY AGAIN DUMBASS.");

    }

    else {

    }
}

if (year < 0) {
    alert("We don't do BC around these parts, try again.")
}
else if (year >= 0 && year < 4 && Number(year)) {
    alert(">.> pick another number damn you")
}
else if (year == 0){
    alert(">.> pick another number damn you");
}
else {

}



ricePicker();