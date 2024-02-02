let productArray = [];


function constructor(name, category = ``, hasDiscount = false, price) {

    this.name = name;
    this.category = category;
    this.hasDiscount = hasDiscount;
    this.price = price;


}

let product1 = new constructor(`Milk`, `Drink`, true, 48);
let product2 = new constructor(`Chocolate`, `Food`, false, 79);
let product3 = new constructor(`Existential Dread`, `Drink`, true, 4800);
let product4 = new constructor(`Cookies`, `Food`, false, 29);
let product5 = new constructor(`Chips`, `Food`, true, 25);
let product6 = new constructor(`Macaroni`, `Food`, false, 68);
let product7 = new constructor(`Orange Juice`, `Drink`, true, 39);
let product8 = new constructor(`HELLO? CAN ANYONE HEAR ME?`, `Food`, true, 4999999);
let product9 = new constructor(`AN EXCUSE FOR A VOWEL`, `Dink`, true, 140);
let product10 = new constructor(`Soda`, `Drink`, false, 24);
let product11 = new constructor(`Fish`, `Food`, false, 200);
let product12 = new constructor(`Potato`, `Food`, true, 18);
let product13 = new constructor(`Liquid Mercury`, `Drink`, true, 300);
let product14 = new constructor(`Meatballs`, `Food`, true, 280);
let product15 = new constructor(`ENTER THE SECOND EXCUSE FOR A VOWEL`, `Food`, true, 350);


productArray = [product1,product2,product3,product4,product5,product6,product7,product8,product9,product10,product11,product12,product13,product14,product15]
console.log(productArray);
// ^^^ there must be a better way of doing the above but I just kinda fumbled and didn't care


let priceAbove20 = productArray.filter(productPrice => productPrice.price > 20)
console.log(priceAbove20);

let discountedFood = productArray.filter(discountedFood => discountedFood.hasDiscount == true && discountedFood.category == `Food`)
console.log(discountedFood);

let discountedItemPrices = productArray
.filter(discountedItemPrices => discountedItemPrices.hasDiscount == true)
.map(discountedItemPrices => `${discountedItemPrices.name} ${discountedItemPrices.price}`)
console.log(discountedItemPrices);

let nameAndPriceWithVowel = productArray.filter(vowels => (vowels.hasDiscount == true))
.filter(vowels => ((vowels.name.slice(0,1)) == `A` ) || ((vowels.name.slice(0,1)) == `E` ) || ((vowels.name.slice(0,1)) == `I` ) || ((vowels.name.slice(0,1)) == `O` ) || ((vowels.name.slice(0,1)) == `U` ) )
console.log(nameAndPriceWithVowel);
    

//^^^^^^^^^^^^^^^^^^  Za ova gore nemashe nachin kade sto mi raboti poednostavno probav posle prvoto == `A`  da stavam || za drugite vrednosti ali ne mi raboteshe :(((((
//ako znaete nachin kako da se napravi bi sakal da go vidam 
 
//(`A`||`E`||`I`||`O`||`U`)



