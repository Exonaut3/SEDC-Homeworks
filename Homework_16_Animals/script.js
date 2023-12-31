let nameTaker = document.getElementById(`dogName`);
let kindTaker = document.getElementById(`dogKind`);
let manualSpeak = document.getElementById(`dogSpeak`);
let button = document.getElementById(`button`);
let button2 = document.getElementById(`button2`);
console.log(`This is a whole other dog, the button adds a new one`);

class Dog { constructor(name,kind){
    this.name = name;
    this.kind = kind;
}

    speak(say){
        if(!this.name || !this.kind ){
            alert(`Some of the boxes are left blank, insert a value and try agian.`)
        }
        else{
       console.log(`${this.name} the ${this.kind} says: ${say}`);
        }
    }


  
}

const doggo1 =  new Dog(`Dzuki`, `Dzukela`);
doggo1.speak(`FUCK`);



button.addEventListener(`click`, function(){
    const doggo2 = new Dog(nameTaker.value, kindTaker.value);
    doggo2.speak(`"${manualSpeak.value}"`) 
})


button2.addEventListener(`click`, function(){
    const doggo2 = new Dog(name=prompt(`What is its name?`), kind=prompt(`What is its race`));
    say = prompt(`What should it say?`)
    doggo2.speak(`"${say}"`);
})


//namerno go ostaviv ako ne se vnese neshto da ostavi samo navodnici









