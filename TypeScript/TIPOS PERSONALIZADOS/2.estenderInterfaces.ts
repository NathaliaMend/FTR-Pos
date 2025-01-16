// extends para trazer ou estender uma interface para 'dentro' de outra


interface Person {
    id: number,
    name: string,
}

interface Teacher extends Person {
    //id: number,
    // name: string,
    subjects: string[]
}

interface Student extends Person {
    //id: number,
    // name: string,
    age: number
}

let teacher: Teacher = { id: 1, name: "Rodrigo", subjects: ["JavaScript", "TypeScript"] }
let student: Student = { id: 2, name: "Nathalia", age: 24 }