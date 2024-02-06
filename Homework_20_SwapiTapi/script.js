let firstDiv= document.getElementById(`firstLog`)
let secondDiv = document.getElementById(`secondLog`)

function todo() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(function (response) {
            console.log(response)
            console.log(response.filter(response => response.id == 1))
            let mappedOut = response.map(response =>  `<tr><td>[Completed: ${response.completed} ID: ${response.id} Title: ${response.title} UserID: ${response.userId}]</td> </td>`)
            return mappedOut
        })
        .then(response => firstDiv.innerHTML = `${response}`)
}


// .then(console.log(getID))

// .then(fetch(`https://jsonplaceholder.typicode.com/todos/1`)
// .then(response => console.log(response)))


todo()

function userIdTodo() {
    fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(response => response.json())
        .then(response => {
            let log1 = response.filter(response => response.id == 1)
            return log1[0].userId
        })
        .then(function (numberlog){
            fetch(`https://jsonplaceholder.typicode.com/users/${numberlog}`)
            .then(response2 => response2.json())
            .then(response2 => {
                console.log(response2);
                return Object.keys(response2).map(function(k) { return k + `:` + response2[k]})
            })
            .then(response2 => firstDiv.innerHTML += `<br> ${response2}`)
        })


        // .then(response =>
            // fetch(`https://jsonplaceholder.typicode.com/users/${response}`)
            //     .then(response2 => response2.json())
            //     .then(console.log())
        // )
}

userIdTodo()