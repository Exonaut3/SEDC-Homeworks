class Academy {
    constructor(name = `string`, students = [], subjects = [], start, end) {
        this.name = name;
        this.students = students;
        this.subjects = subjects;
        this.start = start
        this.end = end
        this.numberOfClasses = this.subjects.length * 10
    }


    printStudents() {
        this.students.forEach(student => console.log(student))
    }
    printSubjects() {
        this.subjects.forEach(subject => console.log(subject))
    }
}



class Subject {
    constructor(title = `string`, isElective = `boolean`, academy, students = [],) {
        this.title = title;
        this.numberOfClasses = 10
        this.isElective = isElective;
        this.academy = academy;
        this.student = students;
    }
    overrideClasses(number) {
        number < 3 ? console.log(`The number of classes cannot be bellow 3`) : this.numberOfClasses = number;
        // if (number < 3) {
        //     console.log(`The number of classes cannot be bellow 3`);
        // }
        // else {
        //     this.numberOfClasses = number;
        // }
    }
}

class Student {
    constructor(firstName = `string`, lastName = `string`, age = `number`,) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.completedSubjects = []
        this.academy = null
        this.currentSubject === undefined ? null : currentSubject

    }

    startAcademy(input) {
<<<<<<< HEAD
        this.academy = input.name;
=======
        this.academy = input;
>>>>>>> 2fd7043d8fd825e30cb3e195384fb53d2f80e8fb
    }
    startSubject(subject) {
        if (this.academy = null) {
            console.log(`ERROR`);
            console.log(`You need to start an academy first`)
        }
        else {
            if (this.currentSubject) {
                this.completedSubjects = this.currentSubject
            }
            this.currentSubject = subject
        }
    }
}


let student1 = new Student(`Trajce`, `Brajce`, 19)
let student2 = new Student(`Pero`, `Staroto`, 24)
let student3 = new Student(`Dzuki`, `Dzukovski`, 23)
let student4 = new Student(`Dimitri`, `Pushkin`, 20)
let student5 = new Student(`Ryan`, `Gosling`, 31)


let htmlSubject = new Subject(`html`, false, undefined,[student1, student2, student3, student4, student5])
let jsSubject = new Subject(`JavaScript`, false, undefined,[student1, student2, student3, student4, student5])
let nodeJsScubject = new Subject(`Node JS`, true, undefined,[student1, student2, student5])
//cannot give the academy property because academy is initialized after and I cannot do it before unless I do a method or smthing :((((


let qinshift = new Academy(`Qinshift Academy`, [student1, student2, student3, student4, student5], [htmlSubject, jsSubject, nodeJsScubject], `10/08/2024`, `10/08/2025`)


htmlSubject.overrideClasses(4)
jsSubject.overrideClasses(2)

student1.startAcademy(`Academy`)
student2.startAcademy(qinshift)
student3.startAcademy(qinshift)
student4.startAcademy(qinshift)
//for some reason will NOT give me the academy in clg no matter what



student1.startSubject([htmlSubject])
student2.startSubject([jsSubject])
student4.startSubject([nodeJsScubject])
student5.startSubject(htmlSubject) //will give error becuase student5 does not have an academy set
//Sega primetiv deka sepak go imam vneseno vo akademijata i za da go printa ke go ostavam taka
//double subject start
student3.startSubject([nodeJsScubject])
student3.startSubject([htmlSubject])



console.log(qinshift);
// academy.printStudents()
// academy.printSubjects()

//^^^^ zakomentirani za da ne punat konzola
