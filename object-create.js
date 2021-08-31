const student={name:'solimidin', job:"read books"};

const techer = new Object();

const humen = Object.create(student);
// console.log(humen.name);

class Pepole{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new Pepole("kalam", 12);
console.log(peop);

function man() {
    this.name ="rahat",
    this.age = 34;
}
const men = new man();
console.log(men);