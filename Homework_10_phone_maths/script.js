let phonePrice = 119.95;
let taxRate = 0.05;
let numberOfPhones = 30;
let priceTimesPhones = phonePrice * numberOfPhones;
let rezultat = priceTimesPhones + (priceTimesPhones * taxRate);

console.log(rezultat + "$");

console.log("-----------------------------------"); 

function finalprice(phonePrice, taxRate, numberOfPhones){
    let rezultat2 =  (phonePrice * numberOfPhones) + ((phonePrice * numberOfPhones)  * taxRate);
    return rezultat2;
}

let rezultat2 = finalprice(119.95, 0.05, 30)
console.log(rezultat2+"$");