const student = {name: null, lastName: null};

let userName = prompt('Enter your name:');
while (!userName) {
    userName = prompt('You haven\'t entered your name.\nPlease, enter your name:');
}

let userLastName = prompt('Enter your last name:')
while (!userLastName) {
    userLastName = prompt('You haven\'t entered your name.\nPlease, enter your name:');
}

student.name = userName;
student.lastName = userLastName;

let subject;
let rate;

do {
    subject = prompt('Enter name of subject:');
    if (subject === null) break;
    rate = prompt('Enter rate:');
    
} while(true);

console.log(student.name, student.lastName);