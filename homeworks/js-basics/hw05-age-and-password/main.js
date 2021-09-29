function createNewUser() {
    function getUserName(nameType) {
        let name = prompt(`Enter your ${nameType}:`);
        while (!name) {
            name = prompt(
                `You haven't entered your ${nameType}.\nEnter your ${nameType} again:`
            );
        }
        return name;
    }

    function isDataFormatValid(inputStr) {
        if (inputStr === null || inputStr.split(".").length !== 3) return false;

        const yyyy = inputStr.split(".")[2];
        const mm = inputStr.split(".")[1];
        const dd = inputStr.split(".")[0];

        if (
            inputStr.split(".").length === 3 &&
            (!Number.isInteger(+dd) ||
                !Number.isInteger(+mm) ||
                !Number.isInteger(+yyyy))
        )
            return false;

        const userDate = new Date(+yyyy, +mm - 1, +dd);
        const currentDate = new Date();

        if (userDate > currentDate) return false;

        return true;
    }

    function getBirthday() {
        let birthday = prompt("Enter your date of birth (dd.mm.yyyy)");
        while (!isDataFormatValid(birthday)) {
            birthday = prompt(
                "Wrong date\nPlease, enter your date of birth again (dd.mm.yyyy)"
            );
        }
        return birthday;
    }

    const newUser = {
        firstName: getUserName("first name"),
        lastName: getUserName("last name"),
        getLogin() {
            return (this.firstName.charAt(0) + this.lastName).toLowerCase();
        },
        setFirstName(name) {
            Object.defineProperty(this, "firstName", { value: name });
        },
        setLastName(name) {
            Object.defineProperty(this, "lastName", { value: name });
        },
        
        ///////////////////////////
        // part of homework 5 starts here
        birthday: getBirthday(),

        getAge() {
            const birthFullDate = new Date(
                +this.birthday.split(".")[2],
                +this.birthday.split(".")[1] - 1,
                +this.birthday.split(".")[0]
            );
            const currentFullDate = new Date();
            const currentMonth = currentFullDate.getMonth();
            const birthMonth = birthFullDate.getMonth();
            const currentDate = currentFullDate.getDate();
            const birthDate = birthFullDate.getDate();
            const currentYear = currentFullDate.getFullYear();
            const birthYear = birthFullDate.getFullYear();

            if (
                currentMonth > birthMonth ||
                (currentMonth === birthMonth && currentDate >= birthDate)
            ) {
                return currentYear - birthYear;
            } else {
                return currentYear - birthYear - 1;
            }
        },

        getPassword() {
            return `${this.firstName[0].toUpperCase()}${this.lastName.toLowerCase()}${
                this.birthday.split(".")[2]
            }`;
        },
    };

    Object.defineProperties(newUser, {
        firstName: { writable: false, configurable: true },
        lastName: { writable: false, configurable: true },
    });

    return newUser;
}

///////////////////////////////
const user_1 = createNewUser();

console.log(user_1);
console.log(user_1.getAge());
console.log(user_1.getPassword());
