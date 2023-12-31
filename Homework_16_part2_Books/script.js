class Books {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;
    }
    readCheck() {
        if (this.readingStatus) {
            alert(`Already read "${this.title}" by ${this.author}`);
        }
        else {
            alert(`You still need to read "${this.title}" by ${this.author}`);
        }
    }
}



const book1 = new Books(1984, `George Orwell`, true);
const book2 = new Books(`The undiscovered self`, `Carl Gustav Jung`, true);
const book3 = new Books(`A History of Central Banking and the Enslavement of Mankind`, `Stephen Mitford Goodson`, false);

let coutner = 4;

let listedBook1 = document.getElementById(`1984`);
let listedBook2 = document.getElementById(`The undiscovered self`);
let listedBook3 = document.getElementById(`A History of Central Banking and the Enslavement of Mankind`);
let list = document.getElementById(`list`);



listedBook1.addEventListener(`click`, function () {
    book1.readCheck()
})

listedBook2.addEventListener(`click`, function () {
    book2.readCheck()
})

listedBook3.addEventListener(`click`, function () {
    book3.readCheck()
})



let button = document.getElementById(`button`);




button.addEventListener(`click`, function () {
    let title = prompt(`Who is the author of the book`);
    let author = prompt(`Who is the author of the book?`);
    let newBook = new Books(title, author, confirm(`Have you read this book? :)))`));
    newBook.readCheck();
   
    
})
