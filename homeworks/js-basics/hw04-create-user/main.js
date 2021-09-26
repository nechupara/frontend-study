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
    };

    Object.defineProperties(newUser, {
        firstName: { writable: false, configurable: true },
        lastName: { writable: false, configurable: true },
    });

    return newUser;
}

///////////////////////////////
const user_1 = createNewUser();

console.log(user_1.getLogin());

user_1.firstName = "TEST1";
user_1.lastName = "TEST2";
console.log(user_1);

user_1.setFirstName("TEST1");
user_1.setLastName("TEST2");
console.log(user_1);
