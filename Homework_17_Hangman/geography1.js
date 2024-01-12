let a = document.getElementById(`a`)
let b = document.getElementById(`b`)
let c = document.getElementById(`c`)
let d = document.getElementById(`d`)
let e = document.getElementById(`e`)
let f = document.getElementById(`f`)
let g = document.getElementById(`g`)
let h = document.getElementById(`h`)
let i = document.getElementById(`i`)
let j = document.getElementById(`j`)
let k = document.getElementById(`k`)
let l = document.getElementById(`l`)
let m = document.getElementById(`m`)
let n = document.getElementById(`n`)
let o = document.getElementById(`o`)
let p = document.getElementById(`p`)
let q = document.getElementById(`q`)
let r = document.getElementById(`r`)
let s = document.getElementById(`s`)
let t = document.getElementById(`t`)
let u = document.getElementById(`u`)
let v = document.getElementById(`v`)
let w = document.getElementById(`w`)
let x = document.getElementById(`x`)
let y = document.getElementById(`y`)
let z = document.getElementById(`z`)
let hint = document.getElementById(`hint`);

let hangmanContainer = document.getElementById(`hangmanContainer`);
let domWord = document.getElementById(`word`);
let domWordContainer = [];

let lives = 6;

hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman6" src="./ASSETS/HANGMAN_PICS/HANGMAN6.png" alt="">`




let word = `GERMANY`;
let wordArray = word.split(``);
let winCondition = 0;








let counter = 0;
console.log(wordArray);


for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] == ` `) {
        domWordContainer.push(`-`)
    }
    else {
        domWordContainer.push(`_ `)
        winCondition = winCondition + 1;
        console.log(winCondition);
    }
}
domWord.innerHTML = domWordContainer;
domWord.innerHTML = domWord.innerHTML.replaceAll(`,`, ``);

console.log(domWordContainer);

function letterButtons(capitalLetter, lowercaseLetter) {
    for (let i = 0; i < wordArray.length; i++) {
        if ((capitalLetter == wordArray[i]) || (lowercaseLetter == wordArray[i])) {
            domWordContainer.splice(i, 1, capitalLetter);
            domWord.innerHTML = domWordContainer;
            domWord.innerHTML = domWord.innerHTML.replaceAll(`,`, ``);
            console.log(domWordContainer);
            counter = 1;
            winCondition = winCondition - 1;
        }

        else {

        }


    }
    if (counter !== 1) {
        lives = lives - 1;
        counter = 0;
        console.log(`lives`);
    }
    else {
        counter = 0;
    }


    switch (lives) {
        case 0: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman0" src="./ASSETS/HANGMAN_PICS/HANGMAN0.png" alt="">`
            alert(`You lose, better luck next time :)))`);
            a.setAttribute(`disabled`, true)
            b.setAttribute(`disabled`, true)
            c.setAttribute(`disabled`, true)
            d.setAttribute(`disabled`, true)
            e.setAttribute(`disabled`, true)
            f.setAttribute(`disabled`, true)
            g.setAttribute(`disabled`, true)
            h.setAttribute(`disabled`, true)
            i.setAttribute(`disabled`, true)
            j.setAttribute(`disabled`, true)
            k.setAttribute(`disabled`, true)
            l.setAttribute(`disabled`, true)
            m.setAttribute(`disabled`, true)
            n.setAttribute(`disabled`, true)
            o.setAttribute(`disabled`, true)
            p.setAttribute(`disabled`, true)
            q.setAttribute(`disabled`, true)
            r.setAttribute(`disabled`, true)
            s.setAttribute(`disabled`, true)
            t.setAttribute(`disabled`, true)
            u.setAttribute(`disabled`, true)
            v.setAttribute(`disabled`, true)
            w.setAttribute(`disabled`, true)
            x.setAttribute(`disabled`, true)
            y.setAttribute(`disabled`, true)
            z.setAttribute(`disabled`, true)
            break;

        }
        case 1: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman1" src="./ASSETS/HANGMAN_PICS/HANGMAN1.png" alt="">`
            break;

        }
        case 2: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman2" src="./ASSETS/HANGMAN_PICS/HANGMAN2.png" alt="">`
            break;

        }
        case 3: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman3" src="./ASSETS/HANGMAN_PICS/HANGMAN3.png" alt="">`
            break;

        }
        case 4: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman4" src="./ASSETS/HANGMAN_PICS/HANGMAN4.png" alt="">`
            break;

        }
        case 5: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman5" src="./ASSETS/HANGMAN_PICS/HANGMAN5.png" alt="">`
            break;

        }
        case 6: {
            hangmanContainer.innerHTML = `<img class="hangmanPics" id="hangman6" src="./ASSETS/HANGMAN_PICS/HANGMAN6.png" alt="">`
            break;
        }

    }

    switch (winCondition) {
        case 0: {
            alert(`YOU WIN`);
            a.setAttribute(`disabled`, true)
            b.setAttribute(`disabled`, true)
            c.setAttribute(`disabled`, true)
            d.setAttribute(`disabled`, true)
            e.setAttribute(`disabled`, true)
            f.setAttribute(`disabled`, true)
            g.setAttribute(`disabled`, true)
            h.setAttribute(`disabled`, true)
            i.setAttribute(`disabled`, true)
            j.setAttribute(`disabled`, true)
            k.setAttribute(`disabled`, true)
            l.setAttribute(`disabled`, true)
            m.setAttribute(`disabled`, true)
            n.setAttribute(`disabled`, true)
            o.setAttribute(`disabled`, true)
            p.setAttribute(`disabled`, true)
            q.setAttribute(`disabled`, true)
            r.setAttribute(`disabled`, true)
            s.setAttribute(`disabled`, true)
            t.setAttribute(`disabled`, true)
            u.setAttribute(`disabled`, true)
            v.setAttribute(`disabled`, true)
            w.setAttribute(`disabled`, true)
            x.setAttribute(`disabled`, true)
            y.setAttribute(`disabled`, true)
            z.setAttribute(`disabled`, true)

        }
        default: {

        }
    }

}


a.addEventListener(`click`, function () {
    letterButtons(`A`, `a`);
    a.setAttribute(`disabled`, true)

})

b.addEventListener(`click`, function () {
    letterButtons(`B`, `b`);
    b.setAttribute(`disabled`, true)
})

c.addEventListener(`click`, function () {
    letterButtons(`C`, `c`);
    c.setAttribute(`disabled`, true)

})

d.addEventListener(`click`, function () {
    letterButtons(`D`, `d`);
    d.setAttribute(`disabled`, true)

})

e.addEventListener(`click`, function () {
    letterButtons(`E`, `e`);
    e.setAttribute(`disabled`, true)

})

f.addEventListener(`click`, function () {
    letterButtons(`F`, `f`);
    f.setAttribute(`disabled`, true)

})

g.addEventListener(`click`, function () {
    letterButtons(`G`, `g`);
    g.setAttribute(`disabled`, true)

})

h.addEventListener(`click`, function () {
    letterButtons(`H`, `h`);
    h.setAttribute(`disabled`, true)

})

i.addEventListener(`click`, function () {
    letterButtons(`I`, `i`);
    i.setAttribute(`disabled`, true)

})

j.addEventListener(`click`, function () {
    letterButtons(`J`, `j`);
    j.setAttribute(`disabled`, true)

})

k.addEventListener(`click`, function () {
    letterButtons(`K`, `k`);
    k.setAttribute(`disabled`, true)

})

l.addEventListener(`click`, function () {
    letterButtons(`L`, `l`);
    l.setAttribute(`disabled`, true)

})

m.addEventListener(`click`, function () {
    letterButtons(`M`, `m`);
    m.setAttribute(`disabled`, true)

})

n.addEventListener(`click`, function () {
    letterButtons(`N`, `n`);
    n.setAttribute(`disabled`, true)

})

o.addEventListener(`click`, function () {
    letterButtons(`O`, `o`);
    o.setAttribute(`disabled`, true)

})

p.addEventListener(`click`, function () {
    letterButtons(`P`, `p`);
    p.setAttribute(`disabled`, true)

})

q.addEventListener(`click`, function () {
    letterButtons(`Q`, `q`);
    q.setAttribute(`disabled`, true)

})

r.addEventListener(`click`, function () {
    letterButtons(`R`, `r`);
    r.setAttribute(`disabled`, true)

})

s.addEventListener(`click`, function () {
    letterButtons(`S`, `s`);
    s.setAttribute(`disabled`, true)

})

t.addEventListener(`click`, function () {
    letterButtons(`T`, `t`);
    t.setAttribute(`disabled`, true)

})

u.addEventListener(`click`, function () {
    letterButtons(`U`, `u`);
    u.setAttribute(`disabled`, true)

})

v.addEventListener(`click`, function () {
    letterButtons(`V`, `v`);
    v.setAttribute(`disabled`, true)

})

w.addEventListener(`click`, function () {
    letterButtons(`W`, `w`);
    w.setAttribute(`disabled`, true)

})

x.addEventListener(`click`, function () {
    letterButtons(`X`, `x`);
    x.setAttribute(`disabled`, true)

})

y.addEventListener(`click`, function () {
    letterButtons(`Y`, `y`);
    y.setAttribute(`disabled`, true)

})

z.addEventListener(`click`, function () {
    letterButtons(`Z`, `z`);
    z.setAttribute(`disabled`, true)

})





hint.addEventListener(`click`, function(){
    alert(`Think Europe`);
})
















function guess(guessValue) {
    for (let i = 0; i < wordArray.length; i++) {
        if (guessValue.innerText == wordArray[i]) {

        }
    }
}