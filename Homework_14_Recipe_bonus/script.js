
let title = document.getElementById(`title`);
let numOfIngredients = document.getElementById(`numOfIngredients`);
let ingredientPrinter = document.getElementById(`ingredientList`);

let recipeName = prompt(`What is the name of the recipe?`);
if (!recipeName) {
    alert(`Recipe name is blank, please try again`);

}
else if (recipeName) {
    let numberOfIngredients = parseInt(prompt(`How many ingredients do you plan on using?`));

    if (isNaN(parseInt(numberOfIngredients))) {
        alert(`The number you have inserted is invalid, please try agian.`)

    }

    else if (numOfIngredients = true) {


        let counter = 1;
        allIngredients = "";
        for (let i = 0; i < numberOfIngredients; i++) {
            let ingredient = prompt(`What is the name of ingredient number ${counter}?`);

            counter = counter + 1;
            ingredientPrinter.innerHTML += `<li>${ingredient}</li>`;
        }

        title.innerText = recipeName;
        numOfIngredients.innerText = `Number of ingredients: ${numberOfIngredients}`;



    }


    else {
        alert(`You did not insert a number, please try agian.`)

    }

}
else {
    alert(`Recipe name is blank, please try again`);
}

