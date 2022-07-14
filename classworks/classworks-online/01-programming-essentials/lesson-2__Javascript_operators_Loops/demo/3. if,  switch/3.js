const user = prompt('admin, simple');
//
// const users = (user === 'admin') ?
//     alert('Welcome!')
//     :
//     (user === 'simpl') ?
//         alert('Welcome! simpl')
//         :
//        ( user === 'user') ?
//             alert('Welcome! user')
//             :
//             alert(`Welcome! ${user}`);

if (user === 'admin') {
    alert('Welcome!');

} else if (user === 'simpl') {
    alert('Welcome! simpl');

} else if (user === 'user') {
    alert('Welcome! user');

}else {
    alert(`Welcome! ${user}`);
}


// console.log("Welcome!" + ' ' + "admin");
// console.log("Welcome!" + ' ' + "admin" + user);
// console.log(`Welcome!         ${user}`);