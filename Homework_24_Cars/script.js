let searchButton = document.getElementById(`searchButton`);
let resetFiltersButton = document.getElementById(`resetFiltersButton`);

let allCheckboxes = document.getElementsByClassName(`checkboxClass`)
let inputReciever = document.getElementsByClassName(`inputReciever`)

let selectorForBrand = document.getElementById(`selectorForBrand`);
let selectorForType = document.getElementById(`selectorForType`);
let searchByModel = document.getElementById(`searchByModel`);
let searchByDoors = document.getElementById(`searchByDoors`);
let selectorForGasType = document.getElementById(`selectorForGasType`);
let searchByColor = document.getElementById(`searchByColor`);
let oldCheckbox = document.getElementById(`oldCheckbox`);
let newCheckbox = document.getElementById(`newCheckbox`);
let horsepower = document.getElementById(`horsepower`)

let table = document.getElementById(`table`)
let optionsTest = document.getElementsByClassName(`typeValue`)



let typeCheckbox = document.getElementById(`typeCheckbox`);
let brandCheckbox = document.getElementById(`brandCheckbox`);
let modelCheckbox = document.getElementById(`modelCheckbox`);
let doorsCheckbox = document.getElementById(`doorsCheckbox`);
let gasTypeCheckbox = document.getElementById(`gasTypeCheckbox`);
let colorCheckbox = document.getElementById(`colorCheckbox`)
let isNewCheckbox = document.getElementById(`isNewCheckbox`);
let horsepowerCheckbox = document.getElementById(`horsepowerCheckbox`);

let container = null;



function displayAll() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json")
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            table.innerHTML = `
        <tr>
            <td>Type</td>
            <td>Brand</td>
            <td>Model</td>
            <td>Doors</td>
            <td>Gas Type</td>
            <td>Color</td>
            <td>Is new</td>
            <td>Horsepower</td>
        </tr>
`
            container = response

            container.forEach((res) => {
                if (res.isNew == true) {
                    res.isNew = `Yes`
                    console.log(`aaa`);
                }
                else {
                    res.isNew = `No`
                }
            })
            container.forEach((res) => {
                table.innerHTML +=
                    `
                <tr>
                <td>${res.type}</td>
                <td>${res.brand}</td>
                <td>${res.model}</td>
                <td>${res.doors}</td>
                <td>${res.gasType}</td>
                <td>${res.color}</td>
                <td>${res.isNew}</td>
                <td>${res.horsepower}</td>
                </tr>
                `
            })


        })
}






function retardFunction() {
    fetch("https://raw.githubusercontent.com/sedc-codecademy/mkwd12-04-ajs/main/G2/Homework/cars.json")
        .then(response => response.json())
        .then((response) => {
            console.log(response);

            console.log(selectorForType.value);

            container = response;

            table.innerHTML = `
        <tr>
            <td>Type</td>
            <td>Brand</td>
            <td>Model</td>
            <td>Doors</td>
            <td>Gas Type</td>
            <td>Color</td>
            <td>Is new</td>
            <td>Horsepower</td>
        </tr>
`

            if (typeCheckbox.checked) {
                container = container.filter(response => response.type == selectorForType.value)
                console.log(`Type box  checked`);
                console.log(container);
            }
            if (brandCheckbox.checked) {
                container = container.filter(response => response.brand == selectorForBrand.value)
                console.log(`Brand box checked`);
                console.log(container);
            }
            if (modelCheckbox.checked) {
                container = container.filter(response => response.model.toLowerCase() == searchByModel.value.toLowerCase())
                console.log(`Model box checked`);
                console.log(container);
            }
            if (doorsCheckbox.checked) {
                container = container.filter(response => response.doors == searchByDoors.value)
                console.log(`Doors box checked`);
                console.log(container);
            }
            if (gasTypeCheckbox.checked) {
                container = container.filter(response => response.gasType == selectorForGasType.value)
                console.log(`GasType box checked`);
                console.log(container);
            }
            if (colorCheckbox.checked) {
                container = container.filter(response => response.color.toLowerCase() == searchByColor.value.toLowerCase())
                console.log(`Color box checked`);
                console.log(container);
            }
            if (isNewCheckbox.checked) {
                if ((oldCheckbox.checked) && (!newCheckbox.checked)) {
                    container = container.filter(response => response.isNew == false)
                }
                if (newCheckbox.checked && (!oldCheckbox.checked)) {
                    container = container.filter(response => response.isNew == true)
                }
                console.log(`IsNew box checked`);
                console.log(container);
            }
            if (horsepowerCheckbox.checked) {
                container = container.filter(response => response.horsepower <= horsepower.value)
                console.log(`Horsepower box checked`);
                console.log(container);
            }

            container.forEach((res) => {
                if (res.isNew == true) {
                    res.isNew = `Yes`
                    console.log(`aaa`);
                }
                else {
                    res.isNew = `No`
                }
            })
            container.forEach((response) => {
                table.innerHTML +=
                    `
                <tr>
                <td>${response.type}</td>
                <td>${response.brand}</td>
                <td>${response.model}</td>
                <td>${response.doors}</td>
                <td>${response.gasType}</td>
                <td>${response.color}</td>
                <td>${response.isNew}</td>
                <td>${response.horsepower}</td>
                </tr>
                `
            })


        })
}


function reset() {
    for (let i = 0; i < allCheckboxes.length; i++) {
        allCheckboxes[i].checked = false
    }

    for (let i = 0; i < inputReciever.length; i++) {
        inputReciever[i].value = null
    }
    //ne mi davashe tuka da iskoristam foreach
}
reset()
displayAll()


searchButton.addEventListener(`click`, function () {
    retardFunction()
})

resetFiltersButton.addEventListener(`click`, function () {
    reset()
    displayAll()
})









