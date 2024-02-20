class Animal {
    constructor(name, type, age, size) {
        this.name = name
        this.type = type
        this.age = age
        this.size = size
    }
    eat(input) {
        if (input.isEaten == true) {
            console.log(`The animal ${input.name} was already eaten`);
        }
        else {
            if ((!input instanceof Animal) || (typeof(input) === `string`) ) {
                console.log(`The animal ${this.name} is eating ${input}`);
            }
            else {
                if (input.size >= (this.size * 2)) {
                    console.log(`The animal ${this.name} tried to eat the ${input.name} but it was too large`);
                }
                else {
                    if ((input instanceof Animal) && (this.type.toLowerCase() == `herbivore`)) {
                        console.log(`The animal ${this.name} is a herbivore and does not eat other animals`);
                    }
                    else if ((input instanceof Animal) && (this.type.toLowerCase() !== `herbivore`)) {
                        input.isEaten = true;
                        console.log(`The animal ${this.name} ate the ${input.name}`);
                    }
                    else {
                        console.log(`ERROR`);
                    }
                }
            }


        }




    }
    isEaten = false
}

let tiger = new Animal(`Tiger`, `Carnivore`, 4, 3)
let elephant = new Animal(`Elephant`, `Herbivore`, 10, 20)
let blackBear = new Animal(`Black Bear`, `Omnivore`, 9, 5)

tiger.eat(elephant)
elephant.eat(tiger)
blackBear.eat(tiger)
blackBear.eat(tiger)
blackBear.eat(`Plants lmao`)
