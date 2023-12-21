let array = [13, 32, 74, 85, -37, 0];
let equation = "";
let ping = document.getElementById("list")
let container = document.getElementById("equation")
let sum = 0
for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
    if (i == array.length - 1) {
        equation = equation + `${array[i]} = ${sum}`
    }
    else {
        equation = equation + `${array[i]} + `

    }

    ping.innerHTML += `<li>${array[i]}</li>`;

}



container.innerHTML += equation;

//mozeshe i malce podobro da se napravi ako se organizirav so eden div i koristev firstchild ili neshto slicno
//ne barashe zadacata da go napravam kako funkcija pa zatoa ne go napraviv taka