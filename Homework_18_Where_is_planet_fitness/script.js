let table = document.getElementById(`table`);
let button = document.getElementById(`button`);

let createButtonCounter = 0;


function fetchFunction(url) {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (theFetch) {
            console.log(theFetch);
            table.innerHTML = `<tr>
            <td>PLANET NAME</td>
            <td>POPULATION</td>
            <td>CLIMATE</td>
            <td>GRAVITY</td>
        </tr>`
            for (let i = 0; i < 10; i++) {

                table.innerHTML +=
                    `
                
            <tr>
            <td>${theFetch.results[i].name}</td>
            <td>${theFetch.results[i].population}</td>
            <td>${theFetch.results[i].climate}</td>
            <td>${theFetch.results[i].gravity}</td>
            </tr>
            `
            }

        })

}



button.addEventListener(`click`, function () {
    fetchFunction(`https://swapi.dev/api/planets/?page=1`)
    console.log(`aaa`);
    if (createButtonCounter == 1){
    }
    else{
        nextButtonMaker()
    }
    createButtonCounter = 1;

})




function nextButtonMaker(){
    let nextButton = document.createElement("button");
    nextButton.innerHTML = "NEXT 10";
    document.body.appendChild(nextButton);
    nextButton.addEventListener(`click`, function () {
        fetchFunction(`https://swapi.dev/api/planets/?page=2`)
            nextButton.remove();
            previousButtonMaker()
            
            

    })
}


function previousButtonMaker(){
    let previousButton = document.createElement(`button`);
    previousButton.innerHTML = `PREVIOUS 10`
    document.body.appendChild(previousButton);
    previousButton.addEventListener(`click`, function () {
    fetchFunction(`https://swapi.dev/api/planets/?page=1`)
        previousButton.remove();
        nextButtonMaker()
    })
}