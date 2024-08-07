// function calculateAge() {
//     const dob = new Date(document.getElementById('dob').value);
//     const today = new Date();
// }
// if(isNaN(dob.getTime())) {
//     document.getElementById('output').innerHTML = "plz enter a valid date";
//     return;
// }
// let age = today.getFullYear() - dob.getFullYear();
// const monthDifference = today.getMonth() - dob.getMonth();
// if(monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
//     age--;
// }
// document.getElementById('output').innerHTML = "you are " + age + "year old.";
// }
function calculateAge() {
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();

    if (isNaN(dob.getTime())) {
        document.getElementById('output').innerHTML = "Please enter a valid date";
        return;
    }

    let age = today.getFullYear() - dob.getFullYear();
    const monthDifference = today.getMonth() - dob.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('output').innerHTML = "You are " + age + " years old.";
}

