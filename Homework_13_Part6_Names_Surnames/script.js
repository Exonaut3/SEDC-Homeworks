let firstName = ["Quandale" , "Nathaniel", "Ryan", "George", "Jude", "Goldman"];
let lastName = ["Dingle", "Schmaniel", "Gosling (me)", "Soros", "Shekelstein", "Sachs"];

function nameCombiner(parameter1, parameter2){
    let result = "";
    let counter = 1;
    for (i = 0; i < parameter1.length || i < parameter2.length; i++) {
        result = result + [`${counter}. ${parameter1[i]} ${parameter2[i]}`, ];
if(i < (parameter1.length - 1 )){
    result = result + [`, `];
}
else{
    result = result + [". "]
}
        counter = counter + 1;
      
    }
    return result;
}

console.log(nameCombiner(firstName,lastName));

nameCombiner(firstName, lastName);

//dodadov del za tocki i zapirki koi zavisat od goleminata na nizata