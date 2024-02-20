function PersonConstructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.getFullName = () => {
        console.log(`${firstName} ${lastName}`);
    }
    this.academyReturn = (student) => {
        console.log(student.academyName);
    }
}


function StudentConstructor(firstName, lastName, age, academyName, studentId) {
    Object.setPrototypeOf(this, new PersonConstructor(firstName, lastName, age))
    this.academyName = academyName
    this.studentId = studentId
    this.study = () => {
        console.log(`The student ${firstName} is studying in the ${academyName}`);
    }
}

let student1 = new StudentConstructor(`Ryan`, `Gosling`, 43, `Drive Academy`, `DR1V3`)
let student2 = new StudentConstructor(`Steven`, `Schekelstein`, 143, `Goldman Sachs`, `293J3W28A`)

student1.study();
console.log(student1);
console.log(student2);

student1.academyReturn(student2)
//^^^ a little weird but it works 

function DesignStudent(firstName, lastName, age, academyName = `Designer Academy`, studentId, isStudentOfTheMonth = Boolean) {
    Object.setPrototypeOf(this, new StudentConstructor(firstName, lastName, age, academyName, studentId))
    this.isStudentOfTheMonth = isStudentOfTheMonth
    this.AttendAdobeExame = () => {
        console.log(`The student ${firstName} is doing an adobe exam!`);
    }
}

function CodeStudent(firstName, lastName, age, academyName = `Code Academy`, studentId) {
    Object.setPrototypeOf(this, new StudentConstructor(firstName, lastName, age, academyName, studentId))
    this.hasGroupProject =false
    this.hasIndividualProject = false

    this.doProject = (type) => {
        if ((Array.isArray(type) == true) && (type.length>1)) {
            this.hasGroupProject = true
        }
        else if ((typeof(type) == `string`) || ((Array.isArray(type) == true) && (type.length=1)) ) {
            this.hasIndividualProject = true
        }
        else {
            console.log(`ERROR: Not a valid variable`);
        }
    }
}

function NetworkStudent(firstName, lastName, age, academyName = `Network Academy`, studentId, academyPart = Number) {
    Object.setPrototypeOf(this, new StudentConstructor(firstName, lastName, age, academyName, studentId))
    this.academyPart = academyPart
    this.attendCiscoExam = () => {
        console.log(`The student ${firstName} is doing a cisco exam!`);
    }
}

console.log(`=========DESIGN STUDENT========`);
let designStudent = new DesignStudent(`Debi`, `Designer`, 21, undefined, `D3B1`, true)
console.log(designStudent);
designStudent.AttendAdobeExame()


console.log(`==============CODE STUDENT==============`);
let codeStudent = new CodeStudent(`Dexter`, `Laboratory`, 26, undefined, `D3XTR`)
console.log(codeStudent);

// PROJECTS TEST

// codeStudent.doProject([`Project 1`, `Project 2`])
// codeStudent.doProject([`Project 1`])
codeStudent.doProject(`Project NIGMA`)



console.log(`==========NETWORK STUDENT==========`);
let networkStudent = new NetworkStudent(`ZYB`, `ZYBBINSON`, 124, undefined, `A457KL4N6KJ645`, 1)
console.log(networkStudent);
networkStudent.attendCiscoExam()











//========================================================



