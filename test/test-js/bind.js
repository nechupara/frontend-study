function bind(context, fn) {
    return function(...args) {
        fn.apply(context, args);
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Михаил', age: 22, job: 'Frontend'};
const person2 = {name: 'Елена', age: 19, job: 'SMM'}

bind(person1, logPerson)();
bind(person2, logPerson)();