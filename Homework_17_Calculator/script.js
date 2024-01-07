let numberBox = document.getElementById(`numberBox`);
let numberBox2 = document.getElementById(`numberBox2`)

let zero = document.getElementById(`zero`)
let one = document.getElementById(`one`);
let two = document.getElementById(`two`);
let three = document.getElementById(`three`);
let four = document.getElementById(`four`);
let five = document.getElementById(`five`);
let six = document.getElementById(`six`);
let seven = document.getElementById(`seven`);
let eight = document.getElementById(`eight`);
let nine = document.getElementById(`nine`);

let add = document.getElementById(`add`);
let subtract = document.getElementById(`subtract`);
let multiply = document.getElementById(`multiply`);
let divide = document.getElementById(`divide`);
let equals = document.getElementById(`equals`);
let c = document.getElementById(`c`);
let decimalPlace = document.getElementById(`decimalPlace`);
let ce = document.getElementById(`ce`)


let container = `0`;
let container2 = `0`;

let counter = 1;
let negativeNumberCounter = 0;
let decimalPlaceCounter = 0;

let lastFunction = ``;

numberBox.innerHTML = `0`

decimalPlace.addEventListener(`click`, function () {

    if (decimalPlaceCounter == 0) {
        if (counter == 0) {
            numberBox.innerHTML = ``;
            counter = 1;
            numberBox2.innerHTML = parseFloat(container2)
        }
        if ((numberBox.innerHTML == `0`) || (numberBox.innerHTML == ``)) {
            numberBox.innerHTML = `0.`;
            container = `${container}.`;
            decimalPlaceCounter = 1;
        }
        else {
            numberBox.innerHTML += `.`;
            container = `${container}.`;
            decimalPlaceCounter = 1;
            console.log(container);
        }
    }

})

zero.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {

    }
    else {
        numberBox.innerHTML += `0`;
        container = `${container}0`;
        console.log(container);
    }
})

one.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `1`;
        container = `${container}1`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `1`;
        container = `${container}1`;
        console.log(container);
    }
})


two.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `2`;
        container = `${container}2`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `2`;
        container = `${container}2`;
        console.log(container);
    }
})


three.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `3`;
        container = `${container}3`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `3`;
        container = `${container}3`;
        console.log(container);
    }
})


four.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `4`;
        container = `${container}4`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `4`;
        container = `${container}4`;
        console.log(container);
    }
})


five.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `5`;
        container = `${container}5`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `5`;
        container = `${container}5`;
        console.log(container);
    }
})


six.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `6`;
        container = `${container}6`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `6`;
        container = `${container}6`;
        console.log(container);
    }
})


seven.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `7`;
        container = `${container}7`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `7`;
        container = `${container}7`;
        console.log(container);
    }
})


eight.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `8`;
        container = `${container}8`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `8`;
        container = `${container}8`;
        console.log(container);
    }
})


nine.addEventListener(`click`, function () {
    if (counter == 0) {
        numberBox.innerHTML = ``;
        counter = 1;
        numberBox2.innerHTML = parseFloat(container2).toFixed(2)
    }
    if (numberBox.innerHTML == `0`) {
        numberBox.innerHTML = ``;
        numberBox.innerHTML += `9`;
        container = `${container}9`;
        console.log(container);
    }
    else if (numberBox.innerHTML == `-`) {
        numberBox.innerHTML += `9`;
        container = `${container}9`;
        console.log(container);
    }
    else {
        numberBox.innerHTML += `9`;
        container = `${container}9`;
        console.log(container);
    }
})

add.addEventListener(`click`, function () {
    if ((container > 99999999999999999) || (container2 > 99999999999999999) || (container < -99999999999999999) || (container2< -99999999999999999)) {
        alert(`ERROR: Number is too large`);
        clear()

    }else{
    if (lastFunction == `add`) {
        container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;

        lastFunction = `add`;
        counter = 0;
        decimalPlaceCounter = 0;

    }
    else if (lastFunction == `subtract`) {  
        if (container < 0) {
            container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `add`;
            decimalPlaceCounter = 0;
            console.log(`iffica`);
        }
        else {
            container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `add`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    else if (lastFunction == `multiply`) {
        console.log(container);
        console.log(container2);
        container2 = ((parseFloat(container2) * parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;
        lastFunction = `add`;
        counter = 0;
        decimalPlaceCounter = 0;
        console.log(`aaaaaaaaa`);
    }
    else if (lastFunction == `divide`) {

        if (container == 0) {
            alert(`Error`);
            clear()

        }
        else {
            container2 = ((parseFloat(container2) / parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    if (container || container == 0) {
        container2 = (parseFloat(container2) + parseFloat(container)).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        decimalPlaceCounter = 0;
        container = `0`;
        lastFunction = `add`
    }
    else if (container < 0) {
        container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `subtract`;
        decimalPlaceCounter = 0;

    }
    else {
        alert(`Error`)
        clear()

    }}
})


subtract.addEventListener(`click`, function () {
    if ((container > 99999999999999999) || (container2 > 99999999999999999) || (container < -99999999999999999) || (container2< -99999999999999999)) {
        alert(`ERROR: Number is too large`);
        clear()

    }else{
    if (container === `0`) {
        numberBox2.innerHTML = parseFloat(container2).toFixed(2);
        lastFunction = `subtract`;
        numberBox.innerHTML = `-`;
        container = `-${container}`;
        decimalPlaceCounter = 0;


    }
    if (lastFunction == `add`) {
        container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;

        lastFunction = `subtract`;
        counter = 0;
        decimalPlaceCounter = 0;

    }
    else if (lastFunction == `subtract`) {  //tuka turi else if za negativni broevi <3
        if (container < 0) {
            container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            decimalPlaceCounter = 0;
            console.log(`iffica`);
        }
        else {
            container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    else if (lastFunction == `multiply`) {
        console.log(container);
        console.log(container2);
        container2 = ((parseFloat(container2) * parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;
        lastFunction = `subtract`;
        counter = 0;
        decimalPlaceCounter = 0;
        console.log(`aaaaaaaaa`);
    }
    else if (lastFunction == `divide`) {

        if (container == 0) {
            alert(`Error`);
            clear()

        }
        else {
            container2 = ((parseFloat(container2) / parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }

    if ((container2 === `0`)) {
        container2 = ((parseFloat(container2) - parseFloat(container)) * (-1)).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `subtract`
        decimalPlaceCounter = 0;

    }
    else if (container < 0) {
        container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        decimalPlaceCounter = 0;
    }

    else if (container) {
        container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `subtract`;
        decimalPlaceCounter = 0;

    }

    else {
        alert(`Error`)
        clear()


    }}
})


multiply.addEventListener(`click`, function () {
    if ((container > 99999999999999999) || (container2 > 99999999999999999) || (container < -99999999999999999) || (container2< -99999999999999999)) {
        alert(`ERROR: Number is too large`);
        clear()

    }else{
    if (lastFunction == `add`) {
        container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;

        lastFunction = `multiply`;
        counter = 0;
        decimalPlaceCounter = 0;

    }
    else if (lastFunction == `subtract`) {  //tuka turi else if za negativni broevi <3
        if (container < 0) {
            container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `multiply`;
            decimalPlaceCounter = 0;
            console.log(`iffica`);
        }
        else {
            container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `multiply`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    else if (lastFunction == `multiply`) {
        console.log(container);
        console.log(container2);
        container2 = ((parseFloat(container2) * parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;
        lastFunction = `multiply`;
        counter = 0;
        decimalPlaceCounter = 0;
        console.log(`aaaaaaaaa`);
    }
    else if (lastFunction == `divide`) {

        if (container == 0) {
            alert(`Error`);
            clear()

        }
        else {
            container2 = ((parseFloat(container2) / parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    if ((container2 === `0`)) {
        container2 = parseFloat(container).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `multiply`;
        decimalPlaceCounter = 0;

    }
    else if (container === `0`) {
        numberBox2.innerHTML = parseFloat(container2).toFixed(2);
        lastFunction = `multiply`;
        numberBox.innerHTML = `0`;
        decimalPlaceCounter = 0;

    }
    else if (container) {
        container2 = (parseFloat(container2) * parseFloat(container)).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `multiply`;
        decimalPlaceCounter = 0;

    }
    else {
        alert(`Error`)
        clear()

    }}
})


divide.addEventListener(`click`, function () {
    if ((container > 99999999999999999) || (container2 > 99999999999999999) || (container < -99999999999999999) || (container2< -99999999999999999)) {
        alert(`ERROR: Number is too large`);
        clear()

    }else{
    if (lastFunction == `add`) {
        container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;

        lastFunction = `subtract`;
        counter = 0;
        decimalPlaceCounter = 0;

    }
    else if (lastFunction == `subtract`) {  //tuka turi else if za negativni broevi <3
        if (container < 0) {
            container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            decimalPlaceCounter = 0;
            console.log(`iffica`);
        }
        else {
            container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    else if (lastFunction == `multiply`) {
        console.log(container);
        console.log(container2);
        container2 = ((parseFloat(container2) * parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;
        lastFunction = `subtract`;
        counter = 0;
        decimalPlaceCounter = 0;
        console.log(`aaaaaaaaa`);
    }
    else if (lastFunction == `divide`) {
        if (container == 0) {
            alert(`Error`);
            clear()

        }
        else {
            container2 = ((parseFloat(container2) / parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    if (container2 === `0`) {
        container2 = parseFloat(container).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `divide`;
        decimalPlaceCounter = 0;

    }
    else if (container === `0`) {
        numberBox2.innerHTML = parseFloat(container2).toFixed(2);
        lastFunction = `divide`;
        numberBox.innerHTML = `0`;
        decimalPlaceCounter = 0;

    }
    else if (container) {
        container2 = ((parseFloat(container2)) / (parseFloat(container))).toFixed(2);
        numberBox2.innerText = container2;
        numberBox.innerHTML = `0`;
        container = `0`;
        lastFunction = `divide`
        console.log(`delenje`);
        decimalPlaceCounter = 0;

    }

    else {
        alert(`Error`)
        clear()

    }}
})

ce.addEventListener(`click`, function () {
    if (container == `0`) {

    }
    else {
        container = container.slice(0, -1);
        numberBox.innerHTML = numberBox.innerHTML.slice(0, -1);
    }
})


c.addEventListener(`click`, function () {
    clear()

})

equals.addEventListener(`click`, function () {
    if ((container > 99999999999999999) || (container2 > 99999999999999999) || (container < -99999999999999999) || (container2< -99999999999999999)) {
        alert(`ERROR: Number is too large`);
        clear()

    }else{
    if (lastFunction == `add`) {
        container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;
        lastFunction = ``;
        counter = 0;
        decimalPlaceCounter = 0;

    }
    else if (lastFunction == `subtract`) {  //tuka turi else if za negativni broevi <3
        if (container < 0) {
            container2 = ((parseFloat(container2) + parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = ``;
            counter = 0;
            decimalPlaceCounter = 0;
            console.log(`iffica`);
        }
        else {
            container2 = ((parseFloat(container2) - parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = ``;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    else if (lastFunction == `multiply`) {
        console.log(container);
        console.log(container2);
        container2 = ((parseFloat(container2) * parseFloat(container))).toFixed(2);
        numberBox2.innerText = ``;
        numberBox.innerHTML = container2;
        container = `0`;
        lastFunction = ``;
        counter = 0;
        decimalPlaceCounter = 0;
        console.log(`aaaaaaaaa`);
    }
    else if (lastFunction == `divide`) {

        if (container == 0) {
            alert(`Error`);
            clear()

        }
        else {
            container2 = ((parseFloat(container2) / parseFloat(container))).toFixed(2);
            numberBox2.innerText = ``;
            numberBox.innerHTML = container2;
            container = `0`;
            lastFunction = `subtract`;
            counter = 0;
            decimalPlaceCounter = 0;
        }

    }
    else {

    }}
})


function clear() {
    container = `0`;
    container2 = `0`;
    numberBox.innerHTML = `0`;
    numberBox2.innerHTML = ``;
    counter = 1;
    decimalPlaceCounter = 0;
    lastFunction = ``;
}


//remember to add the last number thing where it takes the last number and when you click a button it uses it again

//AAAAAAAAAA NOTE TO FUTURE SELF: Find a nice way to use the character check and see if it will do anything at all

//SCREW OPTIMIZING WE'RE WAY PAST THAT 
//REFLECT ON HOW THE FUCK YOU GOT HERE
