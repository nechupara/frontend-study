// FUNCTIONS SECTION ///////
const getUserName = (typeOfName) => {
    let userName = prompt(`Enter your ${typeOfName}:`);
    while (!userName) {
        userName = prompt(
            `You haven't entered your ${typeOfName}.\nPlease, enter your ${typeOfName}:`
        );
    }
    return userName;
};

const getSubject = () => {
    let subject;
    do {
        subject = prompt("Enter name of subject:");
    } while (!subject && subject !== null);
    return subject;
};

const isGradeValid = (grade) => {
    if (grade && !Number.isNaN(+grade) && +grade >= 0) return true;
    return false;
};

const getGrade = (subjectName) => {
    let grade;
    do {
        grade = prompt(`Enter ${subjectName} grade:`);
    } while (!isGradeValid(grade));
    return +grade;
};

/////////////////////////
// MAIN LOGIC SECTION ///
const student = { name: null, lastName: null };

student.name = getUserName('name');
student.lastName = getUserName('last name');
student.table = {};

do {
    let subject = getSubject();
    if (subject === null) break;
    let grade = getGrade(subject);
    student.table[subject] = grade;
} while (true);

let amountOfLowGrades = 0;
let amountOfSubjects = 0;
let sumOfGrades = 0;

for (const key in student.table) {
    const currentGrade = student.table[key];

    if (currentGrade < 4) amountOfLowGrades++;
    amountOfSubjects++;
    sumOfGrades += currentGrade;
}

if (amountOfSubjects) {
    const avgGrade = sumOfGrades / amountOfSubjects;

    if (amountOfLowGrades) {
        alert(`Amount of grades less than 4 is: ${amountOfLowGrades}`);
    } else {
        alert("The student has been transferred to the next course.");
        if (avgGrade >= 7) alert("The student has been awarded a scholarship.");
    }
} else {
    alert('You haven\'t entered any subject')
}
